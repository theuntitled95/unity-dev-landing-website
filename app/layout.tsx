import type {Metadata} from "next";
import {Mona_Sans as FontSans} from "next/font/google";
import type React from "react";

import {ThemeProvider} from "@/components/theme-provider";
import {cn} from "@/lib/utils";

import "@/app/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Unity Training Bootcamp – London Academy x MTCIT",
  description:
    "A professional Unity Game Development Bootcamp by London Academy, proudly sponsored by the Ministry of Transport, Communications and Information Technology (MTCIT).",
  // generator: "v0.dev",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
          // fontArabic.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
