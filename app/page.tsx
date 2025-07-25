import { Button, List } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

import CountupSection from "@/components/CountupSection";
import TickListItem from "@/components/TickListItem";
import { ProjectCard, TopBoardCard } from "@/components/Cards";
import Carousel from "@/components/Carousel";
import Gallery from "@/components/Gallery";
import { Banner1, Banner2 } from "@/components/Banner";

import { attributes as gallery } from "@/content/gallery.md";

import about_us from "@/assets/images/about-us.png";
import about_us_lg from "@/assets/images/about-us-lg.png";
import welcome from "@/assets/images/welcome.png";

import { getAllBoardYears, getBoardByYear } from "@/util/boards";
import { getGallery } from "@/util/image";
import {
  getAllProjectYears,
  getProject,
  getProjectsByYear,
} from "@/util/projects";

import { attributes as config } from "@/content/config/homepage.md";

async function getLatestBoard() {
  const boards = await getAllBoardYears();
  return getBoardByYear(boards[0]);
}

async function getLatestProjects() {
  const { projects: no } = config as HomepageConfig;

  const year = (await getAllProjectYears())[0];
  const projects = await getProjectsByYear(year);
  return await Promise.all(
    projects
      .slice(0, no)
      .map(async (project) => await getProject(year, project)),
  );
}

export default async function Home() {
  const { year, board } = (await getLatestBoard()) as BoardAttributes;
  const projects = (await getLatestProjects()) as ProjectAttributes[];

  const { piclist } = gallery as GalleryAttributes;
  const homePics = await getGallery(piclist.filter((pic) => pic.home));

  return (
    <div className="flex flex-col gap-y-10 pb-10">
      <section className="flex min-h-[100vh] items-start gap-y-10 pb-10 max-lg:pt-10 max-md:flex-col max-md:text-center">
        <div className="format dark:format-invert not-intersect:invisible intersect:motion-preset-slide-right-lg my-auto flex max-w-none flex-7/16 flex-col gap-x-4">
          <h1 className="mb-0 text-4xl leading-12 font-semibold lg:text-5xl lg:leading-15">
            Royal College Science Association
          </h1>
          <p className="md:mt-6">
            Explore the mysteries of science with the Royal College Science
            Association, join us now and expand your knowledge
          </p>

          <div className="not-format mt-5 flex gap-x-4 gap-y-3 max-md:mx-auto max-sm:flex-col md:mt-8">
            <Button pill as={Link} href="/about-us">
              View More
            </Button>
            <Button pill color="dark" as={Link} href="/join-us" outline>
              Join Us
            </Button>
          </div>
        </div>
        <div className="flex flex-9/16 justify-center max-lg:my-auto md:-mr-20 md:ml-8">
          <Image
            src={about_us_lg}
            alt="About Us"
            className="mb-auto max-lg:hidden"
          />
          <Image
            src={about_us}
            alt="About Us"
            className="mx-auto max-[450px]:min-w-[140%] sm:max-w-[85%] lg:hidden"
          />
        </div>
      </section>

      <section className="format dark:format-invert mb-4 flex max-w-none flex-col items-stretch">
        <div className="flex items-center justify-between gap-x-4 gap-y-3 max-md:mb-2 max-md:flex-col">
          <div className="format dark:format-invert mb-3 max-md:text-center">
            <h1 className="!my-0 !text-3xl">Our Projects</h1>
            <p className="!mt-2 tracking-wider max-md:!mb-0">
              Discover exciting projects done by our club annually
            </p>
          </div>
          <div>
            <Button
              pill
              color="dark"
              className="!no-underline"
              outline
              as={Link}
              href={`/projects/${projects[0].year}`}
            >
              View More
            </Button>
          </div>
        </div>

        <div className="mx-auto -mt-2 w-full sm:px-4">
          <Carousel>
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </Carousel>
        </div>
      </section>

      <Banner1 />

      <CountupSection />

      <section className="flex items-center gap-x-15 gap-y-10 pb-10 max-lg:flex-col max-lg:text-center">
        <div className="not-intersect:invisible intersect:motion-preset-slide-right-lg flex flex-1/2 justify-center min-sm:max-lg:max-w-[75%]">
          <Image src={welcome} alt="Welcome to RCSA" />
        </div>
        <div className="format dark:format-invert intersect:motion-preset-slide-left-lg flex max-w-none flex-1/2 flex-col">
          <h1 className="mb-0 text-3xl leading-12 font-semibold lg:text-4xl lg:leading-15">
            Welcome to RCSA
          </h1>
          <p className="text-sm tracking-wider md:mt-6">
            We are a community of science enthusiasts and professionals
            dedicated to advancing the understanding and appreciation of
            science. Our goal is to provide a platform for learning, networking,
            and professional development for students and scientists at all
            levels. Join us today and be a part of the conversation about the
            latest advancements and discoveries in science!
          </p>

          <List className="!mt-2 !pl-0 max-lg:mx-auto">
            <TickListItem>Engaging Projects</TickListItem>
            <TickListItem>Lectures</TickListItem>
            <TickListItem>Field Trips</TickListItem>
            <TickListItem>Research</TickListItem>
          </List>
        </div>
      </section>

      <section className="intersect:motion-preset-fade-lg not-intersect:invisible">
        <Gallery pics={homePics} />
      </section>

      <section className="format dark:format-invert mt-4 flex max-w-none flex-col items-center text-center">
        <div className="not-intersect:invisible intersect:motion-preset-fade-lg">
          <h1 className="mb-0 text-3xl leading-12 font-semibold lg:text-4xl lg:leading-15">
            Our Top Board
          </h1>
          <p className="mt-4 tracking-wider sm:text-lg">
            Meet the dedicated individuals who lead our association and drive
            our mission forward.
          </p>
        </div>

        <div className="mx-auto -mt-2 w-full sm:px-4">
          <Carousel>
            {board.map((person) => (
              <Link
                className="!no-underline"
                key={person.name}
                href={`/top-board/${year}`}
              >
                <TopBoardCard
                  person={person}
                  className="!transition hover:scale-110 hover:cursor-pointer hover:opacity-80"
                />
              </Link>
            ))}
          </Carousel>
        </div>
      </section>

      <Banner2 />
    </div>
  );
}
