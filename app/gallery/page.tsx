import Gallery, { type Pic } from "@/components/Gallery";
import { attributes as gallery } from "@/content/gallery.md";

import { getImageInfo } from "@/util/image";

const Page = async () => {
  const { piclist } = gallery as GalleryAttributes;

  return (
    <div className="relative flex flex-col gap-y-8 pt-10 pb-5">
      <div className="format dark:format-invert max-w-none text-center">
        <h1 className="mb-2 max-sm:!text-3xl">Gallery</h1>
        <p className="mb-4 text-lg">
          A collection of our memorable moments and highlights
        </p>
      </div>
      <div>
        <Gallery
          pics={await Promise.all(
            piclist.map(
              async (pic) =>
                ({
                  ...(await getImageInfo(pic.src as string)),
                  title: pic.title,
                }) as Pic,
            ),
          )}
        />
      </div>
    </div>
  );
};

export default Page;
