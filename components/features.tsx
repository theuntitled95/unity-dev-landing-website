import {
  Calendar,
  Code,
  Cpu,
  Globe,
  Laptop,
  Layers,
  Server,
  Shield,
  Terminal,
  Zap,
} from "lucide-react";

interface FeaturesProps {
  language: "en" | "ar";
}

export function Features({language}: FeaturesProps) {
  const features = [
    {
      icon: <Calendar className="h-10 w-10 text-emerald-500" />,
      title: language === "en" ? "6-Month Bootcamp" : "معسكر لمدة 6 أشهر",
      description:
        language === "en"
          ? "A structured and intensive journey designed to take you from beginner to job-ready Unity developer."
          : "رحلة تدريبية مكثفة ومنظمة تهدف إلى تأهيلك من مبتدئ إلى مطور Unity جاهز لسوق العمل.",
    },
    {
      icon: <Code className="h-10 w-10 text-cyan-500" />,
      title: language === "en" ? "C# for Unity" : "C# لـ Unity",
      description:
        language === "en"
          ? "Learn how to write professional, scalable C# code — the language powering Unity games."
          : "تعلم كيفية كتابة كود C# احترافي وقابل للتوسع — اللغة التي تدير ألعاب Unity.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-purple-500" />,
      title:
        language === "en" ? "Game Engine Fundamentals" : "أساسيات محرك الألعاب",
      description:
        language === "en"
          ? "Understand Unity’s engine architecture, components, and performance principles."
          : "فهم بنية محرك Unity ومكوناته ومبادئ الأداء.",
    },
    {
      icon: <Laptop className="h-10 w-10 text-indigo-500" />,
      title:
        language === "en" ? "Project-Based Learning" : "تعلم قائم على المشاريع",
      description:
        language === "en"
          ? "Build real-world games using industry workflows and version control tools like Git."
          : "قم ببناء ألعاب واقعية باستخدام سير عمل الصناعة وأدوات التحكم في الإصدارات مثل Git.",
    },
    {
      icon: <Server className="h-10 w-10 text-emerald-500" />,
      title: language === "en" ? "Multiplayer Systems" : "أنظمة اللعب الجماعي",
      description:
        language === "en"
          ? "Dive into Unity networking to create local and online multiplayer gameplay."
          : "استكشف الشبكات في Unity لإنشاء تجارب ألعاب محلية وعبر الإنترنت.",
    },
    {
      icon: <Zap className="h-10 w-10 text-cyan-500" />,
      title: language === "en" ? "Performance Tuning" : "تحسين الأداء",
      description:
        language === "en"
          ? "Profile and optimize games for smooth performance on various platforms."
          : "حلل وحسّن أداء الألعاب لتعمل بسلاسة على مختلف المنصات.",
    },
    {
      icon: <Shield className="h-10 w-10 text-purple-500" />,
      title: language === "en" ? "MTCIT Certification" : "شهادة من MTCIT",
      description:
        language === "en"
          ? "Earn a nationally endorsed certificate, recognized by industry employers in Oman and abroad."
          : "احصل على شهادة معتمدة وطنياً، معترف بها من قبل جهات التوظيف محليًا ودوليًا.",
    },
    {
      icon: <Globe className="h-10 w-10 text-indigo-500" />,
      title: language === "en" ? "International Standards" : "معايير دولية",
      description:
        language === "en"
          ? "Training aligned with global game development standards, best practices, and trends."
          : "تدريب يتماشى مع المعايير الدولية لتطوير الألعاب وأفضل الممارسات والاتجاهات الحديثة.",
    },
  ];

  return (
    <section id="features" className="py-20 relative bg-[#050505]">
      {/* Background elements */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0f1117] opacity-90"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div> */}

      {/* Floating tech elements */}
      <div className="absolute top-20 right-10 opacity-10 hidden lg:block">
        <Terminal className="h-24 w-24 text-purple-500" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 hidden lg:block">
        <Cpu className="h-24 w-24 text-cyan-500" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 hidden lg:block">
        <Layers className="h-96 w-96 text-indigo-500 opacity-80" />
      </div>
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
              className="p-6 rounded-lg border border-slate-800 hover:bg-emerald-500/5 transition-colors group relative overflow-hidden"
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
