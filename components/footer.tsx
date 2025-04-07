import {Github, Instagram, Linkedin, Terminal, Twitter} from "lucide-react";
import Link from "next/link";

interface FooterProps {
  language: "en" | "ar";
}

export function Footer({language}: FooterProps) {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 65, // Offset for header height
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="border-t border-[#222] py-12 bg-black">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="#">
              <div className="flex items-center gap-2">
                <Terminal className="h-6 w-6 text-emerald-500" />
                <span className="font-bold text-lg">
                  <span className="text-emerald-500">
                    {language === "en" ? "Unity" : "Unity"}
                  </span>
                  <span>{language === "en" ? "Dev" : "تطوير"}</span>
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400">
              {language === "en"
                ? "An MTCIT initiative empowering Omani youth with skills in Unity game development."
                : "مبادرة من وزارة النقل والاتصالات وتقنية المعلومات لتمكين الشباب العماني بمهارات تطوير ألعاب Unity."}
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-emerald-500">
              {language === "en" ? "Quick Links" : "روابط سريعة"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, "about")}
                  className="text-sm text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  {language === "en" ? "About" : "حول"}
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => scrollToSection(e, "features")}
                  className="text-sm text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  {language === "en" ? "Features" : "الميزات"}
                </a>
              </li>
              <li>
                <a
                  href="#curriculum"
                  onClick={(e) => scrollToSection(e, "curriculum")}
                  className="text-sm text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  {language === "en" ? "Curriculum" : "المنهج"}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="text-sm text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  {language === "en" ? "Contact" : "اتصل بنا"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-emerald-500">
              {language === "en" ? "Resources" : "الموارد"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://docs.unity.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  {language === "en" ? "Unity Documentation" : "وثائق Unity"}
                </a>
              </li>
              <li>
                <a
                  href="https://learn.unity.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  {language === "en" ? "Learning Materials" : "مواد تعليمية"}
                </a>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors"
                  onClick={(e) => scrollToSection(e, "faq")}
                >
                  {language === "en" ? "FAQ" : "الأسئلة الشائعة"}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors"
                  onClick={(e) => scrollToSection(e, "contact")}
                >
                  {language === "en" ? "Support" : "الدعم"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-emerald-500">
              {language === "en" ? "Legal" : "قانوني"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/terms"
                  className="text-sm text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  {language === "en" ? "Terms & Conditions" : "الشروط والأحكام"}
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  {language === "en" ? "Privacy Policy" : "سياسة الخصوصية"}
                </a>
              </li>
              <li>
                <a
                  href="/accessibility"
                  className="text-sm text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  {language === "en" ? "Accessibility" : "إمكانية الوصول"}
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="text-sm text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  {language === "en"
                    ? "Cookie Policy"
                    : "سياسة ملفات تعريف الارتباط"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#222] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 text-center md:text-left">
            {language === "en" ? (
              <>
                © {new Date().getFullYear()} Unity Game Development Training
                Program · Delivered by{" "}
                <span className="font-semibold text-white">London Academy</span>{" "}
                · An MTCIT Initiative. All rights reserved.
              </>
            ) : (
              <>
                © {new Date().getFullYear()} برنامج تدريب تطوير ألعاب Unity ·
                يُقدَّم من قبل{" "}
                <span className="font-semibold text-white">London Academy</span>{" "}
                · مبادرة من وزارة النقل والاتصالات وتقنية المعلومات. جميع الحقوق
                محفوظة.
              </>
            )}
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-emerald-500 transition-colors"
            >
              <span className="sr-only">Github</span>
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-emerald-500 transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-emerald-500 transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-emerald-500 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
