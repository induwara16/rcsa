/* eslint-disable @typescript-eslint/no-require-imports */

import path from "path";
import fs from "fs";
import { getImageInfo } from "./image";

const CONTENT_DIR = path.join(process.cwd(), "content/boards");

export function getAllBoardYears(): string[] {
  const filePaths = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"));

  return filePaths
    .map((file) => path.parse(file).name)
    .sort((a, b) => Number(b) - Number(a));
}

export function getBoardByYear(year: string): BoardAttributes | null {
  const filePath = path.join(CONTENT_DIR, `${year}.md`);
  if (!fs.existsSync(filePath)) return null;

  const board: BoardAttributes = require(
    `@/content/boards/${year}.md`,
  ).attributes;

  if (typeof board.group_pic.photo === "string")
    board.group_pic.photo = getImageInfo(board.group_pic.photo as string);

  for (const person of board.board) {
    if (typeof person.photo === "string")
      person.photo = getImageInfo(person.photo as string);
  }

  return board;
}
