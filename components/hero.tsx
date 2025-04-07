import {Button} from "@/components/ui/button";
import {ArrowRight, Terminal} from "lucide-react";
import Image from "next/image";

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
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-block rounded-full px-3 py-1 text-sm border border-[#333] bg-black/30 text-emerald-500">
              {language === "en"
                ? "MTCIT Official Training Program"
                : "برنامج التدريب الرسمي MTCIT"}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              {language === "en" ? (
                <>
                  <span className="text-emerald-500">Unity</span> Game <br />
                  Development <br />
                  <span className="relative">
                    <span className="relative z-10">Training</span>
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-500/20 -z-10"></span>
                  </span>
                </>
              ) : (
                <>
                  تدريب <span className="text-emerald-500">Unity</span> <br />
                  لتطوير <br />
                  <span className="relative">
                    <span className="relative z-10">الألعاب</span>
                    <span className="absolute bottom-2 right-0 w-full h-3 bg-emerald-500/20 -z-10"></span>
                  </span>
                </>
              )}
            </h1>

            <p className="text-xl text-gray-400 max-w-[600px] mx-auto md:mx-0">
              {language === "en"
                ? "Master professional game development with Unity. A comprehensive training program by the Ministry of Transport, Communications and Information Technology."
                : "أتقن تطوير الألعاب الاحترافية باستخدام Unity. برنامج تدريبي شامل من وزارة النقل والاتصالات وتكنولوجيا المعلومات."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-emerald-500 text-black hover:bg-[#00cc7d] group"
              >
                {language === "en" ? "Apply Now" : "قدم الآن"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#333] hover:bg-[#111] hover:text-emerald-500"
              >
                {language === "en" ? "Learn More" : "اعرف المزيد"}
              </Button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-[#00cc7d] rounded-lg blur opacity-30"></div>
            <div className="relative bg-[#0a0a0a] border border-[#333] rounded-lg p-1">
              <img
                src="/hero.png"
                alt={
                  language === "en"
                    ? "Unity Game Development"
                    : "تطوير ألعاب Unity"
                }
                className="rounded-lg"
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
