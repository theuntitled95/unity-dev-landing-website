"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface LanguageSwitcherProps {
  language: "en" | "ar"
  setLanguage: (language: "en" | "ar") => void
}

export function LanguageSwitcher({ language, setLanguage }: LanguageSwitcherProps) {
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en"
    setLanguage(newLanguage)

    // Smooth transition when changing language
    document.documentElement.classList.add("language-transition")
    setTimeout(() => {
      document.documentElement.classList.remove("language-transition")
    }, 300)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleLanguage}
      title={language === "en" ? "Switch to Arabic" : "Switch to English"}
      className="border-[#4d4d4d] bg-black/20 backdrop-blur-sm hover:bg-[#333] hover:text-[#00ff9d] transition-all"
      aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <Globe className="h-4 w-4" />
      <span className="sr-only">{language === "en" ? "Switch to Arabic" : "Switch to English"}</span>
    </Button>
  )
}

