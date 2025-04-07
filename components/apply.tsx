"use client";

import type React from "react";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {
  CheckCircle,
  Code,
  FileText,
  GraduationCap,
  Send,
  Terminal,
} from "lucide-react";
import {useState} from "react";

interface ApplicationFormProps {
  language: "en" | "ar";
}

export function ApplicationForm({language}: ApplicationFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    motivation: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    motivation: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = e.target;
    setFormState((prev) => ({...prev, [name]: value}));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({...prev, [name]: ""}));
    }
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormState((prev) => ({...prev, [name]: value}));

    // Clear error when user selects
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({...prev, [name]: ""}));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      education: "",
      experience: "",
      motivation: "",
    };

    if (!formState.name.trim()) {
      newErrors.name = language === "en" ? "Name is required" : "الاسم مطلوب";
      isValid = false;
    }

    if (!formState.email.trim()) {
      newErrors.email =
        language === "en" ? "Email is required" : "البريد الإلكتروني مطلوب";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email =
        language === "en"
          ? "Invalid email format"
          : "تنسيق البريد الإلكتروني غير صالح";
      isValid = false;
    }

    if (!formState.phone.trim()) {
      newErrors.phone =
        language === "en" ? "Phone number is required" : "رقم الهاتف مطلوب";
      isValid = false;
    }

    if (!formState.education) {
      newErrors.education =
        language === "en"
          ? "Education level is required"
          : "المستوى التعليمي مطلوب";
      isValid = false;
    }

    if (!formState.experience) {
      newErrors.experience =
        language === "en"
          ? "Experience level is required"
          : "مستوى الخبرة مطلوب";
      isValid = false;
    }

    if (!formState.motivation.trim()) {
      newErrors.motivation =
        language === "en"
          ? "Motivation statement is required"
          : "بيان الدافع مطلوب";
      isValid = false;
    } else if (formState.motivation.trim().length < 50) {
      newErrors.motivation =
        language === "en"
          ? "Please provide at least 50 characters"
          : "يرجى تقديم 50 حرفًا على الأقل";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({
          name: "",
          email: "",
          phone: "",
          education: "",
          experience: "",
          motivation: "",
        });

        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="apply" className="py-20 relative bg-[#050505]">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex gap-2 px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400">
            <FileText className="h-5 w-5" />
            <span className="uppercase text-sm font-semibold tracking-wider">
              {language === "en" ? "Apply Now" : "قدم الآن"}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {language === "en"
              ? "Join Our Next Cohort"
              : "انضم إلى دفعتنا القادمة"}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-[#00cc7d] mx-auto mt-6"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            {language === "en"
              ? "Complete the application form below to start your journey in game development. Our team will review your application and contact you within 2-3 weeks."
              : "أكمل نموذج الطلب أدناه لبدء رحلتك في تطوير الألعاب. سيقوم فريقنا بمراجعة طلبك والاتصال بك في غضون 2-3 أسابيع."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-[#00cc7d]/20 rounded-lg blur-lg"></div>
              <div className="relative bg-[#0a0a0a] border border-[#222] rounded-lg p-6">
                <div className="absolute top-0 left-0 right-0 h-8 bg-[#111] border-b border-[#222] flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                  <div className="ml-4 text-xs text-gray-400 font-mono">
                    program-details.json
                  </div>
                </div>

                <div className="pt-8 space-y-8 font-mono">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-emerald-500">
                        <span className="text-gray-400">"</span>
                        {language === "en" ? "eligibility" : "الأهلية"}
                        <span className="text-gray-400">":</span>
                      </h3>
                      <p className="text-gray-400">
                        <span className="text-gray-500">"</span>
                        {language === "en"
                          ? "Open to all Omani citizens aged 18-35 with a passion for game development"
                          : "متاح لجميع المواطنين العمانيين الذين تتراوح أعمارهم بين 18-35 عامًا ولديهم شغف بتطوير الألعاب"}
                        <span className="text-gray-500">"</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <Code className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-emerald-500">
                        <span className="text-gray-400">"</span>
                        {language === "en" ? "requirements" : "المتطلبات"}
                        <span className="text-gray-400">":</span>
                      </h3>
                      <p className="text-gray-400">
                        <span className="text-gray-500">"</span>
                        {language === "en"
                          ? "Basic computer skills required. Programming experience is a plus but not mandatory."
                          : "مهارات الكمبيوتر الأساسية مطلوبة. خبرة البرمجة تعتبر ميزة إضافية ولكنها ليست إلزامية."}
                        <span className="text-gray-500">"</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <Terminal className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-emerald-500">
                        <span className="text-gray-400">"</span>
                        {language === "en" ? "selection" : "الاختيار"}
                        <span className="text-gray-400">":</span>
                      </h3>
                      <p className="text-gray-400">
                        <span className="text-gray-500">"</span>
                        {language === "en"
                          ? "Candidates will be selected based on application quality, motivation, and potential."
                          : "سيتم اختيار المرشحين بناءً على جودة الطلب والدافع والإمكانات."}
                        <span className="text-gray-500">"</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-[#00cc7d]/20 rounded-lg blur-lg"></div>
            <div className="relative bg-[#0a0a0a] border border-[#222] rounded-lg overflow-hidden">
              <div className="bg-[#111] border-b border-[#222] p-3 flex items-center gap-2">
                <Terminal className="h-5 w-5 text-emerald-500" />
                <h3 className="font-bold text-lg">
                  {language === "en" ? "Application Form" : "نموذج التقديم"}
                </h3>
              </div>

              {isSubmitted ? (
                <div className="p-10 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">
                    {language === "en"
                      ? "Application Submitted!"
                      : "تم تقديم الطلب!"}
                  </h4>
                  <p className="text-gray-400 max-w-md">
                    {language === "en"
                      ? "Thank you for applying to our Unity Game Development Training Program. We'll review your application and contact you within 2-3 weeks."
                      : "شكرًا لتقديم طلبك لبرنامج تدريب تطوير ألعاب Unity. سنراجع طلبك ونتواصل معك في غضون 2-3 أسابيع."}
                  </p>
                </div>
              ) : (
                <form className="p-6 space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-400"
                      >
                        {language === "en" ? "Full Name" : "الاسم الكامل"}*
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder={
                          language === "en" ? "Your full name" : "اسمك الكامل"
                        }
                        className="bg-[#111] border-[#333] focus:border-emerald-500 focus:ring-emerald-500/10"
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="text-xs text-red-500 mt-1"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-400"
                      >
                        {language === "en" ? "Email" : "البريد الإلكتروني"}*
                      </label>
                      <Input
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        type="email"
                        placeholder={
                          language === "en"
                            ? "Your email address"
                            : "عنوان بريدك الإلكتروني"
                        }
                        className="bg-[#111] border-[#333] focus:border-emerald-500 focus:ring-emerald-500/10"
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="text-xs text-red-500 mt-1"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-400"
                    >
                      {language === "en" ? "Phone Number" : "رقم الهاتف"}*
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder={
                        language === "en" ? "Your phone number" : "رقم هاتفك"
                      }
                      className="bg-[#111] border-[#333] focus:border-emerald-500 focus:ring-emerald-500/10"
                      aria-invalid={!!errors.phone}
                      aria-describedby={
                        errors.phone ? "phone-error" : undefined
                      }
                    />
                    {errors.phone && (
                      <p id="phone-error" className="text-xs text-red-500 mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="education"
                        className="text-sm font-medium text-gray-400"
                      >
                        {language === "en"
                          ? "Education Level"
                          : "المستوى التعليمي"}
                        *
                      </label>
                      <Select
                        onValueChange={(value) =>
                          handleSelectChange(value, "education")
                        }
                        value={formState.education}
                      >
                        <SelectTrigger
                          id="education"
                          className="bg-[#111] border-[#333] focus:border-emerald-500 focus:ring-emerald-500/10"
                          aria-invalid={!!errors.education}
                        >
                          <SelectValue
                            placeholder={
                              language === "en"
                                ? "Select education level"
                                : "اختر المستوى التعليمي"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-[#111] border-[#222]">
                          <SelectItem value="high_school">
                            {language === "en"
                              ? "High School"
                              : "الثانوية العامة"}
                          </SelectItem>
                          <SelectItem value="diploma">
                            {language === "en" ? "Diploma" : "دبلوم"}
                          </SelectItem>
                          <SelectItem value="bachelors">
                            {language === "en"
                              ? "Bachelor's Degree"
                              : "درجة البكالوريوس"}
                          </SelectItem>
                          <SelectItem value="masters">
                            {language === "en"
                              ? "Master's Degree"
                              : "درجة الماجستير"}
                          </SelectItem>
                          <SelectItem value="phd">
                            {language === "en" ? "PhD" : "الدكتوراه"}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.education && (
                        <p
                          id="education-error"
                          className="text-xs text-red-500 mt-1"
                        >
                          {errors.education}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="experience"
                        className="text-sm font-medium text-gray-400"
                      >
                        {language === "en"
                          ? "Programming Experience"
                          : "خبرة البرمجة"}
                        *
                      </label>
                      <Select
                        onValueChange={(value) =>
                          handleSelectChange(value, "experience")
                        }
                        value={formState.experience}
                      >
                        <SelectTrigger
                          id="experience"
                          className="bg-[#111] border-[#333] focus:border-emerald-500 focus:ring-emerald-500/10"
                          aria-invalid={!!errors.experience}
                        >
                          <SelectValue
                            placeholder={
                              language === "en"
                                ? "Select experience level"
                                : "اختر مستوى الخبرة"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-[#111] border-[#222]">
                          <SelectItem value="none">
                            {language === "en"
                              ? "No Experience"
                              : "لا توجد خبرة"}
                          </SelectItem>
                          <SelectItem value="beginner">
                            {language === "en" ? "Beginner" : "مبتدئ"}
                          </SelectItem>
                          <SelectItem value="intermediate">
                            {language === "en" ? "Intermediate" : "متوسط"}
                          </SelectItem>
                          <SelectItem value="advanced">
                            {language === "en" ? "Advanced" : "متقدم"}
                          </SelectItem>
                          <SelectItem value="professional">
                            {language === "en" ? "Professional" : "محترف"}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.experience && (
                        <p
                          id="experience-error"
                          className="text-xs text-red-500 mt-1"
                        >
                          {errors.experience}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="motivation"
                      className="text-sm font-medium text-gray-400"
                    >
                      {language === "en"
                        ? "Motivation Statement"
                        : "بيان الدافع"}
                      *
                    </label>
                    <Textarea
                      id="motivation"
                      name="motivation"
                      value={formState.motivation}
                      onChange={handleChange}
                      rows={5}
                      placeholder={
                        language === "en"
                          ? "Tell us why you want to join this program and what you hope to achieve (minimum 50 characters)"
                          : "أخبرنا لماذا تريد الانضمام إلى هذا البرنامج وما تأمل في تحقيقه (50 حرفًا كحد أدنى)"
                      }
                      className="bg-[#111] border-[#333] focus:border-emerald-500 focus:ring-emerald-500/10"
                      aria-invalid={!!errors.motivation}
                      aria-describedby={
                        errors.motivation ? "motivation-error" : undefined
                      }
                    />
                    {errors.motivation && (
                      <p
                        id="motivation-error"
                        className="text-xs text-red-500 mt-1"
                      >
                        {errors.motivation}
                      </p>
                    )}
                  </div>

                  <div className="text-xs text-gray-500 mt-2">
                    {language === "en" ? "* Required fields" : "* حقول مطلوبة"}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-500 text-black hover:bg-[#00cc7d] group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        {language === "en"
                          ? "Submitting..."
                          : "جارٍ التقديم..."}
                      </span>
                    ) : (
                      <>
                        {language === "en"
                          ? "Submit Application"
                          : "تقديم الطلب"}
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
