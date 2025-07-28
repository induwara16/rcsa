import { titleCase } from "title-case";

export const slug2title = (slug: string): string =>
  titleCase(slug.replace("-", " "));

export const title2slug = (title: string): string =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .replace(/--+/g, "-");

export function getAdjacentElems<T>(
  elem: T,
  arr: T[],
  sort = true,
): { prev: T | null; next: T | null } {
  if (sort) {
    const years = arr.map(Number).sort((a, b) => a - b);
    const currentYear = Number(elem);

    let prev: T | null = null;
    let next: T | null = null;

    for (const y of years) {
      if (y < currentYear) prev = y.toString() as T;
      if (y > currentYear && next === null) next = y.toString() as T;
    }

    return { prev, next };
  } else {
    let prev: T | null = null;
    let next: T | null = null;

    const i = arr.indexOf(elem);

    if (i > 0) prev = arr[i - 1];
    if (i < arr.length - 1) next = arr[i + 1];

    return { prev, next };
  }
}

export const projectName = (title: string, year: string) =>
  `${title}’{${year.slice(-2)}}`;
