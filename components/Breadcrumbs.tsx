"use client";

import { useRouter, useSelectedLayoutSegments } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem as BI,
  type BreadcrumbItemProps,
} from "flowbite-react";
import { MdHomeFilled } from "react-icons/md";
import { titleCase } from "title-case";

const BreadcrumbItem = ({ children, href, ...props }: BreadcrumbItemProps) => {
  const router = useRouter();
  return (
    <BI
      {...props}
      href={href}
      onClick={(e) => {
        if (href) {
          e.preventDefault();
          router.push(href);
        }
      }}
    >
      {children}
    </BI>
  );
};

export default function Breadcrumbs() {
  const segments = useSelectedLayoutSegments();
  const notfound = segments[segments.length - 1] === "/_not-found";

  const formatSlug = (slug: string): string =>
    titleCase(slug.replace("-", " "));

  return (
    segments.length !== 0 && (
      <Breadcrumb className="relative !z-80 bg-gray-100 p-5 dark:bg-gray-700">
        <BreadcrumbItem href="/" icon={MdHomeFilled}>
          Home
        </BreadcrumbItem>

        {segments.map(
          (segment, i) =>
            i !== segments.length - 1 && (
              <BreadcrumbItem href={`/${segment}`} key={i}>
                {formatSlug(segment)}
              </BreadcrumbItem>
            ),
        )}

        <BreadcrumbItem>
          {notfound
            ? "404: Page not found"
            : formatSlug(segments[segments.length - 1])}
        </BreadcrumbItem>
      </Breadcrumb>
    )
  );
}
