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
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-[#111] border border-[#222] p-1 rounded-lg">
              <TabsTrigger
                value="module1"
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black"
              >
                {language === "en" ? "Module 1" : "الوحدة 1"}
              </TabsTrigger>
              <TabsTrigger
                value="module2"
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black"
              >
                {language === "en" ? "Module 2" : "الوحدة 2"}
              </TabsTrigger>
              <TabsTrigger
                value="module3"
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black"
              >
                {language === "en" ? "Module 3" : "الوحدة 3"}
              </TabsTrigger>
              <TabsTrigger
                value="module4"
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black"
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
                  <div
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
                      {language === "en"
                        ? "Unity Interface and Navigation"
                        : "واجهة Unity والتنقل"}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {language === "en"
                        ? "Learn the Unity Editor layout, windows, and navigation tools"
                        : "تعلم تخطيط محرر Unity والنوافذ وأدوات التنقل"}
                    </p>
                  </div>
                  <div
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
                      {language === "en"
                        ? "Game Objects and Components"
                        : "كائنات اللعبة والمكونات"}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {language === "en"
                        ? "Understanding the building blocks of Unity scenes"
                        : "فهم اللبنات الأساسية لمشاهد Unity"}
                    </p>
                  </div>
                  <div
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
                      {language === "en"
                        ? "Basic Scripting in C#"
                        : "البرمجة الأساسية في C#"}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {language === "en"
                        ? "Variables, functions, and object-oriented programming fundamentals"
                        : "المتغيرات والوظائف وأساسيات البرمجة الموجهة للكائنات"}
                    </p>
                  </div>
                  <div
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
                      {language === "en"
                        ? "2D and 3D Project Setup"
                        : "إعداد مشروع ثنائي وثلاثي الأبعاد"}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {language === "en"
                        ? "Creating and configuring new Unity projects for different game types"
                        : "إنشاء وتكوين مشاريع Unity جديدة لأنواع مختلفة من الألعاب"}
                    </p>
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
                </div>
              </TabsContent>

              <TabsContent value="module2" className="p-6 ">
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
                  <div
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
                      {language === "en"
                        ? "Rigidbody Physics"
                        : "فيزياء الجسم الصلب"}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {language === "en"
                        ? "Implementing realistic physics interactions in your games"
                        : "تنفيذ تفاعلات فيزيائية واقعية في ألعابك"}
                    </p>
                  </div>
                  <div
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
                      {language === "en"
                        ? "Collision Detection"
                        : "اكتشاف التصادم"}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {language === "en"
                        ? "Managing object interactions through colliders and triggers"
                        : "إدارة تفاعلات الكائنات من خلال المصادمات والمشغلات"}
                    </p>
                  </div>
                  <div
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
                      {language === "en"
                        ? "Character Controllers"
                        : "وحدات تحكم الشخصية"}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {language === "en"
                        ? "Building responsive player movement and control systems"
                        : "بناء أنظمة حركة وتحكم استجابية للاعب"}
                    </p>
                  </div>
                  <div
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
                      {language === "en" ? "Input Systems" : "أنظمة الإدخال"}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {language === "en"
                        ? "Implementing keyboard, mouse, touch, and controller input"
                        : "تنفيذ إدخال لوحة المفاتيح والماوس واللمس ووحدة التحكم"}
                    </p>
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
                </div>
              </TabsContent>

              <TabsContent value="module3" className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-6 w-6 text-emerald-500" />
                  <h3 className="text-xl font-bold">
                    {language === "en"
                      ? "Graphics and Animation"
                      : "الرسومات والرسوم المتحركة"}
                  </h3>
                </div>

                <div className="space-y-4 pl-9">
                  <div className="relative pl-6 border-l border-[#333]">
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-emerald-500"></div>
                    <p className="text-gray-300">
                      {language === "en"
                        ? "Materials and Shaders"
                        : "المواد والظلال"}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {language === "en"
                        ? "Creating and customizing visual appearance with shaders"
                        : "إنشاء وتخصيص المظهر المرئي باستخدام الظلال"}
                    </p>
                  </div>

                  <div className="relative pl-6 border-l border-[#333]">
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-emerald-500"></div>
                    <p className="text-gray-300">
                      {language === "en"
                        ? "Animation Systems"
                        : "أنظمة الرسوم المتحركة"}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {language === "en"
                        ? "Working with the Animator Controller and animation state machines"
                        : "العمل مع وحدة تحكم الرسوم المتحركة وآلات حالة الرسوم المتحركة"}
                    </p>
                  </div>

                  <div className="relative pl-6 border-l border-[#333]">
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-emerald-500"></div>
                    <p className="text-gray-300">
                      {language === "en"
                        ? "Particle Effects"
                        : "تأثيرات الجسيمات"}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {language === "en"
                        ? "Creating dynamic visual effects with the particle system"
                        : "إنشاء تأثيرات مرئية ديناميكية باستخدام نظام الجسيمات"}
                    </p>
                  </div>

                  <div className="relative pl-6 border-l border-[#333]">
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-emerald-500"></div>
                    <p className="text-gray-300">
                      {language === "en"
                        ? "Lighting Techniques"
                        : "تقنيات الإضاءة"}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {language === "en"
                        ? "Implementing dynamic lighting and post-processing effects"
                        : "تنفيذ الإضاءة الديناميكية وتأثيرات ما بعد المعالجة"}
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="module4" className="p-6 font-mono">
                <div className="flex items-center gap-3 mb-4">
                  <Gamepad2 className="h-6 w-6 text-emerald-500" />
                  <h3 className="text-xl font-bold">
                    {language === "en"
                      ? "Game Development Project"
                      : "مشروع تطوير الألعاب"}
                  </h3>
                </div>

                <div className="space-y-4 pl-9">
                  <div className="relative pl-6 border-l border-[#333]">
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-emerald-500"></div>
                    <p className="text-gray-300">
                      {language === "en"
                        ? "Project Planning and Design"
                        : "تخطيط وتصميم المشروع"}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {language === "en"
                        ? "Creating game design documents and planning development cycles"
                        : "إنشاء مستندات تصميم اللعبة وتخطيط دورات التطوير"}
                    </p>
                  </div>

                  <div className="relative pl-6 border-l border-[#333]">
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-emerald-500"></div>
                    <p className="text-gray-300">
                      {language === "en"
                        ? "Implementation and Testing"
                        : "التنفيذ والاختبار"}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {language === "en"
                        ? "Building a complete game with industry-standard development practices"
                        : "بناء لعبة كاملة باستخدام ممارسات التطوير القياسية في الصناعة"}
                    </p>
                  </div>

                  <div className="relative pl-6 border-l border-[#333]">
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-emerald-500"></div>
                    <p className="text-gray-300">
                      {language === "en"
                        ? "Optimization Techniques"
                        : "تقنيات التحسين"}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {language === "en"
                        ? "Profiling and optimizing game performance for target platforms"
                        : "تحليل وتحسين أداء اللعبة للمنصات المستهدفة"}
                    </p>
                  </div>

                  <div className="relative pl-6 border-l border-[#333]">
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-emerald-500"></div>
                    <p className="text-gray-300">
                      {language === "en"
                        ? "Publishing and Distribution"
                        : "النشر والتوزيع"}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {language === "en"
                        ? "Preparing games for release and understanding distribution platforms"
                        : "إعداد الألعاب للإصدار وفهم منصات التوزيع"}
                    </p>
                  </div>
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
                  ? "Ready to start your game development journey?"
                  : "هل أنت مستعد لبدء رحلة تطوير الألعاب الخاصة بك؟"}
              </p>
              <p className="text-gray-500 text-sm">
                {language === "en"
                  ? "Apply now and join our next cohort of Unity developers."
                  : "قدم الآن وانضم إلى مجموعتنا التالية من مطوري Unity."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
