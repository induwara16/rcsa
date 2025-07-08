import { titleCase } from "title-case";

export const slug2title = (slug: string): string =>
  titleCase(slug.replace("-", " "));

export const title2slug = (title: string): string =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .replace(/--+/g, "-");
