import type { Metadata } from "next";

import { FooterSocial } from "@/components/FooterComponents";
import { MdOutlineAlternateEmail, MdOutlineShare } from "react-icons/md";

export const metadata: Metadata = {
  title: "Contact Us",
};

const Page = async () => {
  return (
    <div className="relative flex flex-col gap-y-8 pt-10 pb-5">
      <div className="format dark:format-invert flex max-w-none items-stretch gap-x-6 gap-y-10 text-center max-md:flex-col">
        <div className="not-intersect:invisible intersect:motion-preset-slide-right-lg flex flex-2/5 flex-col items-start gap-y-3">
          <h2 className="mb-2 !text-3xl max-sm:!text-2xl">
            Need a Direct Line?
          </h2>
          <p className="mb-4 text-left text-sm leading-6 tracking-wider">
            We&apos;d love to hear from you! Whether you&apos;re a curious
            student, an aspiring scientist, or just someone passionate about
            science, our team is here to help. If you have any questions,
            suggestions, or want to learn more about our upcoming events and
            initiatives, feel free to reach out.
          </p>

          <div className="flex flex-col gap-6">
            {[
              {
                label: "Email",
                Icon: MdOutlineAlternateEmail,
                content: (
                  <a href="mailto:rcsa2024@gmail.com" className="text-lg">
                    rcsa2024@gmail.com
                  </a>
                ),
              },
              {
                label: "Social Media",
                Icon: MdOutlineShare,
                content: <FooterSocial className="mt-2 flex !flex-row gap-3" />,
              },
            ].map(({ label, Icon, content }) => (
              <div className="flex gap-4" key={label}>
                <div className="flex aspect-square rounded-md bg-gray-200 p-3.5 dark:bg-gray-700">
                  <Icon className="text-primary-500 flex h-full w-full" />
                </div>
                <div className="flex flex-col items-start">
                  <h5>{label}</h5>
                  {content}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="not-intersect:invisible intersect:motion-preset-slide-left-lg flex-3/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.880809646806!2d79.85859587381037!3d6.9048538930944945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25964809ce65d%3A0x279199ab6b495503!2sRoyal%20College!5e0!3m2!1sen!2slk!4v1750228091554!5m2!1sen!2slk"
            className="h-80 w-full rounded-xl border-0 md:h-full"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
