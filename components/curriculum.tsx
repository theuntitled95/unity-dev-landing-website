import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Braces, Code, FileCode, Gamepad2, Layers, Terminal} from "lucide-react";

interface CurriculumProps {
  language: "en" | "ar";
}

export function Curriculum({language}: CurriculumProps) {
  return (
    <section id="curriculum" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#333] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#333] to-transparent"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex gap-2 px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400">
            <FileCode className="h-5 w-5" />
            <span className="uppercase text-sm font-semibold tracking-wider">
              {language === "en" ? "Training Curriculum" : "منهج التدريب"}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {language === "en"
              ? "Comprehensive Learning Path"
              : "مسار تعليمي شامل"}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-[#00cc7d] mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="module1" className="w-full">
            <TabsList
              className={`flex w-full bg-[#111] border border-[#222] p-1 rounded-lg ${
                language === "ar" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <TabsTrigger
                value="module1"
                className="flex-1 text-center data-[state=active]:bg-emerald-500 data-[state=active]:text-black"
              >
                {language === "en" ? "Module 1" : "الوحدة 1"}
              </TabsTrigger>
              <TabsTrigger
                value="module2"
                className="flex-1 text-center data-[state=active]:bg-emerald-500 data-[state=active]:text-black"
              >
                {language === "en" ? "Module 2" : "الوحدة 2"}
              </TabsTrigger>
              <TabsTrigger
                value="module3"
                className="flex-1 text-center data-[state=active]:bg-emerald-500 data-[state=active]:text-black"
              >
                {language === "en" ? "Module 3" : "الوحدة 3"}
              </TabsTrigger>
              <TabsTrigger
                value="module4"
                className="flex-1 text-center data-[state=active]:bg-emerald-500 data-[state=active]:text-black"
              >
                {language === "en" ? "Module 4" : "الوحدة 4"}
              </TabsTrigger>
            </TabsList>

            <div className="mt-6 border border-[#222] rounded-lg overflow-hidden bg-[#0a0a0a]">
              {/* <div className="border-b border-[#222] bg-[#111] px-4 py-2 flex items-center gap-2">
                <Terminal className="h-4 w-4 text-emerald-500" />
                <span className="text-sm font-mono text-gray-400">
                  unity-curriculum.cs
                </span>
              </div> */}

              <TabsContent value="module1" className="p-6">
                <div
                  className={`flex items-center gap-3 mb-4 ${
                    language === "ar" ? "flex-row-reverse" : ""
                  }`}
                >
                  <Braces className="h-6 w-6 text-emerald-500" />
                  <h3 className="text-xl font-bold">
                    {language === "en"
                      ? "Introduction to Unity"
                      : "مقدمة في Unity"}
                  </h3>
                </div>

                <div
                  className={`space-y-4 ${language === "ar" ? "pr-6" : "pl-6"}`}
                >
                  {[
                    {
                      en: [
                        "Unity Interface and Navigation",
                        "Learn the Unity Editor layout, windows, and navigation tools",
                      ],
                      ar: [
                        "واجهة Unity والتنقل",
                        "تعلم تخطيط محرر Unity والنوافذ وأدوات التنقل",
                      ],
                    },
                    {
                      en: [
                        "Game Objects and Components",
                        "Understanding the building blocks of Unity scenes",
                      ],
                      ar: [
                        "كائنات اللعبة والمكونات",
                        "فهم اللبنات الأساسية لمشاهد Unity",
                      ],
                    },
                    {
                      en: [
                        "Basic Scripting in C#",
                        "Variables, functions, and object-oriented programming fundamentals",
                      ],
                      ar: [
                        "البرمجة الأساسية في C#",
                        "المتغيرات والوظائف وأساسيات البرمجة الموجهة للكائنات",
                      ],
                    },
                    {
                      en: [
                        "2D and 3D Project Setup",
                        "Creating and configuring new Unity projects for different game types",
                      ],
                      ar: [
                        "إعداد مشروع ثنائي وثلاثي الأبعاد",
                        "إنشاء وتكوين مشاريع Unity جديدة لأنواع مختلفة من الألعاب",
                      ],
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`relative ${
                        language === "ar" ? "pr-9" : "pl-9"
                      } border-[#333]`}
                    >
                      <div
                        className={`absolute top-0 mr-2 mt-1 size-5 rounded-full bg-emerald-500/20 flex items-center justify-center ${
                          language === "ar" ? "right-0" : "left-0"
                        }`}
                      >
                        <div className="size-2 rounded-full bg-emerald-500"></div>
                      </div>
                      <p className="text-gray-300">
                        {language === "en" ? item.en[0] : item.ar[0]}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {language === "en" ? item.en[1] : item.ar[1]}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="!mt-8 p-4 relative rounded bg-emerald-100/5 border border-[#333] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-[#111] border-b border-[#222] flex items-center px-4 gap-2">
                    <div className="flex gap-1.5 mr-3">
                      <div className="size-3 rounded-full bg-red-500"></div>
                      <div className="size-3 rounded-full bg-yellow-500"></div>
                      <div className="size-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-slate-400">C# Example</div>
                  </div>
                  <pre className="mt-8 text-xs text-emerald-300 font-mono overflow-x-auto !text-left">
                    <code>{`using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public float speed = 5.0f;
    
    void Update()
    {
        float horizontal = Input.GetAxis("Horizontal");
        float vertical = Input.GetAxis("Vertical");
        
        Vector3 movement = new Vector3(horizontal, 0, vertical);
        transform.Translate(movement * speed * Time.deltaTime);
    }
}`}</code>
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="module2" className="p-6">
                <div
                  className={`flex items-center gap-3 mb-4 ${
                    language === "ar" ? "flex-row-reverse" : ""
                  }`}
                >
                  <Layers className="h-6 w-6 text-emerald-500" />
                  <h3 className="text-xl font-bold">
                    {language === "en"
                      ? "Game Physics and Mechanics"
                      : "فيزياء وميكانيكا الألعاب"}
                  </h3>
                </div>

                <div
                  className={`space-y-4 ${language === "ar" ? "pr-6" : "pl-6"}`}
                >
                  {[
                    {
                      en: [
                        "Rigidbody Physics",
                        "Implementing realistic physics interactions in your games",
                      ],
                      ar: [
                        "فيزياء الجسم الصلب",
                        "تنفيذ تفاعلات فيزيائية واقعية في ألعابك",
                      ],
                    },
                    {
                      en: [
                        "Collision Detection",
                        "Managing object interactions through colliders and triggers",
                      ],
                      ar: [
                        "اكتشاف التصادم",
                        "إدارة تفاعلات الكائنات من خلال المصادمات والمشغلات",
                      ],
                    },
                    {
                      en: [
                        "Character Controllers",
                        "Building responsive player movement and control systems",
                      ],
                      ar: [
                        "وحدات تحكم الشخصية",
                        "بناء أنظمة حركة وتحكم استجابية للاعب",
                      ],
                    },
                    {
                      en: [
                        "Input Systems",
                        "Implementing keyboard, mouse, touch, and controller input",
                      ],
                      ar: [
                        "أنظمة الإدخال",
                        "تنفيذ إدخال لوحة المفاتيح والماوس واللمس ووحدة التحكم",
                      ],
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`relative ${
                        language === "ar" ? "pr-9" : "pl-9"
                      } border-[#333]`}
                    >
                      <div
                        className={`absolute top-0 mr-2 mt-1 size-5 rounded-full bg-emerald-500/20 flex items-center justify-center ${
                          language === "ar" ? "right-0" : "left-0"
                        }`}
                      >
                        <div className="size-2 rounded-full bg-emerald-500"></div>
                      </div>
                      <p className="text-gray-300">
                        {language === "en" ? item.en[0] : item.ar[0]}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {language === "en" ? item.en[1] : item.ar[1]}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="!mt-8 p-4 relative rounded bg-emerald-100/5 border border-[#333] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-[#111] border-b border-[#222] flex items-center px-4 gap-2">
                    <div className="flex gap-1.5 mr-3">
                      <div className="size-3 rounded-full bg-red-500"></div>
                      <div className="size-3 rounded-full bg-yellow-500"></div>
                      <div className="size-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-slate-400">C# Example</div>
                  </div>
                  <pre className="mt-8 text-xs text-emerald-300 font-mono overflow-x-auto !text-left">
                    <code>{`using UnityEngine;

public class PhysicsController : MonoBehaviour
{
    public float jumpForce = 10f;
    private Rigidbody rb;
    private bool isGrounded;
    
    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }
    
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space) && isGrounded)
        {
            rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
            isGrounded = false;
        }
    }
    
    void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Ground"))
        {
            isGrounded = true;
        }
    }
}`}</code>
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="module3" className="p-6">
                <div
                  className={`flex items-center gap-3 mb-4 ${
                    language === "ar" ? "flex-row-reverse" : ""
                  }`}
                >
                  <Code className="h-6 w-6 text-emerald-500" />
                  <h3 className="text-xl font-bold">
                    {language === "en"
                      ? "Graphics and Animation"
                      : "الرسومات والرسوم المتحركة"}
                  </h3>
                </div>

                <div
                  className={`space-y-4 ${language === "ar" ? "pr-6" : "pl-6"}`}
                >
                  {[
                    {
                      en: [
                        "Materials and Shaders",
                        "Creating and customizing visual appearance with shaders",
                      ],
                      ar: [
                        "المواد والظلال",
                        "إنشاء وتخصيص المظهر المرئي باستخدام الظلال",
                      ],
                    },
                    {
                      en: [
                        "Animation Systems",
                        "Working with the Animator Controller and animation state machines",
                      ],
                      ar: [
                        "أنظمة الرسوم المتحركة",
                        "العمل مع وحدة تحكم الرسوم المتحركة وآلات حالة الرسوم المتحركة",
                      ],
                    },
                    {
                      en: [
                        "Particle Effects",
                        "Creating dynamic visual effects with the particle system",
                      ],
                      ar: [
                        "تأثيرات الجسيمات",
                        "إنشاء تأثيرات مرئية ديناميكية باستخدام نظام الجسيمات",
                      ],
                    },
                    {
                      en: [
                        "Lighting Techniques",
                        "Implementing dynamic lighting and post-processing effects",
                      ],
                      ar: [
                        "تقنيات الإضاءة",
                        "تنفيذ الإضاءة الديناميكية وتأثيرات ما بعد المعالجة",
                      ],
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`relative ${
                        language === "ar" ? "pr-9" : "pl-9"
                      } border-[#333]`}
                    >
                      <div
                        className={`absolute top-0 mr-2 mt-1 size-5 rounded-full bg-emerald-500/20 flex items-center justify-center ${
                          language === "ar" ? "right-0" : "left-0"
                        }`}
                      >
                        <div className="size-2 rounded-full bg-emerald-500"></div>
                      </div>
                      <p className="text-gray-300">
                        {language === "en" ? item.en[0] : item.ar[0]}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {language === "en" ? item.en[1] : item.ar[1]}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="!mt-8 p-4 relative rounded bg-emerald-100/5 border border-[#333] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-[#111] border-b border-[#222] flex items-center px-4 gap-2">
                    <div className="flex gap-1.5 mr-3">
                      <div className="size-3 rounded-full bg-red-500"></div>
                      <div className="size-3 rounded-full bg-yellow-500"></div>
                      <div className="size-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-slate-400">Shader Example</div>
                  </div>
                  <pre className="mt-8 text-xs text-emerald-300 font-mono overflow-x-auto !text-left">
                    <code>{`Shader "Custom/HolographicEffect"
{
    Properties
    {
        _MainTex ("Texture", 2D) = "white" {}
        _Color ("Color", Color) = (0,1,0.5,1)
        _RimPower ("Rim Power", Range(0.5, 8.0)) = 3.0
    }
    SubShader
    {
        Tags { "RenderType"="Transparent" "Queue"="Transparent" }
        LOD 100
        
        Pass
        {
            ZWrite Off
            Blend SrcAlpha OneMinusSrcAlpha
            
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            
            // Implementation continues...
            ENDCG
        }
    }
}`}</code>
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="module4" className="p-6">
                <div
                  className={`flex items-center gap-3 mb-4 ${
                    language === "ar" ? "flex-row-reverse" : ""
                  }`}
                >
                  <Gamepad2 className="h-6 w-6 text-emerald-500" />
                  <h3 className="text-xl font-bold">
                    {language === "en"
                      ? "Game Development Project"
                      : "مشروع تطوير الألعاب"}
                  </h3>
                </div>

                <div
                  className={`space-y-4 ${language === "ar" ? "pr-6" : "pl-6"}`}
                >
                  {[
                    {
                      en: [
                        "Project Planning and Design",
                        "Creating game design documents and planning development cycles",
                      ],
                      ar: [
                        "تخطيط وتصميم المشروع",
                        "إنشاء مستندات تصميم اللعبة وتخطيط دورات التطوير",
                      ],
                    },
                    {
                      en: [
                        "Implementation and Testing",
                        "Building a complete game with industry-standard development practices",
                      ],
                      ar: [
                        "التنفيذ والاختبار",
                        "بناء لعبة كاملة باستخدام ممارسات التطوير القياسية في الصناعة",
                      ],
                    },
                    {
                      en: [
                        "Optimization Techniques",
                        "Profiling and optimizing game performance for target platforms",
                      ],
                      ar: [
                        "تقنيات التحسين",
                        "تحليل وتحسين أداء اللعبة للمنصات المستهدفة",
                      ],
                    },
                    {
                      en: [
                        "Publishing and Distribution",
                        "Preparing games for release and understanding distribution platforms",
                      ],
                      ar: [
                        "النشر والتوزيع",
                        "إعداد الألعاب للإصدار وفهم منصات التوزيع",
                      ],
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`relative ${
                        language === "ar" ? "pr-9" : "pl-9"
                      } border-[#333]`}
                    >
                      <div
                        className={`absolute top-0 mr-2 mt-1 size-5 rounded-full bg-emerald-500/20 flex items-center justify-center ${
                          language === "ar" ? "right-0" : "left-0"
                        }`}
                      >
                        <div className="size-2 rounded-full bg-emerald-500"></div>
                      </div>
                      <p className="text-gray-300">
                        {language === "en" ? item.en[0] : item.ar[0]}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {language === "en" ? item.en[1] : item.ar[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>

          <div className="mt-8 p-4 border border-[#333] rounded-lg bg-[#111] flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Terminal className="h-6 w-6 text-emerald-500" />
            </div>
            <div>
              <p className="text-gray-300 font-medium">
                {language === "en"
                  ? "Start building your future with Unity today."
                  : "ابدأ في بناء مستقبلك باستخدام Unity اليوم."}
              </p>
              <p className="text-gray-500 text-sm">
                {language === "en"
                  ? "Apply to the official Unity Bootcamp by London Academy, sponsored by MTCIT."
                  : "سجل في معسكر Unity الرسمي من تنفيذ أكاديمية لندن وبرعاية وزارة النقل."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
