"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {ChevronDown, HelpCircle, Terminal} from "lucide-react";

interface FAQProps {
  language: "en" | "ar";
}

export function FAQ({language}: FAQProps) {
  const faqs = [
    {
      question:
        language === "en"
          ? "Do I need any experience to join the bootcamp?"
          : "هل أحتاج إلى خبرة سابقة للانضمام إلى المعسكر التدريبي؟",
      answer:
        language === "en"
          ? "While prior programming experience is helpful, it’s not required. The bootcamp starts from foundational concepts and builds to advanced topics. A background in tech, math, or design is a bonus. You’ll need a laptop that meets Unity's system requirements."
          : "على الرغم من أن وجود خبرة سابقة في البرمجة يعد ميزة، إلا أنه غير مطلوب. يبدأ المعسكر بأساسيات البرمجة ويتدرج نحو مواضيع متقدمة. الخلفية في التقنية أو الرياضيات أو التصميم تعتبر إضافة جيدة. ستحتاج إلى جهاز كمبيوتر يلبي متطلبات Unity.",
    },
    {
      question:
        language === "en"
          ? "How long is the bootcamp?"
          : "ما هي مدة المعسكر التدريبي؟",
      answer:
        language === "en"
          ? "The program runs for 6 months full-time. Classes are held 5 days a week, with approximately 30 hours of instruction per week. This includes lectures, hands-on workshops, project work, and mentoring sessions."
          : "يستمر البرنامج لمدة 6 أشهر بدوام كامل. تُعقد الفصول 5 أيام في الأسبوع، بمتوسط 30 ساعة من التعليم أسبوعيًا، بما في ذلك المحاضرات وورش العمل والمشاريع وجلسات التوجيه.",
    },
    {
      question:
        language === "en"
          ? "Will I receive a certificate upon completion?"
          : "هل سأحصل على شهادة عند الانتهاء؟",
      answer:
        language === "en"
          ? "Yes, graduates receive an official certificate issued by the Ministry of Transport, Communications and Information Technology (MTCIT) in collaboration with London Academy."
          : "نعم، يحصل الخريجون على شهادة رسمية صادرة عن وزارة النقل والاتصالات وتقنية المعلومات بالتعاون مع أكاديمية لندن.",
    },
    {
      question:
        language === "en"
          ? "What programming languages will I learn?"
          : "ما هي لغات البرمجة التي سأتعلمها؟",
      answer:
        language === "en"
          ? "You'll master C#, Unity’s primary scripting language, with a strong foundation in object-oriented programming. We also introduce Unity’s Visual Scripting system for those who prefer a more visual logic workflow."
          : "ستتقن لغة C#، وهي لغة البرمجة الأساسية في Unity، مع أساس قوي في البرمجة الكائنية. كما نُقدم نظام البرمجة المرئية في Unity لأولئك الذين يفضلون العمل بشكل بصري.",
    },
    {
      question:
        language === "en"
          ? "Do I need to bring my own computer?"
          : "هل أحتاج إلى إحضار جهاز الكمبيوتر الخاص بي؟",
      answer:
        language === "en"
          ? "Yes, participants are required to bring their own laptops that meet Unity's system requirements. A minimum of 8GB RAM, a dedicated graphics card, and enough storage space are recommended. Both Windows and Mac devices are supported."
          : "نعم، يُطلب من المشاركين إحضار أجهزة الكمبيوتر المحمولة الخاصة بهم والتي تلبي متطلبات Unity. يُوصى بوجود 8 جيجابايت من الذاكرة العشوائية، وبطاقة رسومات مخصصة، ومساحة تخزين كافية. يتم دعم أنظمة Windows وMac.",
    },
    {
      question:
        language === "en"
          ? "Will I develop a complete game during the program?"
          : "هل سأطور لعبة كاملة خلال البرنامج؟",
      answer:
        language === "en"
          ? "Absolutely. The bootcamp concludes with a capstone project where you'll develop a complete game from concept to publishing. You’ll work individually or in small teams to build a polished project worthy of your portfolio."
          : "بالتأكيد. يُختتم المعسكر بمشروع ختامي تقوم فيه بتطوير لعبة كاملة من الفكرة إلى النشر. ستعمل بمفردك أو ضمن فرق صغيرة لإنشاء مشروع متكامل يمكن إضافته إلى محفظتك.",
    },
    {
      question:
        language === "en"
          ? "Are there job placement opportunities after graduation?"
          : "هل توجد فرص توظيف بعد التخرج؟",
      answer:
        language === "en"
          ? "While job placement isn’t guaranteed, we provide strong career support, including resume reviews, portfolio development, and networking with industry partners. Many local studios actively recruit from our graduate pool."
          : "على الرغم من أننا لا نضمن التوظيف، إلا أننا نوفر دعماً مهنياً قوياً يشمل مراجعة السيرة الذاتية، وتطوير المحفظة، والتواصل مع شركاء الصناعة. العديد من الاستوديوهات المحلية توظف من بين خريجينا.",
    },
    {
      question:
        language === "en"
          ? "What types of games will I learn to develop?"
          : "ما هي أنواع الألعاب التي سأتعلم تطويرها؟",
      answer:
        language === "en"
          ? "You’ll build 2D and 3D games across genres — including platformers, puzzle games, mobile experiences, first-person gameplay, and multiplayer projects. The curriculum emphasizes adaptability so you can explore your areas of interest."
          : "ستقوم ببناء ألعاب ثنائية وثلاثية الأبعاد في عدة أنواع — منها ألعاب المنصات، الألغاز، الألعاب المحمولة، وألعاب المنظور الأول، والمشاريع متعددة اللاعبين. يركز المنهج على التكيف لتتمكن من استكشاف مجالات اهتمامك.",
    },
    {
      question:
        language === "en"
          ? "Is the bootcamp suitable for complete beginners?"
          : "هل المعسكر مناسب للمبتدئين تمامًا؟",
      answer:
        language === "en"
          ? "Yes, it's beginner-friendly. We start with the fundamentals and provide extra support and learning resources to help everyone succeed — even those with no prior experience."
          : "نعم، المعسكر مناسب للمبتدئين. نبدأ بالأساسيات ونوفر دعمًا إضافيًا وموارد تعليمية لمساعدة الجميع على النجاح — حتى من ليس لديهم أي خبرة سابقة.",
    },
    {
      question:
        language === "en"
          ? "What is the application process like?"
          : "كيف تتم عملية التقديم؟",
      answer:
        language === "en"
          ? "Submit an online form, complete a basic aptitude task, and attend a short interview. We select candidates based on motivation, learning potential, and problem-solving ability. Applications are reviewed on a rolling basis."
          : "املأ نموذج التقديم عبر الإنترنت، ثم أتمم اختبارًا بسيطًا للقدرات، وتقدم لمقابلة قصيرة. نختار المرشحين بناءً على دوافعهم، وقدرتهم على التعلم، ومهاراتهم في حل المشكلات. يتم مراجعة الطلبات بشكل مستمر.",
    },
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#333] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#333] to-transparent"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex gap-2 px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400">
            <HelpCircle className="h-5 w-5" />
            <span className="uppercase text-sm font-semibold tracking-wider">
              {language === "en" ? "FAQ" : "الأسئلة الشائعة"}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {language === "en"
              ? "Got Questions? We've Got Answers."
              : "هل لديك أسئلة؟ نحن هنا للإجابة."}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-[#00cc7d] mx-auto mt-6"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-[#00cc7d]/20 rounded-lg blur-lg"></div>
            <div className="relative bg-[#0a0a0a] border border-[#222] rounded-lg overflow-hidden">
              <div className="bg-[#111] border-b border-[#222] p-3 flex items-center gap-2">
                <Terminal className="h-5 w-5 text-emerald-500" />
                <h3 className="font-bold text-lg">
                  {language === "en" ? "program-faq.md" : "الأسئلة-الشائعة.md"}
                </h3>
              </div>

              <div className="p-6">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-[#222] rounded-lg overflow-hidden bg-[#0f0f0f]"
                    >
                      <AccordionTrigger className="px-4 py-3 hover:bg-[#161616] hover:no-underline data-[state=open]:bg-[#161616] group">
                        <div className="flex items-start gap-3 text-left">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center mt-0.5">
                            <span className="text-xs font-mono text-emerald-500">
                              {`${index + 1}`.padStart(2, "0")}
                            </span>
                          </div>
                          <span className="font-medium text-white group-hover:text-emerald-500 transition-colors">
                            {faq.question}
                          </span>
                        </div>
                        {/* <ChevronDown className="h-4 w-4 shrink-0 text-emerald-500 transition-transform duration-200" /> */}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-3 pt-0 text-gray-400">
                        <div className="text-sm mt-2">{faq.answer}</div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="bg-[#111] border-t border-[#222] p-3 flex items-center justify-between">
                <div className="text-xs text-gray-500 font-mono">
                  {language === "en"
                    ? "Last updated: April 2025"
                    : "آخر تحديث: أبريل 2025"}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>{language === "en" ? "10 questions" : "10 أسئلة"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
