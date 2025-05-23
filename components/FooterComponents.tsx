"use client";

import { useRouter } from "next/navigation";

import {
  FooterIcon,
  FooterBrand as FB,
  FooterCopyright as FC,
  FooterLink as FL,
} from "flowbite-react";

import type { FooterLinkProps } from "flowbite-react";

import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsWhatsapp,
  BsTwitterX,
} from "react-icons/bs";

import logo from "@/assets/images/logo.png";

import { attributes as social } from "@/content/social.md";

export const FooterSocial = ({ className }: { className?: string }) => {
  const { facebook, instagram, youtube, x, whatsapp } =
    social as SocialAttributes;

  return (
    <div className={className}>
      <FooterIcon href={facebook} target="__blank" icon={BsFacebook} />
      <FooterIcon href={instagram} target="__black" icon={BsInstagram} />
      <FooterIcon href={youtube} target="__black" icon={BsYoutube} />
      <FooterIcon href={x} target="__black" icon={BsTwitterX} />
      <FooterIcon href={whatsapp} target="__black" icon={BsWhatsapp} />
    </div>
  );
};

export const FooterBrand = () => {
  const router = useRouter();

  return (
    <FB
      href="/"
      className="dark-invert-img"
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
      className="dark:text-gray-300"
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
