import { FC } from "react";

interface PageProps {
  params: {
    board: string;
  };
}

const Page: FC<PageProps> = ({ params }) => {
  const { board } = params;
  const year = parseInt(board, 10);

  if (isNaN(year)) {
    return <div>Invalid board year.</div>;
  }

  return (
    <div>
      <h1>Top Board for {year}</h1>
      <p>This is the page for the board year: {year}.</p>
    </div>
  );
};

export default Page;
