import { Button } from "flowbite-react";
import Link from "next/link";

import Particles from "@/components/Particles";

export default function Home() {
  return (
    <section className="flex max-md:flex-col items-center bg-white dark:bg-gray-800 px-10 min-h-[100vh] max-md:text-center py-10 md:-mt-16">
      <Particles />
      <div className="z-10 flex-1/2 flex flex-col gap-4 format dark:format-invert max-w-none">
        <h1 className="text-4xl md:text-5xl font-semibold leading-12 md:leading-15 mb-0">Royal College Science Association</h1>
        <p>
          Explore the mysteries of science with the Royal College Science Association, join us now and expand your knowledge
        </p>

        <div className="flex max-sm:flex-col gap-5 mt-5 not-format">
          <Button pill as={Link} href="/about-us">View More</Button>
          <Button pill as={Link} href="/register" outline>Join Us</Button>
        </div>
      </div>
      <div className="flex-1/2">
      </div>
    </section>
  );
}
