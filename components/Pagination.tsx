"use client";

import { useRouter } from "next/navigation";

import { Button, ButtonGroup } from "flowbite-react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export const BoardPagination = ({
  next,
  prev,
  ...props
}: {
  next: string | null;
  prev: string | null;
}) => {
  const router = useRouter();

  return (
    <ButtonGroup {...props}>
      <Button
        color="alternative"
        disabled={!prev}
        onClick={() => router.push(`/top-board/${prev}`)}
      >
        <MdArrowBackIos className="mr-1" />
        Previous
      </Button>

      <Button
        color="alternative"
        disabled={!next}
        onClick={() => router.push(`/top-board/${next}`)}
      >
        Next
        <MdArrowForwardIos className="ml-1" />
      </Button>
    </ButtonGroup>
  );
};
