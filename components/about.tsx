import {Code, Cpu, Layers, Terminal} from "lucide-react";
import Image from "next/image";

interface AboutProps {
  language: "en" | "ar";
}

export function About({language}: AboutProps) {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#333] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#333] to-transparent"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex gap-2 px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400">
            <Code className="h-5 w-5" />
            <span className="uppercase text-sm font-semibold tracking-wider">
              {language === "en" ? "About The Program" : "حول البرنامج"}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {language === "en"
              ? "Develop Games, Build Your Future"
              : "طور الألعاب، ابنِ مستقبلك"}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-[#00cc7d] mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-[#00cc7d]/20 rounded-lg blur-lg"></div>
            <div className="relative bg-[#0a0a0a] border border-[#222] rounded-lg overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-8 bg-[#111] border-b border-[#222] flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                <div className="ml-4 text-xs text-gray-400 font-mono">
                  unity-project.cs
                </div>
              </div>
              <div className="pt-12 pb-4 px-4">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt={
                    language === "en"
                      ? "MTCIT Training Program"
                      : "برنامج تدريب MTCIT"
                  }
                  width={500}
                  height={400}
                  className="rounded-md"
                />
              </div>
              <div className="bg-[#111] border-t border-[#222] p-3 font-mono text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-emerald-500" />
                  <span>
                    {language === "en"
                      ? "Ready to build the next generation of game developers"
                      : "جاهز لبناء الجيل القادم من مطوري الألعاب"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2 relative border-slate-800 border py-4 rounded-lg overflow-hidden bg-[#0a0a0a]/20">
              <div className="flex items-center gap-3">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                <div className="flex items-center justify-center w-10 h-10 rounded-lg  text-emerald-500">
                  <Terminal className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">
                  {language === "en" ? "Ministry Initiative" : "مبادرة الوزارة"}
                </h3>
              </div>
              <p className="text-gray-400 pl-[52px]">
                {language === "en"
                  ? "The Ministry of Transport, Communications and Information Technology is committed to developing digital skills across the nation through cutting-edge training programs."
                  : "تلتزم وزارة النقل والاتصالات وتكنولوجيا المعلومات بتطوير المهارات الرقمية في جميع أنحاء البلاد من خلال برامج تدريبية متطورة."}
              </p>
            </div>

            <div className="space-y-2 relative border-slate-800 border py-4 rounded-lg overflow-hidden bg-[#0a0a0a]/20">
              <div className="flex items-center gap-3">
                <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500"></div>
                <div className="flex items-center justify-center w-10 h-10 rounded-lg  text-cyan-500">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">
                  {language === "en"
                    ? "Professional Training"
                    : "تدريب احترافي"}
                </h3>
              </div>
              <p className="text-gray-400 pl-[52px]">
                {language === "en"
                  ? "Learn from industry experts with hands-on experience in game development and Unity technologies. Our curriculum is designed to meet industry standards."
                  : "تعلم من خبراء الصناعة ذوي الخبرة العملية في تطوير الألعاب وتقنيات Unity. تم تصميم منهجنا لتلبية معايير الصناعة."}
              </p>
            </div>

            <div className="space-y-2 relative border-slate-800 border py-4 rounded-lg overflow-hidden bg-[#0a0a0a]/20">
              <div className="flex items-center gap-3">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                <div className="flex items-center justify-center w-10 h-10 rounded-lg text-purple-500">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">
                  {language === "en" ? "Career Opportunities" : "فرص وظيفية"}
                </h3>
              </div>
              <p className="text-gray-400 pl-[52px]">
                {language === "en"
                  ? "Graduates will be prepared for careers in the growing game development industry, both locally and internationally, with portfolio-ready projects."
                  : "سيكون الخريجون مستعدين للعمل في صناعة تطوير الألعاب المتنامية، محليًا ودوليًا، مع مشاريع جاهزة للمحفظة."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
