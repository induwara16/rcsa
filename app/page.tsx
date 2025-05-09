import { Button } from "flowbite-react";
import Link from "next/link";

import AnimatedBlob from "@/components/AnimatedBlob";
import CountupSection from "@/components/CountupSection";
import about_us from "@/assets/images/about-us.jpg";

export default function Home() {
  return (
    <>
      <section className="flex min-h-[100vh] items-center py-10 max-md:flex-col max-md:text-center">
        <div className="format dark:format-invert intersect:motion-preset-slide-right-lg flex max-w-none flex-1/2 flex-col gap-x-4">
          <h1 className="mb-0 text-4xl leading-12 font-semibold sm:text-5xl md:leading-15">
            Royal College Science Association
          </h1>
          <p>
            Explore the mysteries of science with the Royal College Science
            Association, join us now and expand your knowledge
          </p>

          <div className="not-format mt-5 flex gap-x-4 gap-y-3 max-md:mx-auto max-sm:flex-col">
            <Button pill as={Link} href="/about-us">
              View More
            </Button>
            <Button pill as={Link} href="/register" outline>
              Join Us
            </Button>
          </div>
        </div>
        <div className="not-intersect:invisible intersect:motion-preset-slide-left-lg flex-1/2">
          <AnimatedBlob
            img={{ src: about_us, alt: "About Us" }}
            className="-mt-8 -mb-15 h-100 max-sm:-mx-20 sm:h-120 md:-my-30 md:-mr-30 md:h-150 lg:h-170"
            scale="scale-x-125"
          />
        </div>
      </section>

      <CountupSection />
    </>
  );
}
