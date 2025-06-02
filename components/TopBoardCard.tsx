import { Card } from "flowbite-react";
import Image from "next/image";

export default function TopBoardCard({
  person,
  className = "",
}: {
  person: BoardAttributes["board"][0];
  className?: string;
}) {
  return (
    <Card
      className={`${className} flex h-full flex-col items-center p-3 shadow-lg *:!p-3 *:sm:!p-6`}
    >
      <Image
        {...(person.photo as ImageInfo)}
        alt={person.name}
        className="mx-auto my-2 size-30 rounded-full object-cover"
      />
      <h5 className="my-0 text-center text-lg leading-6 font-semibold text-black/80 dark:text-gray-200">
        {person.name}
      </h5>
      <p className="my-0 text-center text-sm font-medium text-gray-500 dark:text-gray-400/80">
        {person.position.toUpperCase()}
      </p>
    </Card>
  );
}
