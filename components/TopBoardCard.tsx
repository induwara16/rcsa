import { Card } from "flowbite-react";
import Image from "next/image";

export default function TopBoardCard({
  person,
}: {
  person: BoardAttributes["board"][0];
}) {
  return (
    <Card className="flex w-60 flex-col items-center p-3 shadow-lg">
      <Image
        {...(person.photo as ImageInfo)}
        alt={person.name}
        className="mx-auto my-2 size-30 rounded-full object-cover !transition-transform hover:scale-110"
      />
      <h5 className="my-0 text-center text-lg leading-6 font-semibold">
        {person.name}
      </h5>
      <p className="my-0 text-center text-sm text-gray-500">
        {person.position}
      </p>
    </Card>
  );
}
