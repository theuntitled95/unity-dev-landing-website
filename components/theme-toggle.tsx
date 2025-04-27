"use client";

import {Button} from "@/components/ui/button";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";

export function ThemeToggle() {
  const {theme, setTheme} = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      title={
        theme === "light" ? "Switch to dark theme" : "Switch to light theme"
      }
      className="border-[#4d4d4d] bg-black/20 backdrop-blur-sm hover:bg-[#333] hover:text-[#aed9cf] transition-all dark:border-[#4d4d4d] dark:bg-black/20 dark:text-white dark:hover:bg-[#333] dark:hover:text-[#00ff9d]"
      aria-label={
        theme === "light" ? "Switch to dark theme" : "Switch to light theme"
      }
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      <span className="sr-only">
        {theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      </span>
    </Button>
  );
}
