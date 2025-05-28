/* eslint-disable @typescript-eslint/no-require-imports */

import path from "path";
import fs from "fs";
import { getImageInfo } from "./image";

const CONTENT_DIR = path.join(process.cwd(), "content/boards");

export function getAllBoards(): Record<string, BoardAttributes> {
  const filePaths = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"));

  const boards = filePaths.map((fullPath) => {
    const board = require(`@/content/boards/${fullPath}`)
      .attributes as BoardAttributes;

    board.group_pic.photo = getImageInfo(board.group_pic.photo.toString());
    for (const person of board.board) {
      person.photo = getImageInfo(person.photo.toString());
    }

    return board;
  });

  const yearMap: Record<string, BoardAttributes> = {};

  for (const board of boards) {
    yearMap[String(board.year)] = board;
  }

  const sortedYears = Object.keys(yearMap).sort(
    (a, b) => Number(b) - Number(a),
  );

  const ordered: Record<string, BoardAttributes> = {};
  for (const year of sortedYears) {
    ordered[year] = yearMap[year];
  }

  return ordered;
}
