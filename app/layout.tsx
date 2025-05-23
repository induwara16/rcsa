import { createTheme, ThemeModeScript, ThemeProvider } from "flowbite-react";
import type { Metadata } from "next";
import { Exo } from "next/font/google";

import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";

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
        base: "md:!items-stretch",
      },
    },
    collapse: {
      base: "h-auto",
      list: "*:!mx-0 *:hover:!bg-gray-200 md:h-full *:md:flex *:md:h-full *:md:items-center *:dark:hover:!bg-gray-700",
    },
    link: {
      base: "!mx-0 flex !px-4 text-base font-semibold hover:!text-sky-600 hover:dark:!text-sky-400",
      active: {
        on: "text-sky-700 dark:text-sky-500",
      },
    },
  },
  dropdown: {
    floating: {
      item: { base: "!text-base hover:!text-sky-600 hover:dark:!text-sky-400" },
    },
  },
  button: {
    base: "!px-8 py-6 !tracking-wider",
  },
  footer: {
    icon: {
      base: "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white",
    },
    divider: {
      base: "border-gray-300 dark:border-gray-600",
    },
    copyright: {
      base: "text-gray-500 dark:text-gray-400",
    },
  },
});

const IntersectionObserver = dynamic(
  () => import("@/components/IntersectObserver"),
);

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
      <body className={`${exo.className} antialiased`}>
        <IntersectionObserver />
        <ThemeProvider theme={theme}>
          <Navbar />
          <main className="overflow-hidden bg-white px-5 pb-8 sm:px-10 md:-mt-16 dark:bg-gray-800">
            <div className="relative !z-20">{children}</div>
            <Particles />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
