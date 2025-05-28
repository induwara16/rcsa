import fs from "fs";
import path from "path";
import sizeOf from "image-size";

export function getImageInfo(imagePath: string): ImageInfo | string {
  const resolvedPath = path.resolve(path.join("public", imagePath));

  if (!fs.existsSync(resolvedPath)) {
    return "";
  }

  const imageBuffer = fs.readFileSync(resolvedPath);
  const dimensions = sizeOf(imageBuffer);

  if (!dimensions.width || !dimensions.height) {
    throw new Error(`Unable to determine image dimensions: ${resolvedPath}`);
  }

  return {
    src: path.join("/", imagePath),
    width: dimensions.width,
    height: dimensions.height,
  };
}
