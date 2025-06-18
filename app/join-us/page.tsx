import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us",
};

const Page = async () => {
  return (
    <div className="relative flex flex-col gap-y-8 pt-10 pb-5">
      <div className="format dark:format-invert max-w-none text-center">
        <h1 className="mb-2 max-sm:!text-3xl">Join Us</h1>
        <p className="mb-0 text-lg">
          Unlock your curiosity. Connect, explore, and innovate with the Royal
          College Science Association!
        </p>
        <p className="mt-1 mb-4">
          Fill the following form to become a member of RCSA
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Page;
