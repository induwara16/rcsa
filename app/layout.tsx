import { createTheme, ThemeModeScript, ThemeProvider } from "flowbite-react";
import type { Metadata } from "next";
import { Exo } from "next/font/google";

import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RCSA - Royal College Science Association",
  description: "Official website of the Royal College Science Association",
};

const theme = createTheme({
  navbar: {
    root: {
      inner: {
        base: 'md:!items-stretch'
      }
    },
    collapse: {
      base: 'h-auto',
      list: '*:!mx-0 md:h-full *:md:h-full *:md:flex *:md:items-center *:hover:!bg-gray-200 *:dark:hover:!bg-gray-700',
    },
    link: {
      base: "text-base font-semibold hover:!text-sky-600 hover:dark:!text-sky-400 flex !px-4 !mx-0",
      active: {
        on: "text-sky-700 dark:text-sky-500",
      }
    }
  },
  dropdown: {
    floating: {
      item: { base: '!text-base hover:!text-sky-600 hover:dark:!text-sky-400' }
    },
  },
  button: {
    outlineColor: {
      default: 'border border-neutral-800 text-neutral-800 hover:border-primary-800 hover:bg-primary-800 hover:text-white focus:ring-primary-300 dark:border-neutral-300 dark:text-neutral-300 dark:hover:border-primary-700 dark:hover:bg-primary-700 dark:hover:text-white dark:focus:ring-primary-800'
    },
    base: 'py-6 !px-8 !tracking-wider'
  }
});

const IntersectionObserver = dynamic(() => import("@/components/IntersectObserver"));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${exo.className} antialiased`}
      >
        <IntersectionObserver />
        <ThemeProvider theme={theme}>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
