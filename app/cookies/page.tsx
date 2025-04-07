"use client";

import {Button} from "@/components/ui/button";
import {ChevronLeft, ChevronRight, Globe} from "lucide-react";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function CookiePolicyPage() {
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
          {language === "en" ? "Cookie Policy" : "سياسة ملفات تعريف الارتباط"}
        </h1>

        <div className="prose prose-invert max-w-none">
          {language === "en" ? (
            <>
              <p>
                This Cookie Policy outlines how cookies are used on the Unity
                Game Development Training Program website, which is operated by
                London Academy in collaboration with the Ministry of Transport,
                Communications and Information Technology (MTCIT).
              </p>

              <h2>What Are Cookies</h2>
              <p>
                Cookies are small text files stored on your device when you
                visit a website. They help us provide a better user experience
                by enabling website functionality, personalization, and
                analytics.
              </p>

              <h2>How We Use Cookies</h2>
              <ul>
                <li>
                  <strong>Essential cookies:</strong> Necessary for site
                  operation and user session handling.
                </li>
                <li>
                  <strong>Preference cookies:</strong> Store user preferences,
                  such as selected language.
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Provide anonymized visitor
                  tracking to help us improve the website.
                </li>
              </ul>

              <h2>Cookies in Use</h2>
              <table className="border-collapse border border-[#333] w-full">
                <thead>
                  <tr className="bg-[#111]">
                    <th className="border border-[#333] p-2 text-left">
                      Cookie Name
                    </th>
                    <th className="border border-[#333] p-2 text-left">
                      Purpose
                    </th>
                    <th className="border border-[#333] p-2 text-left">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#333] p-2">language</td>
                    <td className="border border-[#333] p-2">
                      Stores your selected language
                    </td>
                    <td className="border border-[#333] p-2">1 year</td>
                  </tr>
                  <tr>
                    <td className="border border-[#333] p-2">_ga</td>
                    <td className="border border-[#333] p-2">
                      Used by Google Analytics
                    </td>
                    <td className="border border-[#333] p-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-[#333] p-2">_gid</td>
                    <td className="border border-[#333] p-2">
                      Used by Google Analytics
                    </td>
                    <td className="border border-[#333] p-2">24 hours</td>
                  </tr>
                </tbody>
              </table>

              <h2>Managing Your Preferences</h2>
              <p>
                You can control or disable cookies using your browser settings.
                Doing so may impact certain website functions.
              </p>

              <h2>Policy Updates</h2>
              <p>
                This Cookie Policy may be revised from time to time. Updates
                will be posted on this page with a revised date.
              </p>

              <h2>Contact</h2>
              <p>
                For any inquiries about our cookie usage, please contact us at
                unity-training@mtcit.gov.om.
              </p>
            </>
          ) : (
            <>
              <p>
                توضح سياسة ملفات تعريف الارتباط هذه كيفية استخدام الموقع
                الإلكتروني الخاص ببرنامج تدريب تطوير ألعاب Unity للكوكيز. يتم
                تشغيل الموقع من قبل London Academy بالتعاون مع وزارة النقل
                والاتصالات وتقنية المعلومات.
              </p>

              <h2>ما هي ملفات تعريف الارتباط</h2>
              <p>
                ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهازك
                عند زيارة موقع إلكتروني. تساعدنا هذه الملفات في تقديم تجربة
                مستخدم أفضل من خلال تمكين وظائف الموقع وتخصيصه وتحليله.
              </p>

              <h2>كيفية استخدامنا لملفات تعريف الارتباط</h2>
              <ul>
                <li>
                  <strong>الكوكيز الضرورية:</strong> ضرورية لتشغيل الموقع وإدارة
                  الجلسات.
                </li>
                <li>
                  <strong>كوكيز التفضيلات:</strong> تخزن تفضيلات المستخدم مثل
                  اللغة المختارة.
                </li>
                <li>
                  <strong>كوكيز التحليلات:</strong> تساعدنا في تتبع تفاعل الزوار
                  مع الموقع بشكل مجهول لتحسينه.
                </li>
              </ul>

              <h2>ملفات تعريف الارتباط المستخدمة</h2>
              <table className="border-collapse border border-[#333] w-full">
                <thead>
                  <tr className="bg-[#111]">
                    <th className="border border-[#333] p-2 text-right">
                      اسم الكوكي
                    </th>
                    <th className="border border-[#333] p-2 text-right">
                      الغرض
                    </th>
                    <th className="border border-[#333] p-2 text-right">
                      المدة
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#333] p-2">language</td>
                    <td className="border border-[#333] p-2">
                      يخزن تفضيل اللغة الخاص بك
                    </td>
                    <td className="border border-[#333] p-2">سنة واحدة</td>
                  </tr>
                  <tr>
                    <td className="border border-[#333] p-2">_ga</td>
                    <td className="border border-[#333] p-2">
                      يُستخدم من قِبل Google Analytics
                    </td>
                    <td className="border border-[#333] p-2">سنتان</td>
                  </tr>
                  <tr>
                    <td className="border border-[#333] p-2">_gid</td>
                    <td className="border border-[#333] p-2">
                      يُستخدم من قِبل Google Analytics
                    </td>
                    <td className="border border-[#333] p-2">24 ساعة</td>
                  </tr>
                </tbody>
              </table>

              <h2>إدارة تفضيلاتك</h2>
              <p>
                يمكنك التحكم في ملفات تعريف الارتباط أو تعطيلها من خلال إعدادات
                المتصفح الخاص بك. قد يؤثر ذلك على بعض وظائف الموقع.
              </p>

              <h2>تحديثات السياسة</h2>
              <p>
                قد يتم تعديل سياسة ملفات تعريف الارتباط هذه من وقت لآخر. سيتم
                نشر أي تحديثات على هذه الصفحة مع التاريخ المحدث.
              </p>

              <h2>الاتصال</h2>
              <p>
                للاستفسارات المتعلقة باستخدام ملفات تعريف الارتباط، يرجى التواصل
                معنا عبر البريد الإلكتروني unity-training@mtcit.gov.om.
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
