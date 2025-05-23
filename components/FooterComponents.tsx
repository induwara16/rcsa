"use client";

import { useRouter } from "next/navigation";

import {
  FooterIcon,
  FooterBrand as FB,
  FooterCopyright as FC,
  FooterLink as FL,
} from "flowbite-react";

import type { FooterLinkProps } from "flowbite-react";

import { BsFacebook, BsInstagram, BsYoutube, BsWhatsapp } from "react-icons/bs";

import logo from "@/assets/images/logo.png";

export const FooterSocial = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <FooterIcon href="#" icon={BsFacebook} />
      <FooterIcon href="#" icon={BsInstagram} />
      <FooterIcon href="#" icon={BsYoutube} />
      <FooterIcon href="#" icon={BsWhatsapp} />
    </div>
  );
};

export const FooterBrand = () => {
  const router = useRouter();

  return (
    <FB
      href="/"
      src={logo.src}
      alt="RCSA Logo"
      name="RCSA"
      onClick={(e) => {
        e.preventDefault();
        router.push("/");
      }}
    />
  );
};

export const FooterCopyright = () => {
  const router = useRouter();

  return (
    <FC
      href="/"
      by="RCSA"
      year={new Date().getFullYear()}
      onClick={(e) => {
        e.preventDefault();
        router.push("/");
      }}
    />
  );
};

export const FooterLink = ({ children, href }: FooterLinkProps) => {
  const router = useRouter();

  return (
    <FL
      href={href}
      onClick={(e) => {
        e.preventDefault();
        router.push("/");
      }}
    >
      {children}
    </FL>
  );
};
