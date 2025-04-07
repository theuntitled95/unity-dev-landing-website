import {cn} from "@/lib/utils";
import {CheckCircle2, Code, Cpu, Layers, Terminal} from "lucide-react";
import Image from "next/image";

interface AboutProps {
  language: "en" | "ar";
}

const aboutItems = [
  {
    icon: <Terminal className="h-5 w-5" />,
    color: "emerald",
    title: {
      en: "National Digital Skills Initiative",
      ar: "مبادرة المهارات الرقمية الوطنية",
    },
    description: {
      en: "Sponsored by MTCIT, this bootcamp is part of a nationwide initiative to empower the next generation of digital creators and game developers in Oman.",
      ar: "بدعم من وزارة النقل والاتصالات وتقنية المعلومات، يأتي هذا البرنامج ضمن مبادرة وطنية لتمكين الجيل القادم من المبدعين الرقميين ومطوري الألعاب في سلطنة عمان.",
    },
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    color: "cyan",
    title: {
      en: "Delivered by London Academy",
      ar: "تنفيذ أكاديمية لندن",
    },
    description: {
      en: "London Academy brings expert-led, hands-on training in Unity, offering a curriculum tailored to industry expectations and local talent development.",
      ar: "تقدم أكاديمية لندن تدريباً عملياً بقيادة خبراء في Unity، من خلال منهج مصمم وفقاً لمتطلبات الصناعة وتنمية الكفاءات المحلية.",
    },
  },
  {
    icon: <Layers className="h-5 w-5" />,
    color: "purple",
    title: {
      en: "Real Career Pathways",
      ar: "مسارات مهنية حقيقية",
    },
    description: {
      en: "Participants will graduate with portfolio-ready projects and job-ready skills to pursue roles in game development, both locally and abroad.",
      ar: "سيتخرج المشاركون بمشاريع جاهزة للعرض ومهارات تؤهلهم للحصول على وظائف في مجال تطوير الألعاب محلياً ودولياً.",
    },
    careers: [
      {label: {en: "Game Developer", ar: "مطور ألعاب"}},
      {label: {en: "Unity Specialist", ar: "متخصص Unity"}},
      {label: {en: "XR/AR Developer", ar: "مطور XR/AR"}},
    ],
  },
];

const colorMap = {
  emerald: "bg-emerald-500 text-emerald-500",
  cyan: "bg-cyan-500 text-cyan-500",
  purple: "bg-purple-500 text-purple-500",
};

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
            {aboutItems.map((item, index) => (
              <div
                key={index}
                className="space-y-2 relative border-slate-800 border py-4 rounded-lg overflow-hidden bg-[#0a0a0a]/20"
              >
                <div className="flex items-center gap-3 px-5">
                  <div
                    className={cn(
                      "absolute top-0 w-1 h-full",
                      language === "en" ? "left-0" : "right-0",
                      colorMap[item.color].split(" ")[0] // just the bg color
                    )}
                  ></div>
                  <div
                    className={cn(
                      "absolute flex top-1 items-center justify-center w-10 h-10 rounded-lg",
                      language === "en" ? "right-1" : "left-1",
                      colorMap[item.color].split(" ")[1] // just the text color
                    )}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">
                    {language === "en" ? item.title.en : item.title.ar}
                  </h3>
                </div>
                <p className="text-gray-400 px-5">
                  {language === "en"
                    ? item.description.en
                    : item.description.ar}
                </p>

                {item.careers && (
                  <ul className="mt-3 space-y-1 px-5">
                    {item.careers.map((career, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-slate-400"
                      >
                        <CheckCircle2 className="mr-2 size-4 text-purple-400" />
                        {language === "en" ? career.label.en : career.label.ar}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
