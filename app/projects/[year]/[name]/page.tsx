import { type Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { Button } from "flowbite-react";
import { MdArrowBackIosNew } from "react-icons/md";

import { getAdjacentElems } from "@/util/util";
import {
  getAllProjectYears,
  getProject,
  getProjectsByYear,
} from "@/util/projects";

import Pagination from "@/components/Pagination";
import Gallery from "@/components/Gallery";

interface PageProps {
  params: Promise<{ year: string; name: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { year, name } = await params;

  if (!year || !name) {
    return {
      title: "Page Not Found",
    };
  }

  const { title } = (await getProject(year, name))!;

  return {
    title: `${title}'${year.slice(-2)}`,
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const years = await getAllProjectYears();
  return (
    await Promise.all(
      years.map(async (year) =>
        (await getProjectsByYear(year)).map((name) => ({
          year,
          name,
        })),
      ),
    )
  ).flat();
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { year, name } = await params;
  const { next, prev } = getAdjacentElems(
    name,
    await getProjectsByYear(year),
    false,
  );
  const { title, html, image, committee, gallery } = (await getProject(
    year,
    name,
  ))!;

  return (
    <div className="relative flex flex-col items-stretch gap-y-8 pt-10 pb-5">
      <div className="not-intersect:invisible intersect:motion-preset-fade-lg flex justify-center gap-x-8 gap-y-5 max-sm:flex-col">
        <Button
          pill
          color="alternative"
          as={Link}
          href={`/projects/${year}`}
          className="mr-auto max-sm:ml-auto"
        >
          <MdArrowBackIosNew className="mr-2 text-lg" />
          Back to Projects
        </Button>

        <div className="max-sm:mx-auto">
          <Pagination next={next} prev={prev} prefix={`projects/${year}`} />
        </div>
      </div>

      <div className="flex gap-x-6 gap-y-5 max-md:flex-col">
        <div className="flex flex-4/6 flex-col gap-5 max-md:order-1">
          <div className="not-intersect:invisible intersect:motion-preset-blur-left-lg format dark:format-invert flex !max-w-none flex-col rounded-lg bg-gray-100 px-5 py-8 shadow-lg sm:px-8 sm:py-12 dark:bg-gray-700">
            <h1 className="!mb-3 text-3xl font-bold sm:text-4xl">
              {title}&lsquo;{year.slice(-2)}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>

          <Gallery
            height={150}
            pics={gallery.map((item) => ({
              ...(item as ImageInfo),
              title: `${title}'${year.slice(-2)}`,
            }))}
          />
        </div>
        <div className="flex flex-2/6 flex-col gap-5">
          <div className="not-intersect:invisible intersect:motion-preset-blur-right-lg flex !max-w-none overflow-hidden rounded-lg bg-gray-100 shadow-lg dark:bg-gray-700">
            <Image src={image} alt={name} />
          </div>

          <div className="not-intersect:invisible intersect:motion-preset-blur-right-lg format dark:format-invert flex !max-w-none flex-col gap-5 rounded-lg bg-gray-100 px-5 pt-7 pb-6 shadow-lg dark:bg-gray-700">
            {[
              { post: "Chairman", name: committee.chairman },
              { post: "Secretary", name: committee.secretary },
              { post: "Treasurer", name: committee.treasurer },
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-xs font-semibold">
                  {item.post.toUpperCase()}
                </span>
                <span className="-mt-0.5">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
