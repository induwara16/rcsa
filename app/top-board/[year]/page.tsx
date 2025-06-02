import { getAllBoardYears, getBoardByYear } from "@/util/boards";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    year: string;
  }>;
}

export async function generateStaticParams() {
  return getAllBoardYears().map((year: string) => ({
    year,
  }));
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { year } = await params;
  const attributes = getBoardByYear(year);

  if (attributes === null) notFound();

  const { board, group_pic } = attributes;

  console.log(board, group_pic);

  return (
    <div>
      <h1>Top Board for {year}</h1>
      <p>This is the page for the board year: {year}.</p>
    </div>
  );
};

export default Page;
