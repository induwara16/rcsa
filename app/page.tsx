import { Button } from "flowbite-react";
import Link from "next/link";

import AnimatedBlob from "@/components/AnimatedBlob";

import about_us from "@/assets/images/about-us.jpg";

export default function Home() {
  return (
    <section className="flex max-md:flex-col items-center min-h-[100vh] max-md:text-center py-10 ">
      <div className="z-10 flex-1/2 flex flex-col gap-x-4 format dark:format-invert max-w-none intersect:motion-preset-slide-right-lg">
        <h1 className="!opacity-90 text-4xl sm:text-5xl font-semibold leading-12 md:leading-15 mb-0">Royal College Science Association</h1>
        <p>
          Explore the mysteries of science with the Royal College Science Association, join us now and expand your knowledge
        </p>

        <div className="flex max-sm:flex-col max-md:mx-auto gap-y-3 gap-x-4 mt-5 not-format">
          <Button pill as={Link} href="/about-us">View More</Button>
          <Button pill as={Link} href="/register" outline>Join Us</Button>
        </div>
      </div>
      <div className='flex-1/2 not-intersect:invisible intersect:motion-preset-slide-left-lg'>
        <AnimatedBlob
          img={{ src: about_us, alt: 'About Us' }}
          className="h-100 -mb-15 -mt-8 sm:h-120 md:h-150 lg:h-170 max-sm:-mx-20 md:-my-30 md:-mr-30"
          scale="scale-x-125"
        />
      </div>
    </section>
  );
}
