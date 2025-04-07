import type {Metadata} from "next";
import {Mona_Sans as FontSans} from "next/font/google";
import localFont from "next/font/local";
import type React from "react";

import {ThemeProvider} from "@/components/theme-provider";
import {cn} from "@/lib/utils";

import "@/app/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Add IBM Plex Sans Arabic for Arabic text
// const fontArabic = localFont({
//   src: [
//     {
//       path: "../public/fonts/IBMPlexSansArabic-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/IBMPlexSansArabic-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/IBMPlexSansArabic-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-arabic",
// });

export const metadata: Metadata = {
  title: "MTCIT Unity Game Development Training",
  description:
    "Official training program by the Ministry of Transport, Communications and Information Technology",
  generator: "v0.dev",
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
