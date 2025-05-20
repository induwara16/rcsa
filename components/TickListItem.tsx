"use client";

import { ListItem } from "flowbite-react";
import { GoCheck } from "react-icons/go";

function TickIcon() {
  return <GoCheck className="!my-0 mr-3 h-5 w-5 text-emerald-500" />;
}

export default function TickListItem({ children }: React.PropsWithChildren) {
  return (
    <ListItem className="!my-1.5" icon={TickIcon}>
      {children}
    </ListItem>
  );
}
