import {
  Footer,
  FooterTitle,
  FooterLinkGroup,
  FooterDivider,
} from "flowbite-react";

import {
  FooterSocial,
  FooterBrand,
  FooterLink,
  FooterCopyright,
} from "@/components/FooterComponents";

export default function _Footer() {
  return (
    <Footer
      className="relative z-20 !rounded-none bg-gray-100 sm:px-8 sm:pt-10 sm:pb-8 dark:bg-gray-700"
      container
    >
      <div className="not-intersect:invisible intersect:motion-preset-fade-lg w-full">
        <div className="flex w-full flex-wrap justify-between gap-x-16 gap-y-4 sm:justify-between">
          <div>
            <FooterBrand />
          </div>
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div>
              <FooterTitle title="INFO" />
              <FooterLinkGroup col>
                <FooterLink href="/about-us">About Us</FooterLink>
                <FooterLink href="/contact-us">Contact Us</FooterLink>
                <FooterLink href="/top-board">Top Board</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Pages" />
              <FooterLinkGroup col>
                <FooterLink href="/join-us">Join Us!</FooterLink>
                <FooterLink href="/gallery">Gallery</FooterLink>
                <FooterLink href="/posts/news">News</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Projects" />
              <FooterLinkGroup col>
                <FooterLink href="#">Forza Scientia&apos;25</FooterLink>
                <FooterLink href="#">SCI-GENIX&apos;25</FooterLink>
                <FooterLink href="#">SCI-WAVE&apos;25</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="flex w-full max-sm:flex-col *:max-sm:mx-auto sm:flex sm:items-center sm:justify-between">
          <FooterCopyright />
          <FooterSocial className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center" />
        </div>
      </div>
    </Footer>
  );
}
