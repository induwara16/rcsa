/* eslint-disable @typescript-eslint/no-require-imports */

import path from "path";
import fs from "fs";
import { getImageInfo } from "./image";

const CONTENT_DIR = path.join(process.cwd(), "content/boards");

export async function getAllBoardYears(): Promise<string[]> {
  const filePaths = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"));

  return filePaths
    .map((file) => path.parse(file).name)
    .sort((a, b) => Number(b) - Number(a));
}

export async function getBoardByYear(
  year: string,
): Promise<BoardAttributes | null> {
  const filePath = path.join(CONTENT_DIR, `${year}.md`);
  if (!fs.existsSync(filePath)) return null;

  const board: BoardAttributes = require(
    `@/content/boards/${year}.md`,
  ).attributes;

  if (typeof board.group_pic === "string" && board.group_pic)
    board.group_pic = (await getImageInfo(board.group_pic))!;

  for (const person of board.board) {
    if (typeof person.photo === "string")
      person.photo = (await getImageInfo(person.photo))!;
  }

  return board;
}
