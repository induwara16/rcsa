"use client";

import { useRouter, useSelectedLayoutSegments } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem as BI,
  type BreadcrumbItemProps,
} from "flowbite-react";
import { MdHomeFilled } from "react-icons/md";

import { slug2title } from "@/util/util";

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

  return (
    segments.length !== 0 && (
      <Breadcrumb className="relative !z-80 bg-gray-100 p-5 dark:bg-gray-700">
        <BreadcrumbItem href="/" icon={MdHomeFilled}>
          Home
        </BreadcrumbItem>

        {segments.map(
          (segment, i) =>
            i !== segments.length - 1 && (
              <BreadcrumbItem
                href={`/${segments.slice(0, i + 1).join("/")}`}
                key={i}
              >
                {slug2title(segment)}
              </BreadcrumbItem>
            ),
        )}

        <BreadcrumbItem>
          {notfound
            ? "404: Page not found"
            : slug2title(segments[segments.length - 1])}
        </BreadcrumbItem>
      </Breadcrumb>
    )
  );
}
