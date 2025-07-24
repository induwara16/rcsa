import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "flowbite-react";

import Gallery from "@/components/Gallery";
import TopBoardCard from "@/components/TopBoardCard";
import Pagination from "@/components/Pagination";

import { getAllBoardYears, getBoardByYear } from "@/util/boards";
import { getAllProjectYears } from "@/util/projects";
import { getAdjacentElems } from "@/util/util";

interface PageProps {
  params: Promise<{
    year: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { year } = await params;

  if (!year) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: `Top Board of ${year}`,
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const years = await getAllBoardYears();
  return years.map((year: string) => ({
    year,
  }));
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { year } = await params;
  const { board, group_pic } = (await getBoardByYear(year))!;
  const { prev, next } = getAdjacentElems(year, await getAllBoardYears());
  const showYearButton = (await getAllProjectYears()).includes(year);

  return (
    <div className="relative flex flex-col gap-y-10 pt-10 pb-5">
      <div className="flex items-center justify-between gap-4 max-md:flex-col">
        <div className="format dark:format-invert">
          <h1 className="text-center max-lg:mb-3 max-lg:!text-3xl">
            Top Board of {year}
          </h1>
        </div>

        <div className="flex gap-3 max-md:flex-col">
          {showYearButton && (
            <Button
              pill
              color="dark"
              outline
              as={Link}
              href={`/projects/${year}`}
            >
              The Year
            </Button>
          )}

          <Pagination prefix="top-board" next={next} prev={prev} />
        </div>
      </div>

      {group_pic && (
        <Gallery
          pics={[
            {
              ...(group_pic as ImageInfo),
              title: `Top Board of ${year}`,
            },
          ]}
        />
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
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
