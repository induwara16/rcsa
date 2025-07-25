import Image from "next/image";
import Link from "next/link";
import { Card } from "flowbite-react";
import ClampLines from "@/components/ClampLines";

export function TopBoardCard({
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

export const ProjectCard = ({
  project,
  className = "",
}: {
  project: ProjectAttributes;
  className?: string;
}) => {
  return (
    <Link
      className="!no-underline"
      href={`/projects/${project.year}/${project.name}`}
    >
      <Card
        className={`${className} group not-intersect:invisible intersect:motion-preset-fade-lg flex h-full flex-col items-center overflow-hidden !p-0 shadow-lg !transition *:!p-0 hover:scale-105 hover:cursor-pointer`}
      >
        <Image
          {...(project.image as ImageInfo)}
          alt={project.title}
          className="mx-auto h-auto w-full object-cover !transition group-hover:scale-105"
        />

        <div className="flex flex-col gap-3 px-4 pt-2 pb-4">
          <h4 className="my-0 text-xl leading-6 font-bold text-black/80 dark:text-gray-200">
            {project.title}&rsquo;{project.year.slice(-2)}
          </h4>

          <ClampLines
            text={project.excerpt!}
            id={project.name!}
            lines={6}
            className="text-sm font-medium text-gray-500 dark:text-gray-300/80"
          />
        </div>
      </Card>
    </Link>
  );
};
