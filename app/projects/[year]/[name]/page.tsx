import { type Metadata } from "next";

import {
  getAllProjectYears,
  getProject,
  getProjectsByYear,
} from "@/util/projects";

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
  const { title } = (await getProject(year, name))!;

  return (
    <div className="relative flex flex-col items-stretch gap-y-8 pt-10 pb-5">
      {title}&lsquo;{year.slice(-2)}
    </div>
  );
};

export default Page;
