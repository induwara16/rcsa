"use client";

import { Card } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TopBoardCard({
  person,
}: {
  person: BoardAttributes["board"][0];
}) {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push("/top-board")}
      className="flex h-80 w-60 flex-col items-center p-3 shadow-lg !transition hover:scale-110 hover:cursor-pointer hover:opacity-80"
    >
      <Image
        {...(person.photo as ImageInfo)}
        alt={person.name}
        className="mx-auto my-2 size-30 rounded-full object-cover"
      />
      <h5 className="my-0 text-center text-lg leading-6 font-semibold">
        {person.name}
      </h5>
      <p className="my-0 text-center text-sm font-medium text-gray-300 dark:opacity-80">
        {person.position.toUpperCase()}
      </p>
    </Card>
  );
}
