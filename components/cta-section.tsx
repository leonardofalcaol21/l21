"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap } from "lucide-react"

export default function CTASection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        backgroundColor: "#0f172a",
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div
          className="rounded-3xl p-12 text-center relative overflow-hidden border"
          style={{
            background: "linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.8) 100%)",
            borderColor: "rgba(148, 163, 184, 0.3)",
            backdropFilter: "blur(8px)",
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-6 left-6">
            <Sparkles className="w-6 h-6 text-orange-400/60" />
          </div>
          <div className="absolute top-6 right-6">
            <Zap className="w-6 h-6 text-teal-400/60" />
          </div>

          <div className="relative z-10">
            {/* Removed the badge of Transformação Digital */}

            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: "#ffffff" }}>
              Entre em contato conosco
            </h3>

            <p className="mb-8 max-w-2xl mx-auto text-xl text-pretty leading-relaxed" style={{ color: "#cbd5e1" }}>
              Descubra como nossas soluções inovadoras podem impulsionar o crescimento exponencial da sua empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="font-semibold px-8 py-4 border-0 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                style={{
                  background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                  color: "#ffffff",
                }}
              >
                Fale Conosco Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 transform hover:scale-105 transition-all duration-300 bg-transparent"
                style={{
                  borderColor: "#64748b",
                  color: "#cbd5e1",
                  backgroundColor: "transparent",
                }}
              >
                Ver Portfólio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
