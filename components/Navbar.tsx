import {
  DarkThemeToggle,
  Dropdown,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/images/logo.png";

export default function Navbar_() {
  return (
    <Navbar
      className="intersect:*:motion-preset-blur-down-md intersect-once sticky top-0 z-100 border-b border-b-gray-700/30 !px-6 !py-0 dark:border-white/20"
      fluid
    >
      <NavbarBrand as={Link} href="/" className="py-2.5">
        <Image className="my-1 w-14 dark:invert" src={logo} alt="RCSA" />
      </NavbarBrand>

      <div className="my-auto flex gap-x-5 md:order-2">
        <DarkThemeToggle />
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavbarLink as={Link} href="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/projects">
          Projects
        </NavbarLink>
        <NavbarLink as={Link} href="/posts">
          Posts
        </NavbarLink>

        <NavbarLink as="div">
          <Dropdown as="button" inline label="Pages">
            <DropdownItem as={Link} href="/top-board">
              Top Board
            </DropdownItem>
            <DropdownItem as={Link} href="/gallery">
              Gallery
            </DropdownItem>
            <DropdownItem as={Link} href="/contact-us">
              Contact Us
            </DropdownItem>
            <DropdownItem as={Link} href="/about-us">
              About Us
            </DropdownItem>
          </Dropdown>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
