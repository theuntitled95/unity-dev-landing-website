"use client";

import {Button} from "@/components/ui/button";
import {Clock, ExternalLink, Mail, MapPin, Phone, Terminal} from "lucide-react";

interface ContactUsProps {
  language: "en" | "ar";
}

export function Contact({language}: ContactUsProps) {
  return (
    <section id="contact" className="py-20 relative bg-[#050505]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMTEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAzNGgydi00aC0ydjR6bTAtNnYtNGgtMnY0aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5 -z-10" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex gap-2 px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400">
            <Mail className="h-5 w-5" />
            <span className="uppercase text-sm font-semibold tracking-wider">
              {language === "en" ? "Contact Us" : "اتصل بنا"}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {language === "en" ? "Get in Touch" : "تواصل معنا"}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-[#00cc7d] mx-auto mt-6"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            {language === "en"
              ? "Have questions about the program? Our team is here to help. Reach out to us through any of the contact methods below."
              : "هل لديك أسئلة حول البرنامج؟ فريقنا هنا للمساعدة. تواصل معنا من خلال أي من طرق الاتصال أدناه."}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-[#00cc7d]/20 rounded-lg blur-lg"></div>
            <div className="relative bg-[#0a0a0a] border border-[#222] rounded-lg overflow-hidden">
              <div className="bg-[#111] border-b border-[#222] p-3 flex items-center gap-2">
                <Terminal className="h-5 w-5 text-emerald-500" />
                <h3 className="font-bold text-lg">
                  {language === "en"
                    ? "Contact Information"
                    : "معلومات الاتصال"}
                </h3>
              </div>

              <div className="p-6">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4 p-5 bg-[#0f0f0f] rounded-lg border border-[#222]">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-2">
                        {language === "en" ? "Address" : "العنوان"}
                      </h3>
                      <p className="text-gray-400">
                        {language === "en"
                          ? "Ministry of Transport, Communications and Information Technology, Muscat, Oman"
                          : "وزارة النقل والاتصالات وتكنولوجيا المعلومات، مسقط، عمان"}
                      </p>
                      <a
                        href="https://maps.google.com/?q=Ministry+of+Transport+Communications+and+Information+Technology+Muscat+Oman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-emerald-500 hover:underline mt-2 text-sm"
                      >
                        {language === "en" ? "View on map" : "عرض على الخريطة"}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-[#0f0f0f] rounded-lg border border-[#222]">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-2">
                        {language === "en" ? "Email" : "البريد الإلكتروني"}
                      </h3>
                      <p className="text-gray-400">
                        <a
                          href="mailto:unity-training@mtcit.gov.om"
                          className="hover:text-emerald-500 transition-colors"
                        >
                          unity-training@mtcit.gov.om
                        </a>
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        {language === "en"
                          ? "We typically respond within 24-48 hours"
                          : "نرد عادة خلال 24-48 ساعة"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-[#0f0f0f] rounded-lg border border-[#222]">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-2">
                        {language === "en" ? "Phone" : "الهاتف"}
                      </h3>
                      <p className="text-gray-400">
                        <a
                          href="tel:+9682XXXXXXX"
                          className="hover:text-emerald-500 transition-colors"
                        >
                          +968 2XXX XXXX
                        </a>
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        {language === "en"
                          ? "Available during office hours"
                          : "متاح خلال ساعات العمل"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-[#0f0f0f] rounded-lg border border-[#222]">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-2">
                        {language === "en" ? "Office Hours" : "ساعات العمل"}
                      </h3>
                      <p className="text-gray-400">
                        {language === "en"
                          ? "Sunday - Thursday: 8:00 AM - 4:00 PM"
                          : "الأحد - الخميس: 8:00 صباحًا - 4:00 مساءً"}
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        {language === "en"
                          ? "Closed on Fridays, Saturdays and public holidays"
                          : "مغلق أيام الجمعة والسبت والعطلات الرسمية"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Button
                    className="bg-emerald-500 text-black hover:bg-[#00cc7d] group"
                    onClick={() =>
                      (window.location.href = "https://wa.me/96891234567")
                    }
                  >
                    {language === "en"
                      ? "WhatsApp Us Now"
                      : "راسلنا على واتساب"}
                    {/* <MessageCircle className="ml-2 h-4 w-4" /> */}
                    <span className="[&>svg]:!h-5 [&>svg]:!w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                    </span>
                  </Button>
                </div>
              </div>

              <div className="bg-[#111] border-t border-[#222] p-3 flex items-center justify-center">
                <div className="text-xs text-gray-500 font-mono">
                  {language === "en"
                    ? "For urgent inquiries, please call during office hours"
                    : "للاستفسارات العاجلة، يرجى الاتصال خلال ساعات العمل"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
