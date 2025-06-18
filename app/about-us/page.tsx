import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import { Button } from "flowbite-react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { Banner1 } from "@/components/Banner";
import CountupSection from "@/components/CountupSection";

import logo from "@/assets/images/logo.png";
import vision_mission from "@/assets/images/vision-mission.png";

export const metadata: Metadata = {
  title: "About Us",
};

const Page = () => {
  return (
    <div className="relative flex flex-col gap-y-10 pt-10 pb-5">
      <section className="flex items-center gap-x-15 gap-y-10 max-md:flex-col max-md:text-justify">
        <div className="not-intersect:invisible intersect:motion-preset-slide-right-lg flex flex-1/3 justify-center min-sm:max-md:max-w-[75%]">
          <Image src={logo} alt="RCSA" className="opacity-60 dark:invert" />
        </div>
        <div className="format dark:format-invert intersect:motion-preset-slide-left-lg flex max-w-none flex-2/3 flex-col">
          <h1 className="mb-0 text-3xl leading-12 font-semibold lg:text-4xl">
            The Science Association of Royal College
          </h1>
          <p className="text-sm tracking-wider md:mt-6">
            Established on July 1st, 1909, the{" "}
            <strong>Science Association of Royal College</strong> marks its
            115th anniversary in 2024 as the first school Science Association in
            Sri Lanka. From 1990 to 1999, it published the annual magazine{" "}
            <strong>Diwasa</strong>, transitioning to <strong>SCI-CLONE</strong>{" "}
            in 2000, a remarkable achievement scored by RCSA in the new
            millennium. Additionally, RCSA established <strong>SCI-ZONE</strong>
            , Sri Lanka&apos;s sole school Science Museum. Notably,{" "}
            <strong>SCI-EVE</strong>, initiated in 1960, enjoyed consecutive
            success until 2011. With a robust membership base exceeding 400
            members, RCSA continues to play a significant role at Royal College,
            spearheading various science-related projects and elevating the
            institution&apos;s success. Furthermore, RCSA takes pride in its
            pioneering efforts in fostering scientific knowledge beyond its
            walls, particularly in outstation schools, thereby contributing
            significantly to the advancement of science education across the
            nation.
          </p>

          <div className="format-a:!no-underline mt-4 flex gap-4 max-md:mx-auto max-sm:flex-col">
            <Button as={Link} href="/join-us" pill>
              Join Now!{" "}
              <MdKeyboardDoubleArrowRight className="ml-1.5 text-xl" />
            </Button>
            <Button as={Link} href="/contact-us" pill color="alternative">
              Any Questions?
            </Button>
          </div>
        </div>
      </section>

      <CountupSection />

      <section className="flex items-center gap-x-15 gap-y-10 pb-10 max-lg:flex-col max-lg:text-center">
        <div className="format dark:format-invert intersect:motion-preset-slide-left-lg flex max-w-none flex-1/2 flex-col">
          <h1 className="mb-0 text-3xl leading-12 font-semibold">Our Vision</h1>
          <p className="text-sm tracking-wider md:mt-3">
            To serve our Alma-mater Royal College by implementing different
            kinds of projects related to the science stream and to lead Sri
            Lanka to a better future.
          </p>

          <h1 className="mt-4 mb-0 text-3xl leading-12 font-semibold">
            Our Mission
          </h1>
          <p className="text-sm tracking-wider md:mt-3">
            To be the best in-house community serving our own Alma-mater and to
            be the best from all the School Science Associations in Sri Lanka.
          </p>

          <div className="format-a:!no-underline mt-6 flex gap-4 max-lg:mx-auto max-sm:flex-col">
            <Button as={Link} href="/projects" pill>
              Explore Projects
            </Button>
            <Button as={Link} href="/news" pill outline>
              Latest News
            </Button>
          </div>
        </div>

        <div className="not-intersect:invisible intersect:motion-preset-slide-right-lg flex flex-1/2 justify-center min-sm:max-lg:max-w-[75%]">
          <Image src={vision_mission} alt="Welcome to RCSA" />
        </div>
      </section>

      <Banner1 />
    </div>
  );
};

export default Page;
