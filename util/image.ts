import fs from "fs";
import path from "path";
import sizeOf from "image-size";
import { type Pic } from "@/components/Gallery";

export async function getImageInfo(
  imagePath: string,
): Promise<ImageInfo | null> {
  const resolvedPath = path.resolve(path.join("public", imagePath));

  if (!fs.existsSync(resolvedPath)) {
    return null;
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

export async function getGallery(
  piclist: GalleryAttributes["piclist"],
): Promise<Pic[]> {
  return await Promise.all(
    piclist.map(
      async (pic) =>
        ({
          ...(await getImageInfo(pic.src as string)),
          title: pic.title,
        }) as Pic,
    ),
  );
}
