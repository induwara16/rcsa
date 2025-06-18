import type { Metadata } from "next";
import { Label, TextInput, Button } from "flowbite-react";

export const metadata: Metadata = {
  title: "Join Us",
};

const Page = async () => {
  return (
    <div className="relative flex flex-col gap-y-8 pt-10 pb-5">
      <div className="format dark:format-invert max-w-none text-center">
        <h1 className="mb-2 max-sm:!text-3xl">Join Us</h1>
        <p className="mb-4 text-lg">
          Unlock your curiosity. Connect, explore, and innovate with the Royal
          College Science Association!
          <br />
          Fill the following form to become a member of RCSA
        </p>
      </div>
      <div className="mt-4">
        <form className="mx-auto flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1">Your email</Label>
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1">Your password</Label>
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <Button className="mt-2" type="submit" pill>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
