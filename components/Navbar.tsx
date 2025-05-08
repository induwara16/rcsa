import { DarkThemeToggle, Dropdown, DropdownItem, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/images/logo.png";

export default function Navbar_() {
    return (
        <Navbar className="!py-0 !px-6 z-100 sticky border-b border-b-gray-700/30 dark:border-white/20" fluid>
            <NavbarBrand as={Link} href="/" className="py-2.5">
                <Image className='w-14 dark:invert my-1' src={logo} alt="RCSA" />
            </NavbarBrand>

            <div className="flex md:order-2 my-auto gap-x-5">
                <DarkThemeToggle />
                <NavbarToggle />
            </div>

            <NavbarCollapse>
                <NavbarLink as={Link} href="/" active>Home</NavbarLink>
                <NavbarLink as={Link} href="/projects">Projects</NavbarLink>
                <NavbarLink as={Link} href="/articles">Articles</NavbarLink>

                <NavbarLink as='div'>
                    <Dropdown as='button' inline label='Pages'>
                        <DropdownItem as={Link} href="/top-board">Top Board</DropdownItem>
                        <DropdownItem as={Link} href="/faq">FAQ</DropdownItem>
                        <DropdownItem as={Link} href="/contact-us">Contact Us</DropdownItem>
                        <DropdownItem as={Link} href="/about-us">About Us</DropdownItem>
                    </Dropdown>
                </NavbarLink>
            </NavbarCollapse >
        </Navbar >
    );
}