import { Button, List } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

import CountupSection from "@/components/CountupSection";
import TickListItem from "@/components/TickListItem";
import TopBoardCard from "@/components/TopBoardCard";
import { Banner1, Banner2 } from "@/components/Banner";

import about_us from "@/assets/images/about-us.png";
import about_us_lg from "@/assets/images/about-us-lg.png";
import welcome from "@/assets/images/welcome.png";

import { getAllBoards } from "@/util/boards";

async function getLatestBoard() {
  const boards = getAllBoards();
  const sorted = Object.keys(boards).sort((a, b) => Number(b) - Number(a));
  return boards[sorted[0]];
}

export default async function Home() {
  const { board } = await getLatestBoard();

  return (
    <div className="flex flex-col gap-y-10 pb-10">
      <section className="flex min-h-[100vh] items-start gap-y-10 py-10 max-md:flex-col max-md:text-center">
        <div className="format dark:format-invert intersect:motion-preset-slide-right-lg my-auto flex max-w-none flex-7/16 flex-col gap-x-4">
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
            <Button pill color="dark" as={Link} href="/register" outline>
              Join Us
            </Button>
          </div>
        </div>
        <div className="not-intersect:invisible intersect:motion-preset-slide-left-lg flex flex-9/16 justify-center max-lg:my-auto md:-mr-20 md:ml-8">
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

      <section className="format dark:format-invert flex max-w-none flex-col items-center pb-10 text-center">
        <h1 className="mb-0 text-3xl leading-12 font-semibold lg:text-4xl lg:leading-15">
          Our Top Board
        </h1>
        <p className="tracking-wider sm:text-lg">
          Meet the dedicated individuals who lead our association and drive our
          mission forward.
        </p>

        <div className="mt-3 flex flex-wrap items-stretch justify-center gap-4">
          {board.map((person) => (
            <TopBoardCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      <Banner2 />
    </div>
  );
}
