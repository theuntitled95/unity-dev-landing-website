"use client";

import {Button} from "@/components/ui/button";
import {ChevronLeft, ChevronRight, Globe} from "lucide-react";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function TermsPage() {
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
    setLanguage(language === "en" ? "ar" : "en");
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
          {language === "en" ? "Terms & Conditions" : "الشروط والأحكام"}
        </h1>

        <div className="prose prose-invert max-w-none">
          {language === "en" ? (
            <>
              <h2>1. Introduction</h2>
              <p>
                Welcome to the Unity Game Development Training Program website.
                This site is created and maintained by London Academy in
                collaboration with the Ministry of Transport, Communications and
                Information Technology (MTCIT), Oman. By accessing and using
                this website or applying to the training program, you agree to
                these Terms and Conditions.
              </p>

              <h2>2. Ownership</h2>
              <p>
                This website and its content are the property of London Academy.
                The training program is a collaborative initiative between
                London Academy and MTCIT. While the Ministry endorses and
                supports the program, all digital infrastructure, web content,
                and user data are managed by London Academy.
              </p>

              <h2>3. Eligibility</h2>
              <p>
                The program is open to Omani citizens aged 18-35. Applicants
                must meet the criteria outlined on the application form. London
                Academy and MTCIT reserve the right to verify eligibility and
                reject applications at their discretion.
              </p>

              <h2>4. Application Process</h2>
              <p>
                Submission of an application does not guarantee selection. All
                applications are reviewed on merit, and selected candidates will
                be contacted via email. London Academy and MTCIT reserve the
                right to accept or reject applications without notice.
              </p>

              <h2>5. Participation Requirements</h2>
              <p>
                Selected participants are expected to commit to the full
                duration of the program, attend sessions regularly, and complete
                all assignments. Non-compliance may result in removal from the
                program.
              </p>

              <h2>6. Intellectual Property</h2>
              <p>
                All materials provided during the program are jointly owned by
                London Academy and MTCIT unless otherwise specified. These
                materials may not be reproduced or distributed for commercial
                purposes without written consent.
              </p>

              <h2>7. Modifications</h2>
              <p>
                London Academy reserves the right to modify these Terms and
                Conditions at any time. Changes will be posted on this page and
                take effect immediately.
              </p>

              <h2>8. Contact</h2>
              <p>
                For any questions or concerns, please contact us at: <br />
                Email: unity-training@mtcit.gov.om
              </p>
            </>
          ) : (
            <>
              <h2>1. المقدمة</h2>
              <p>
                مرحبًا بك في موقع برنامج تدريب تطوير ألعاب Unity. تم إنشاء هذا
                الموقع وصيانته من قبل أكاديمية لندن بالتعاون مع وزارة النقل
                والاتصالات وتقنية المعلومات (MTCIT) في سلطنة عمان. باستخدام هذا
                الموقع أو التقديم للبرنامج، فإنك توافق على هذه الشروط والأحكام.
              </p>

              <h2>2. الملكية</h2>
              <p>
                هذا الموقع ومحتواه مملوكان لأكاديمية لندن. البرنامج التدريبي هو
                مبادرة مشتركة بين أكاديمية لندن ووزارة النقل والاتصالات وتقنية
                المعلومات. على الرغم من أن الوزارة تدعم وتشارك في البرنامج، فإن
                جميع البنية الرقمية والمحتوى وإدارة بيانات المستخدم تتم من خلال
                أكاديمية لندن.
              </p>

              <h2>3. الأهلية</h2>
              <p>
                البرنامج مفتوح للمواطنين العمانيين الذين تتراوح أعمارهم بين 18
                و35 عامًا. يجب على المتقدمين استيفاء المعايير المذكورة في نموذج
                الطلب. تحتفظ أكاديمية لندن والوزارة بحق التحقق من الأهلية ورفض
                أي طلب دون إشعار.
              </p>

              <h2>4. عملية التقديم</h2>
              <p>
                تقديم الطلب لا يعني القبول. تتم مراجعة جميع الطلبات بناءً على
                الجدارة، وسيتم التواصل مع المرشحين المختارين عبر البريد
                الإلكتروني. تحتفظ أكاديمية لندن والوزارة بحق قبول أو رفض أي طلب.
              </p>

              <h2>5. متطلبات المشاركة</h2>
              <p>
                يُتوقع من المشاركين المختارين الالتزام الكامل بالبرنامج، بما في
                ذلك الحضور المنتظم وإكمال المهام. عدم الامتثال قد يؤدي إلى
                استبعاد المشارك من البرنامج.
              </p>

              <h2>6. الملكية الفكرية</h2>
              <p>
                جميع المواد المقدمة خلال البرنامج مملوكة بشكل مشترك لأكاديمية
                لندن ووزارة النقل والاتصالات وتقنية المعلومات، ما لم يُذكر خلاف
                ذلك. لا يجوز إعادة إنتاج هذه المواد أو توزيعها لأغراض تجارية دون
                موافقة خطية.
              </p>

              <h2>7. التعديلات</h2>
              <p>
                تحتفظ أكاديمية لندن بالحق في تعديل هذه الشروط والأحكام في أي
                وقت. سيتم نشر التغييرات على هذه الصفحة وتصبح سارية فورًا.
              </p>

              <h2>8. معلومات الاتصال</h2>
              <p>
                لأي استفسارات أو ملاحظات، يرجى التواصل عبر البريد الإلكتروني:{" "}
                <br />
                unity-training@mtcit.gov.om
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
