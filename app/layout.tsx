import type {Metadata} from "next";
import {Mona_Sans as FontSans} from "next/font/google";
import type React from "react";

import {ThemeProvider} from "@/components/theme-provider";
import {cn} from "@/lib/utils";

import "@/app/globals.css";
import {Toaster} from "@/components/ui/toaster";
import {create} from "domain";

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window._hsq = window._hsq || [];
      window._hsq.push(['setPath', window.location.pathname]);
      window.hbspt = window.hbspt || {};
      window.hbspt.forms = window.hbspt.forms || { create: () => {} };
      window.hsFormsOnReady = () => {};
      window._hsq.push(['trackPageView']);

      // Disable auto form tracking
      window._hsq.push(["forms:disableAutomaticCapture"]);
    `,
          }}
        />
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/43422284.js"
        ></script>
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
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
