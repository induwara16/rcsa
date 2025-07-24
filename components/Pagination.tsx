"use client";

import { useRouter } from "next/navigation";

import { Button, ButtonGroup } from "flowbite-react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export default function Pagination({
  next,
  prev,
  prefix,
  ...props
}: {
  next: string | null;
  prev: string | null;
  prefix: string;
}) {
  const router = useRouter();

  return (
    <ButtonGroup {...props}>
      <Button
        color="alternative"
        disabled={!prev}
        onClick={() => router.push(`/${prefix}/${prev}`)}
      >
        <MdArrowBackIos className="mr-1" />
        Previous
      </Button>

      <Button
        color="alternative"
        disabled={!next}
        onClick={() => router.push(`/${prefix}/${next}`)}
      >
        Next
        <MdArrowForwardIos className="ml-1" />
      </Button>
    </ButtonGroup>
  );
}
