import type { Metadata } from "next";

import { attributes as formConfig } from "@/content/config/form.md";
import Form from "@/components/Form";

export const metadata: Metadata = {
  title: "Join Us",
};

const Page = async () => {
  const { signup_form } = formConfig as FormConfigAttributes;

  return (
    <div className="relative flex flex-col gap-y-8 pt-10 pb-5">
      <div className="format dark:format-invert max-w-none text-center">
        <h1 className="mb-2 max-sm:!text-3xl">Join Us</h1>
        <p className="mb-4 sm:text-lg">
          Unlock your curiosity. Connect, explore, and innovate with the Royal
          College Science Association!
          <br />
          Fill the following form to become a member of RCSA
        </p>
      </div>
      <div className="px-2">
        <Form form_name={signup_form} />
      </div>
    </div>
  );
};

export default Page;
