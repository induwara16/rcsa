import { Button } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

import CountupSection from "@/components/CountupSection";
import about_us from "@/assets/images/about-us.png";
import about_us_lg from "@/assets/images/about-us-lg.png";

export default function Home() {
  return (
    <>
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
            <Button pill as={Link} href="/register" outline>
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

      <CountupSection />
    </>
  );
}
