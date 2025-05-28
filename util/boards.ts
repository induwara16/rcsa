/* eslint-disable @typescript-eslint/no-require-imports */

import path from "path";
import fs from "fs";
import { getImageInfo } from "./image";

const CONTENT_DIR = path.join(process.cwd(), "content/boards");

function walkDir(dir: string, filelist: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath, filelist);
    } else if (file.endsWith(".md")) {
      filelist.push(fullPath);
    }
  });
  return filelist;
}

export function getAllBoards(): Record<string, BoardAttributes> {
  const filePaths = walkDir(CONTENT_DIR);

  const boards = filePaths.map((fullPath) => {
    const relativePath = path.relative(CONTENT_DIR, fullPath);
    const board = require(`@/content/boards/${relativePath}`)
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
