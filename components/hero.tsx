import {Button} from "@/components/ui/button";
import {ArrowLeft, ArrowRight, Terminal} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  language: "en" | "ar";
}

export function Hero({language}: HeroProps) {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated code background */}
      <div className="absolute inset-0 opacity-30">
        <div className="code-background text-emerald-500 font-mono text-xs overflow-hidden h-full">
          {Array.from({length: 20}).map((_, i) => (
            <div key={i} className="code-line">
              {`using UnityEngine;
public class GameController : MonoBehaviour {
    void Start() {
        Debug.Log("Game initialized");
    }
    void Update() {
        if (Input.GetKeyDown(KeyCode.Space)) {
            StartGame();
        }
    }
    void StartGame() {
        // Game logic here
    }
}`}
            </div>
          ))}
        </div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div
            className={`flex-1 space-y-8 text-center ${
              language === "en" ? "md:text-left" : "md:text-right"
            }`}
          >
            <div className="inline-block rounded-full px-3 py-1 text-sm border border-[#333] bg-black/30 text-emerald-500">
              {language === "en"
                ? "A London Academy Bootcamp • Sponsored by MTCIT"
                : "معسكر أكاديمية لندن • برعاية وزارة النقل"}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              {language === "en" ? (
                <>
                  <div>
                    <span className="text-emerald-500">Unity</span> Game <br />
                    Development <br />
                    <span className="relative">
                      <span className="relative z-10">Bootcamp</span>
                      <span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-500/20 -z-10"></span>
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    معسكر <span className="text-emerald-500">Unity</span> <br />
                    لتطوير <br />
                    <span className="relative">
                      <span className="relative z-10">الألعاب</span>
                      <span className="absolute bottom-2 right-0 w-full h-3 bg-emerald-500/20 -z-10"></span>
                    </span>
                  </div>
                </>
              )}
            </h1>

            <p className="text-xl text-gray-400 max-w-[600px] mx-auto md:mx-0">
              {language === "en"
                ? "Join the Unity Game Development Bootcamp delivered by London Academy and proudly sponsored by the Ministry of Transport, Communications and Information Technology (MTCIT). Build job-ready skills with hands-on training in Unity."
                : "انضم إلى معسكر تطوير ألعاب Unity المقدم من أكاديمية لندن وبرعاية وزارة النقل والاتصالات وتقنية المعلومات (MTCIT). اكتسب مهارات عملية تؤهلك لسوق العمل من خلال تدريب تطبيقي على Unity."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-emerald-500 text-black hover:bg-[#00cc7d] group"
              >
                <Link
                  href="https://zurl.to/pd03?source=CareerSite"
                  target="_blank"
                >
                  {language === "en" ? "Apply Now" : "قدم الآن"}
                  {language === "en" ? (
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  ) : (
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  )}
                </Link>
              </Button>
              {/* <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#333] hover:bg-[#111] hover:text-emerald-500"
              >
                <a href="#about">
                  {language === "en" ? "Learn More" : "اعرف المزيد"}
                </a>
              </Button> */}
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-[#00cc7d] rounded-lg blur opacity-30"></div>
            <div className="relative bg-[#0a0a0a] border border-[#333] rounded-lg p-1">
              <Image
                src="/hero.png"
                alt={
                  language === "en"
                    ? "Unity Game Development"
                    : "تطوير ألعاب Unity"
                }
                className="rounded-lg"
                width={700}
                height={700}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm border border-[#333] rounded-md p-3 font-mono text-sm text-emerald-500">
                <div className="flex items-center gap-2 mb-1">
                  <Terminal className="h-4 w-4" />
                  <span className="text-gray-400">unity-dev.exe</span>
                </div>
                <div className="typing-effect">
                  {language === "en"
                    ? "> Starting Unity development training..."
                    : "> بدء تدريب تطوير Unity..."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
