import Link from "next/link";
import { Button } from "flowbite-react";

import Gallery from "@/components/Gallery";
import TopBoardCard from "@/components/TopBoardCard";

import { getAllBoardYears, getBoardByYear } from "@/util/boards";

interface PageProps {
  params: Promise<{
    year: string;
  }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllBoardYears().map((year: string) => ({
    year,
  }));
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { year } = await params;
  const { board, group_pic } = getBoardByYear(year)!;

  return (
    <div className="relative flex flex-col gap-y-10 pt-10 pb-5">
      <div className="flex items-center justify-between gap-4 max-sm:flex-col">
        <div className="format dark:format-invert">
          <h1 className="text-center max-sm:text-3xl">Top Board of {year}</h1>
        </div>
        <Button pill color="dark" outline as={Link} href={`/projects/${year}`}>
          The Year
        </Button>
      </div>

      {group_pic.show && (
        <Gallery
          pics={[
            {
              ...(group_pic.photo as ImageInfo),
              title: `Top Board of ${year}`,
            },
          ]}
        />
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {board.map((person, i) => (
          <TopBoardCard
            key={i}
            person={person}
            className="not-intersect:invisible intersect:motion-preset-fade-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
