"use client";

import {About} from "@/components/about";
import {ApplicationForm} from "@/components/apply";
import {Contact} from "@/components/contact";
import {Curriculum} from "@/components/curriculum";
import {FAQ} from "@/components/faq";
import {Features} from "@/components/features";
import {Footer} from "@/components/footer";
import {Header} from "@/components/header";
import {Hero} from "@/components/hero";
import {useEffect, useState} from "react";

export function LandingPage() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [mounted, setMounted] = useState(false);

  // Handle language change from URL or localStorage on initial load
  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "ar" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language);

      // Update HTML dir attribute for proper RTL support
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }
  }, [language, mounted]);

  if (!mounted) {
    // Return a placeholder to prevent layout shift
    return <div className="h-screen bg-[#0a0a0a]"></div>;
  }

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className={`min-h-screen bg-[#0a0a0a] text-white ${
        language === "ar"
          ? "font-arabic !text-right md:!text-right lg:!text-right"
          : ""
      }`}
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/20 -z-10" />

      <Header language={language} setLanguage={setLanguage} />

      <main className="flex-1">
        <Hero language={language} />
        <About language={language} />
        <Features language={language} />
        <Curriculum language={language} />
        <FAQ language={language} />
        <ApplicationForm language={language} />
        <Contact language={language} />
      </main>

      <Footer language={language} />
    </div>
  );
}
