/* eslint-disable @typescript-eslint/no-require-imports */
import path from "path";
import fs from "fs";

import excerptHtml from "excerpt-html";
import { getImageInfo } from "./image";

const CONTENT_DIR = path.join(process.cwd(), "content/projects");

export async function getAllProjectYears(): Promise<string[]> {
  return fs.promises
    .readdir(CONTENT_DIR, { withFileTypes: true })
    .then((entries) =>
      entries
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name)
        .sort((a, b) => Number(b) - Number(a)),
    );
}

export async function getProjectsByYear(year: string): Promise<string[]> {
  const filePaths = fs
    .readdirSync(path.join(CONTENT_DIR, year))
    .filter((file) => file.endsWith(".md"));

  return filePaths.map((file) => path.parse(file).name);
}

export async function getProject(
  year: string,
  name: string,
): Promise<
  (ProjectAttributes & { name: string; html: string; excerpt: string }) | null
> {
  const filePath = path.join(CONTENT_DIR, `${year}/${name}.md`);
  if (!fs.existsSync(filePath)) return null;

  const { attributes: project, html } = require(
    `@/content/projects/${year}/${name}.md`,
  ) as { attributes: ProjectAttributes; html: string };

  if (typeof project.image === "string" && project.image)
    project.image = (await getImageInfo(project.image))!;

  if (project.gallery.length !== 0)
    project.gallery = await Promise.all(
      project.gallery.map(async (x) => {
        if (typeof x === "string") return (await getImageInfo(x))!;
        else return x;
      }),
    );

  const excerpt = excerptHtml(html, { pruneLength: 0 });

  return { excerpt, html, name, ...project };
}
