"use client";

import type React from "react";

import {LanguageSwitcher} from "@/components/language-switcher";
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Menu, Terminal, X} from "lucide-react";
import Link from "next/link";
import {useEffect, useState} from "react";

interface HeaderProps {
  language: "en" | "ar";
  setLanguage: (language: "en" | "ar") => void;
}

export function Header({language, setLanguage}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scrolling for anchor links
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Account for header height
        behavior: "smooth",
      });

      // Update URL without page jump
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-[#222] backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-black/80" : "bg-black/50"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Terminal className="h-8 w-8 text-emerald-500" />
            <span className="text-lg font-bold tracking-tight">
              <span className="text-emerald-500">
                {language === "en" ? "Unity" : "Unity"}
              </span>
              <span>{language === "en" ? "Dev" : "تطوير"}</span>
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            className="text-sm font-medium transition-colors hover:text-emerald-500"
            onClick={(e) => handleAnchorClick(e, "about")}
          >
            {language === "en" ? "About" : "حول"}
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium transition-colors hover:text-emerald-500"
            onClick={(e) => handleAnchorClick(e, "features")}
          >
            {language === "en" ? "Features" : "الميزات"}
          </Link>
          <Link
            href="#curriculum"
            className="text-sm font-medium transition-colors hover:text-emerald-500"
            onClick={(e) => handleAnchorClick(e, "curriculum")}
          >
            {language === "en" ? "Curriculum" : "المنهج"}
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium transition-colors hover:text-emerald-500"
            onClick={(e) => handleAnchorClick(e, "faq")}
          >
            {language === "en" ? "FAQ" : "الأسئلة الشائعة"}
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-emerald-500"
            onClick={(e) => handleAnchorClick(e, "contact")}
          >
            {language === "en" ? "Contact" : "اتصل بنا"}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />

          <Button
            asChild
            className="hidden md:inline-flex bg-emerald-500 text-black hover:bg-[#00cc7d] transition-colors"
          >
            <Link href="#apply">
              {language === "en" ? "Apply Now" : "قدم الآن"}
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden border-[#4d4d4d] bg-black/20 backdrop-blur-sm hover:bg-[#333]"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side={language === "ar" ? "right" : "left"}
              className="bg-[#0a0a0a] border-[#222] text-white"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Terminal className="h-8 w-8 text-emerald-500" />
                  <span className="text-lg font-bold tracking-tight">
                    <span className="text-emerald-500">
                      {language === "en" ? "Unity" : "Unity"}
                    </span>
                    <span>{language === "en" ? "Dev" : "تطوير"}</span>
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-[#222]"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <nav className="flex flex-col gap-6">
                <Link
                  href="#about"
                  className="text-lg font-medium transition-colors hover:text-emerald-500"
                  onClick={(e) => handleAnchorClick(e, "about")}
                >
                  {language === "en" ? "About" : "حول"}
                </Link>
                <Link
                  href="#features"
                  className="text-lg font-medium transition-colors hover:text-emerald-500"
                  onClick={(e) => handleAnchorClick(e, "features")}
                >
                  {language === "en" ? "Features" : "الميزات"}
                </Link>
                <Link
                  href="#curriculum"
                  className="text-lg font-medium transition-colors hover:text-emerald-500"
                  onClick={(e) => handleAnchorClick(e, "curriculum")}
                >
                  {language === "en" ? "Curriculum" : "المنهج"}
                </Link>
                <Link
                  href="#faq"
                  className="text-lg font-medium transition-colors hover:text-emerald-500"
                  onClick={(e) => handleAnchorClick(e, "faq")}
                >
                  {language === "en" ? "FAQ" : "الأسئلة الشائعة"}
                </Link>
                <Link
                  href="#contact"
                  className="text-lg font-medium transition-colors hover:text-emerald-500"
                  onClick={(e) => handleAnchorClick(e, "contact")}
                >
                  {language === "en" ? "Contact" : "اتصل بنا"}
                </Link>
              </nav>

              <Button
                asChild
                className="mt-8 w-full bg-emerald-500 text-black hover:bg-[#00cc7d]"
                onClick={() => setIsOpen(false)}
              >
                <Link href="#apply">
                  {language === "en" ? "Apply Now" : "قدم الآن"}
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
