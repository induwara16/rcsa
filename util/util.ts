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
): { prev: string | null; next: string | null } {
  const years = arr.map(Number).sort((a, b) => a - b);
  const currentYear = Number(elem);

  let prev: string | null = null;
  let next: string | null = null;

  for (const y of years) {
    if (y < currentYear) prev = y.toString();
    if (y > currentYear && next === null) next = y.toString();
  }

  return { prev, next };
}
