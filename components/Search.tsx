"use client";

import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Button, TextInput } from "flowbite-react";

interface FiltersType {
  projects: boolean | string[];
  news: boolean | string[];
}

interface SecondarySearchBarProps {
  filters: FiltersType;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

export default function SecondarySearchBar({
  filters,
  className = "",
}: SecondarySearchBarProps) {
  const [searchText, setSearchText] = useState("");

  return (
    <div className={`${className} flex max-w-lg items-stretch`}>
      <TextInput
        placeholder="Search Projects..."
        sizing="lg"
        value={searchText}
        className="w-full !max-w-none **:!rounded-r-none **:!border-r-0"
        onChange={(e) => setSearchText(e.target.value)}
      />

      <Button className="h-auto !rounded-l-none !px-4 !py-1">
        <MdSearch className="text-2xl" />
      </Button>
    </div>
  );
}
