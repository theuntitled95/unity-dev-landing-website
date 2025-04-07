import {
  Calendar,
  Code,
  Cpu,
  Globe,
  Laptop,
  Server,
  Shield,
  Zap,
} from "lucide-react";

interface FeaturesProps {
  language: "en" | "ar";
}

export function Features({language}: FeaturesProps) {
  const features = [
    {
      icon: <Calendar className="h-10 w-10 text-emerald-500" />,
      title: language === "en" ? "6-Month Program" : "برنامج لمدة 6 أشهر",
      description:
        language === "en"
          ? "Intensive training covering all aspects of Unity game development with practical projects."
          : "تدريب مكثف يغطي جميع جوانب تطوير ألعاب Unity مع مشاريع عملية.",
    },
    {
      icon: <Code className="h-10 w-10 text-cyan-500" />,
      title: language === "en" ? "C# Programming" : "برمجة C#",
      description:
        language === "en"
          ? "Master C# programming language, the foundation of Unity game development."
          : "إتقان لغة برمجة C#، أساس تطوير ألعاب Unity.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-purple-500" />,
      title:
        language === "en" ? "Game Engine Architecture" : "هندسة محرك الألعاب",
      description:
        language === "en"
          ? "Understand the core architecture of game engines and optimization techniques."
          : "فهم الهندسة الأساسية لمحركات الألعاب وتقنيات التحسين.",
    },
    {
      icon: <Laptop className="h-10 w-10 text-indigo-500" />,
      title: language === "en" ? "Hands-on Projects" : "مشاريع عملية",
      description:
        language === "en"
          ? "Build your portfolio with real game development projects using industry-standard workflows."
          : "بناء محفظتك بمشاريع تطوير ألعاب حقيقية باستخدام سير عمل قياسية في الصناعة.",
    },
    {
      icon: <Server className="h-10 w-10 text-emerald-500" />,
      title:
        language === "en" ? "Multiplayer Development" : "تطوير متعدد اللاعبين",
      description:
        language === "en"
          ? "Learn networking fundamentals and how to create multiplayer game experiences."
          : "تعلم أساسيات الشبكات وكيفية إنشاء تجارب ألعاب متعددة اللاعبين.",
    },
    {
      icon: <Zap className="h-10 w-10 text-cyan-500" />,
      title: language === "en" ? "Performance Optimization" : "تحسين الأداء",
      description:
        language === "en"
          ? "Master techniques to optimize game performance across different platforms and devices."
          : "إتقان تقنيات تحسين أداء اللعبة عبر منصات وأجهزة مختلفة.",
    },
    {
      icon: <Shield className="h-10 w-10 text-purple-500" />,
      title: language === "en" ? "Industry Certification" : "شهادة صناعية",
      description:
        language === "en"
          ? "Receive an official certificate from MTCIT recognized by industry partners."
          : "احصل على شهادة رسمية من MTCIT معترف بها من قبل شركاء الصناعة.",
    },
    {
      icon: <Globe className="h-10 w-10 text-indigo-500" />,
      title: language === "en" ? "Global Standards" : "معايير عالمية",
      description:
        language === "en"
          ? "Training aligned with international game development standards and best practices."
          : "تدريب متوافق مع معايير تطوير الألعاب الدولية وأفضل الممارسات.",
    },
  ];

  return (
    <section id="features" className="py-20 relative bg-[#050505]">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex gap-2 px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400">
            <Cpu className="h-5 w-5" />
            <span className="uppercase text-sm font-semibold tracking-wider">
              {language === "en" ? "Program Features" : "ميزات البرنامج"}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {language === "en"
              ? "Technical Skills You'll Master"
              : "المهارات التقنية التي ستتقنها"}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-[#00cc7d] mx-auto mt-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-slate-800 hover:bg-white/5 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-800/50 to-transparent rounded-bl-full"></div>
              <div className="relative  rounded-lg h-full transition-colors duration-300 group-hover:border-emerald-500/50">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
