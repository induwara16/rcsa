import { type Metadata } from "next";
import Link from "next/link";

import SecondarySearchBar from "@/components/Search";
import {
  getAllProjectYears,
  getProject,
  getProjectsByYear,
} from "@/util/projects";
import { Button } from "flowbite-react";
import Pagination from "@/components/Pagination";
import { getAdjacentElems } from "@/util/util";
import { getAllBoardYears } from "@/util/boards";
import { ProjectCard } from "@/components/Cards";

interface PageProps {
  params: Promise<{ year: string }>;
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
    title: `Projects of ${year}`,
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const years = await getAllProjectYears();
  return years.map((year: string) => ({
    year,
  }));
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { year } = await params;
  const { next, prev } = getAdjacentElems(year, await getAllProjectYears());
  const showYearButton = (await getAllBoardYears()).includes(year);

  const projects = await Promise.all(
    (await getProjectsByYear(year)).map(
      async (project) => (await getProject(year, project))!,
    ),
  );

  return (
    <div className="relative flex flex-col items-stretch gap-y-8 pt-10 pb-5">
      <div className="format dark:format-invert max-w-none text-center">
        <h1 className="mb-2 max-sm:!text-3xl">Projects of {year}</h1>
        <p className="mb-2 sm:text-lg">
          Discover the imagination and innovation that made {year} unforgettable
        </p>
      </div>

      <div className="flex items-center justify-stretch gap-x-8 gap-y-5 rounded-lg bg-gray-100 p-5 max-lg:flex-col dark:bg-gray-700">
        <SecondarySearchBar
          filters={{ projects: [year], news: false }}
          className="w-full"
        />

        <div className="mb-2 flex gap-3 max-md:flex-col lg:ml-auto">
          {showYearButton && (
            <Button
              pill
              color="dark"
              outline
              as={Link}
              href={`/top-board/${year}`}
            >
              Top Board
            </Button>
          )}

          <Pagination prefix="projects" next={next} prev={prev} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {projects.map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Page;
