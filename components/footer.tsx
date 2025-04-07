import { Terminal, Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import Link from "next/link"

interface FooterProps {
  language: "en" | "ar"
}

export function Footer({ language }: FooterProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header height
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="border-t border-[#222] py-12 bg-black">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Terminal className="h-6 w-6 text-[#00ff9d]" />
              <span className="font-bold text-lg">
                <span className="text-[#00ff9d]">{language === "en" ? "Unity" : "Unity"}</span>
                <span>{language === "en" ? "Dev" : "تطوير"}</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">
              {language === "en"
                ? "A Ministry of Transport, Communications and Information Technology initiative to develop local talent in game development."
                : "مبادرة من وزارة النقل والاتصالات وتكنولوجيا المعلومات لتطوير المواهب المحلية في مجال تطوير الألعاب."}
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-[#00ff9d]">
              {language === "en" ? "Quick Links" : "روابط سريعة"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => scrollToSection(e, 'about')}
                  className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors"
                >
                  {language === "en" ? "About" : "حول"}
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => scrollToSection(e, 'features')}
                  className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors"
                >
                  {language === "en" ? "Features" : "الميزات"}
                </a>
              </li>
              <li>
                <a 
                  href="#curriculum" 
                  onClick={(e) => scrollToSection(e, 'curriculum')}
                  className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors"
                >
                  {language === "en" ? "Curriculum" : "المنهج"}
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors"
                >
                  {language === "en" ? "Contact" : "اتصل بنا"}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-[#00ff9d]">
              {language === "en" ? "Resources" : "الموارد"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors">
                  {language === "en" ? "Unity Documentation" : "وثائق Unity"}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors">
                  {language === "en" ? "Learning Materials" : "مواد تعليمية"}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors">
                  {language === "en" ? "FAQ" : "الأسئلة الشائعة"}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors">
                  {language === "en" ? "Support" : "الدعم"}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-[#00ff9d]">
              {language === "en" ? "Legal" : "قانوني"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors">
                  {language === "en" ? "Terms & Conditions" : "الشروط والأحكام"}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors">
                  {language === "en" ? "Privacy Policy" : "سياسة الخصوصية"}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors">
                  {language === "en" ? "Accessibility" : "إمكانية الوصول"}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors">
                  {language === "en" ? "Cookie Policy" : "سياسة ملفات تعريف الارتباط"}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#222] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            {language === "en" 
              ? `© ${new Date().getFullYear()} Ministry of Transport, Communications and Information Technology. All rights reserved.` 
              : `© ${new Date().getFullYear()} وزارة النقل والاتصالات وتكنولوجيا المعلومات. جميع الحقوق محفوظة.`}
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-[#00ff9d] transition-colors">
              <span className="sr-only">Github</span>
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#00ff9d] transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#00ff9d] transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#00ff9d] transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

