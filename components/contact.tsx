"use client";

import type React from "react";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {CheckCircle, Mail, MapPin, Phone, Send, Terminal} from "lucide-react";
import {useState} from "react";

interface ContactProps {
  language: "en" | "ar";
}

export function Contact({language}: ContactProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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

  const validateForm = () => {
    let isValid = true;
    const newErrors = {name: "", email: "", subject: "", message: ""};

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

    if (!formState.subject.trim()) {
      newErrors.subject =
        language === "en" ? "Subject is required" : "الموضوع مطلوب";
      isValid = false;
    }

    if (!formState.message.trim()) {
      newErrors.message =
        language === "en" ? "Message is required" : "الرسالة مطلوبة";
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
        setFormState({name: "", email: "", subject: "", message: ""});

        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-[#050505]">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3 text-[#00ff9d]">
            <Mail className="h-5 w-5" />
            <span className="uppercase text-sm font-semibold tracking-wider">
              {language === "en" ? "Contact Us" : "اتصل بنا"}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {language === "en" ? "Get in Touch" : "تواصل معنا"}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff9d]/20 to-[#00cc7d]/20 rounded-lg blur-lg"></div>
              <div className="relative bg-[#0a0a0a] border border-[#222] rounded-lg p-6 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-8 bg-[#111] border-b border-[#222] flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                  <div className="ml-4 text-xs text-gray-400 font-mono">
                    contact-info.json
                  </div>
                </div>

                <div className="pt-8 space-y-8 font-mono">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-[#00ff9d]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#00ff9d]">
                        <span className="text-gray-400">"</span>
                        {language === "en" ? "address" : "العنوان"}
                        <span className="text-gray-400">":</span>
                      </h3>
                      <p className="text-gray-400">
                        <span className="text-gray-500">"</span>
                        {language === "en"
                          ? "Ministry of Transport, Communications and Information Technology, Muscat, Oman"
                          : "وزارة النقل والاتصالات وتكنولوجيا المعلومات، مسقط، عمان"}
                        <span className="text-gray-500">"</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-[#00ff9d]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#00ff9d]">
                        <span className="text-gray-400">"</span>
                        {language === "en" ? "email" : "البريد الإلكتروني"}
                        <span className="text-gray-400">":</span>
                      </h3>
                      <p className="text-gray-400">
                        <span className="text-gray-500">"</span>
                        unity-training@mtcit.gov.om
                        <span className="text-gray-500">"</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-[#00ff9d]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#00ff9d]">
                        <span className="text-gray-400">"</span>
                        {language === "en" ? "phone" : "الهاتف"}
                        <span className="text-gray-400">":</span>
                      </h3>
                      <p className="text-gray-400">
                        <span className="text-gray-500">"</span>
                        +968 2XXX XXXX
                        <span className="text-gray-500">"</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff9d]/20 to-[#00cc7d]/20 rounded-lg blur-lg"></div>
            <div className="relative bg-[#0a0a0a] border border-[#222] rounded-lg overflow-hidden">
              <div className="bg-[#111] border-b border-[#222] p-3 flex items-center gap-2">
                <Terminal className="h-5 w-5 text-[#00ff9d]" />
                <h3 className="font-bold text-lg">
                  {language === "en" ? "Send us a message" : "أرسل لنا رسالة"}
                </h3>
              </div>

              {isSubmitted ? (
                <div className="p-10 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-[#00ff9d]/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-[#00ff9d]" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">
                    {language === "en" ? "Message Sent!" : "تم إرسال الرسالة!"}
                  </h4>
                  <p className="text-gray-400 max-w-md">
                    {language === "en"
                      ? "Thank you for your message. We'll get back to you as soon as possible."
                      : "شكرًا لرسالتك. سنرد عليك في أقرب وقت ممكن."}
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
                        {language === "en" ? "Name" : "الاسم"}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder={language === "en" ? "Your name" : "اسمك"}
                        className="bg-[#111] border-[#333] focus:border-[#00ff9d] focus:ring-[#00ff9d]/10"
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
                        {language === "en" ? "Email" : "البريد الإلكتروني"}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        type="email"
                        placeholder={
                          language === "en" ? "Your email" : "بريدك الإلكتروني"
                        }
                        className="bg-[#111] border-[#333] focus:border-[#00ff9d] focus:ring-[#00ff9d]/10"
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
                      htmlFor="subject"
                      className="text-sm font-medium text-gray-400"
                    >
                      {language === "en" ? "Subject" : "الموضوع"}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder={
                        language === "en" ? "Message subject" : "موضوع الرسالة"
                      }
                      className="bg-[#111] border-[#333] focus:border-[#00ff9d] focus:ring-[#00ff9d]/10"
                      aria-invalid={!!errors.subject}
                      aria-describedby={
                        errors.subject ? "subject-error" : undefined
                      }
                    />
                    {errors.subject && (
                      <p
                        id="subject-error"
                        className="text-xs text-red-500 mt-1"
                      >
                        {errors.subject}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-400"
                    >
                      {language === "en" ? "Message" : "الرسالة"}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder={
                        language === "en" ? "Your message" : "رسالتك"
                      }
                      className="bg-[#111] border-[#333] focus:border-[#00ff9d] focus:ring-[#00ff9d]/10"
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="text-xs text-red-500 mt-1"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#00ff9d] text-black hover:bg-[#00cc7d] group"
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
                        {language === "en" ? "Sending..." : "جارٍ الإرسال..."}
                      </span>
                    ) : (
                      <>
                        {language === "en" ? "Send Message" : "إرسال الرسالة"}
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
