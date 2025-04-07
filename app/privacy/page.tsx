"use client";

import {Button} from "@/components/ui/button";
import {ChevronLeft, ChevronRight, Globe} from "lucide-react";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function PrivacyPage() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage === "ar" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language);
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }
  }, [language, mounted]);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
  };

  if (!mounted) {
    return <div className="min-h-screen bg-[#0a0a0a]"></div>;
  }

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className={`min-h-screen bg-[#0a0a0a] text-white ${
        language === "ar" ? "font-arabic" : ""
      }`}
    >
      <div className="container py-12 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-emerald-500 hover:underline"
          >
            {language === "en" ? (
              <ChevronLeft className="h-4 w-4 mr-1" />
            ) : (
              <ChevronRight className="h-4 w-4 ml-1" />
            )}
            {language === "en" ? "Back to Home" : "العودة إلى الصفحة الرئيسية"}
          </Link>

          <Button
            variant="outline"
            size="icon"
            onClick={toggleLanguage}
            title={language === "en" ? "Switch to Arabic" : "Switch to English"}
            className="border-[#4d4d4d] bg-black/20 backdrop-blur-sm hover:bg-[#333] hover:text-emerald-500 transition-all"
            aria-label={
              language === "en" ? "Switch to Arabic" : "Switch to English"
            }
          >
            <Globe className="h-4 w-4" />
            <span className="sr-only">
              {language === "en" ? "Switch to Arabic" : "Switch to English"}
            </span>
          </Button>
        </div>

        <h1 className="text-3xl font-bold mb-8">
          {language === "en" ? "Privacy Policy" : "سياسة الخصوصية"}
        </h1>

        <div className="prose prose-invert max-w-none">
          {language === "en" ? (
            <>
              <h2>1. Introduction</h2>
              <p>
                The Unity Game Development Training Program website is owned and
                operated by London Academy in collaboration with the Ministry of
                Transport, Communications and Information Technology. We are
                fully committed to safeguarding your personal data and
                respecting your privacy.
              </p>

              <h2>2. Information We Collect</h2>
              <p>
                When you apply to the program or interact with our website, we
                may collect the following information:
              </p>
              <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Education level</li>
                <li>Programming experience</li>
                <li>Personal motivation statement</li>
              </ul>

              <h2>3. Purpose of Collection</h2>
              <p>
                Your information is collected strictly for the purpose of
                reviewing your application, communicating important updates, and
                improving the services related to the Unity Game Development
                Training Program.
              </p>
              <ul>
                <li>Evaluating candidate eligibility and motivation</li>
                <li>Contacting applicants with updates or clarifications</li>
                <li>Enhancing website usability and experience</li>
                <li>Fulfilling legal and institutional obligations</li>
              </ul>

              <h2>4. Data Sharing</h2>
              <p>
                Your information may be shared with the Ministry of Transport,
                Communications and Information Technology for review and
                coordination purposes. It will not be sold or disclosed to third
                parties for commercial use.
              </p>

              <h2>5. Security Measures</h2>
              <p>
                We implement strict technical and organizational measures to
                protect your data from unauthorized access, misuse, or
                alteration. While no system is entirely immune to risks, we
                strive to maintain the highest standards of protection.
              </p>

              <h2>6. Data Retention</h2>
              <p>
                Personal data is retained only for the duration necessary to
                manage the training program and fulfill any legal or compliance
                requirements.
              </p>

              <h2>7. Your Rights</h2>
              <p>
                You may request access to your data, corrections to inaccurate
                information, or the deletion of your personal data at any time.
                Please email us at unity-training@mtcit.gov.om for such
                requests.
              </p>

              <h2>8. Updates to This Policy</h2>
              <p>
                We reserve the right to update this Privacy Policy as necessary.
                Any updates will be posted on this page with the revised date.
              </p>

              <h2>9. Contact</h2>
              <p>
                For privacy-related inquiries, reach out to our team at
                unity-training@mtcit.gov.om.
              </p>
            </>
          ) : (
            <>
              <h2>1. المقدمة</h2>
              <p>
                موقع برنامج تدريب تطوير ألعاب Unity مملوك وتديره London Academy
                بالتعاون مع وزارة النقل والاتصالات وتكنولوجيا المعلومات. نحن
                ملتزمون تمامًا بحماية بياناتك الشخصية واحترام خصوصيتك.
              </p>

              <h2>2. المعلومات التي نجمعها</h2>
              <p>
                عند التقديم للبرنامج أو التفاعل مع موقعنا، قد نقوم بجمع
                المعلومات التالية:
              </p>
              <ul>
                <li>الاسم الكامل</li>
                <li>عنوان البريد الإلكتروني</li>
                <li>رقم الهاتف</li>
                <li>المستوى التعليمي</li>
                <li>خبرة البرمجة</li>
                <li>بيان الدافع الشخصي</li>
              </ul>

              <h2>3. غرض جمع البيانات</h2>
              <p>
                يتم جمع معلوماتك فقط لأغراض مراجعة الطلبات، والتواصل معك، وتحسين
                الخدمات المتعلقة ببرنامج التدريب.
              </p>
              <ul>
                <li>تقييم الأهلية والدافع</li>
                <li>التواصل مع المتقدمين بشأن التحديثات أو التوضيحات</li>
                <li>تحسين تجربة الموقع وسهولة استخدامه</li>
                <li>الوفاء بالمتطلبات القانونية والمؤسسية</li>
              </ul>

              <h2>4. مشاركة البيانات</h2>
              <p>
                قد تتم مشاركة معلوماتك مع وزارة النقل والاتصالات وتكنولوجيا
                المعلومات لأغراض المراجعة والتنسيق. لن يتم بيع بياناتك أو الكشف
                عنها لأي طرف ثالث لأغراض تجارية.
              </p>

              <h2>5. تدابير الأمان</h2>
              <p>
                نقوم بتنفيذ تدابير تقنية وتنظيمية صارمة لحماية بياناتك من الوصول
                غير المصرح به أو سوء الاستخدام أو التغيير. وبينما لا توجد وسيلة
                آمنة تمامًا، فإننا نسعى جاهدين للحفاظ على أعلى معايير الحماية.
              </p>

              <h2>6. الاحتفاظ بالبيانات</h2>
              <p>
                يتم الاحتفاظ بالبيانات الشخصية فقط للفترة اللازمة لإدارة
                البرنامج والامتثال لأي متطلبات قانونية أو تنظيمية.
              </p>

              <h2>7. حقوقك</h2>
              <p>
                يمكنك طلب الوصول إلى بياناتك أو تصحيح المعلومات غير الدقيقة أو
                حذف بياناتك الشخصية في أي وقت. يرجى التواصل معنا عبر البريد
                الإلكتروني unity-training@mtcit.gov.om.
              </p>

              <h2>8. تحديثات على هذه السياسة</h2>
              <p>
                نحتفظ بالحق في تحديث سياسة الخصوصية هذه حسب الحاجة. سيتم نشر أي
                تحديثات على هذه الصفحة مع تاريخ التعديل.
              </p>

              <h2>9. التواصل معنا</h2>
              <p>
                للاستفسارات المتعلقة بالخصوصية، يرجى التواصل معنا عبر البريد
                الإلكتروني unity-training@mtcit.gov.om.
              </p>
            </>
          )}

          <p className="text-sm text-gray-500 mt-8">
            {language === "en"
              ? "Last updated: April 2025"
              : "آخر تحديث: أبريل 2025"}
          </p>
        </div>
      </div>
    </div>
  );
}
