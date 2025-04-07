"use client";

import {Button} from "@/components/ui/button";
import {ChevronLeft, ChevronRight, Globe} from "lucide-react";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function AccessibilityPage() {
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
          {language === "en"
            ? "Accessibility Statement"
            : "بيان إمكانية الوصول"}
        </h1>

        <div className="prose prose-invert max-w-none">
          {language === "en" ? (
            <>
              <h2>Our Commitment</h2>
              <p>
                London Academy is committed to ensuring digital accessibility
                for people with disabilities. We are continually improving the
                user experience for everyone and applying relevant accessibility
                standards. This website is managed and owned by London Academy
                as part of its collaboration with the Ministry of Transport,
                Communications and Information Technology (MTCIT).
              </p>

              <h2>Measures Taken</h2>
              <p>To ensure accessibility, we have taken the following steps:</p>
              <ul>
                <li>Implemented semantic HTML structure</li>
                <li>Provided text alternatives for non-text content</li>
                <li>Ensured sufficient color contrast</li>
                <li>Designed keyboard-navigable interfaces</li>
                <li>Used ARIA attributes where appropriate</li>
                <li>Tested with screen readers and assistive technologies</li>
              </ul>

              <h2>Conformance Status</h2>
              <p>
                Our website aims to conform with WCAG 2.1 Level AA guidelines.
                While most of the site is compliant, some parts may not fully
                meet accessibility standards yet. We are actively working to
                improve.
              </p>

              <h2>Feedback</h2>
              <p>
                If you encounter any accessibility barriers, we would like to
                hear from you:
              </p>
              <ul>
                <li>Email: unity-training@mtcit.gov.om</li>
                <li>Phone: +968 2XXX XXXX</li>
              </ul>
              <p>We typically respond within 3 business days.</p>

              <h2>Assessment</h2>
              <p>
                The latest accessibility review was conducted on April 1, 2025,
                using both automated tools and manual testing. The audit was
                carried out by the internal team at London Academy.
              </p>
            </>
          ) : (
            <>
              <h2>التزامنا</h2>
              <p>
                تلتزم أكاديمية لندن بضمان الوصول الرقمي للأشخاص ذوي الإعاقة. نحن
                نعمل باستمرار على تحسين تجربة المستخدم للجميع وتطبيق معايير
                إمكانية الوصول ذات الصلة. هذا الموقع مملوك ومدار من قبل أكاديمية
                لندن ضمن تعاونها مع وزارة النقل والاتصالات وتقنية المعلومات
                (MTCIT).
              </p>

              <h2>التدابير المتخذة</h2>
              <p>لضمان إمكانية الوصول، قمنا باتخاذ الخطوات التالية:</p>
              <ul>
                <li>تنفيذ بنية HTML دلالية</li>
                <li>توفير بدائل نصية للمحتوى غير النصي</li>
                <li>ضمان تباين ألوان كافٍ</li>
                <li>تصميم واجهات يمكن التنقل فيها باستخدام لوحة المفاتيح</li>
                <li>استخدام سمات ARIA حيثما كان ذلك مناسبًا</li>
                <li>الاختبار باستخدام قارئات الشاشة والتقنيات المساعدة</li>
              </ul>

              <h2>حالة المطابقة</h2>
              <p>
                يهدف موقعنا الإلكتروني إلى التوافق مع إرشادات WCAG 2.1 المستوى
                AA. بينما معظم أجزاء الموقع متوافقة، إلا أن بعض الأجزاء قد لا
                تلبي جميع المعايير بشكل كامل بعد. نحن نعمل على تحسين ذلك بشكل
                مستمر.
              </p>

              <h2>التعليقات</h2>
              <p>
                إذا واجهت أي عوائق تتعلق بإمكانية الوصول، يرجى التواصل معنا:
              </p>
              <ul>
                <li>البريد الإلكتروني: unity-training@mtcit.gov.om</li>
                <li>الهاتف: ‎+968 2XXX XXXX</li>
              </ul>
              <p>نهدف إلى الرد خلال 3 أيام عمل.</p>

              <h2>التقييم</h2>
              <p>
                تم إجراء آخر مراجعة لإمكانية الوصول بتاريخ 1 أبريل 2025،
                باستخدام أدوات تلقائية واختبار يدوي. تم تنفيذ المراجعة من قبل
                فريق أكاديمية لندن الداخلي.
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
