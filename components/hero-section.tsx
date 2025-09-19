"use client"

import { ArrowRight, Code, Database, Cpu, Wifi, BarChart3, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Soluções Tecnológicas",
      highlight: "Inteligentes",
      description: "Transformamos desafios tecnológicos em soluções práticas para impulsionar seu negócio",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
    },
    {
      title: "BI & Power BI",
      highlight: "Transformando dados em resultados concretos",
      description: "Análise inteligente de dados para decisões estratégicas que impulsionam o crescimento",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden transition-all duration-700"
      style={{
        backgroundImage: slides[currentSlide].background,
        backgroundColor: "#0f172a",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating tech icons */}
        <div className="absolute animate-float-slow" style={{ top: "15%", left: "10%" }}>
          <Code className="w-8 h-8 text-orange-400/30" />
        </div>
        <div className="absolute animate-float-medium" style={{ top: "25%", right: "15%" }}>
          <Database className="w-6 h-6 text-teal-400/40" />
        </div>
        <div className="absolute animate-float-fast" style={{ top: "60%", left: "80%" }}>
          <Cpu className="w-10 h-10 text-blue-400/20" />
        </div>
        <div className="absolute animate-float-slow" style={{ bottom: "20%", left: "20%" }}>
          <Wifi className="w-7 h-7 text-orange-300/50" />
        </div>
        <div className="absolute animate-float-medium" style={{ top: "40%", right: "25%" }}>
          <BarChart3 className="w-8 h-8 text-orange-400/35" />
        </div>
        <div className="absolute animate-float-slow" style={{ bottom: "30%", right: "10%" }}>
          <TrendingUp className="w-6 h-6 text-teal-400/45" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden mb-12">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 px-8">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 text-balance leading-tight">
                    <span className="text-white">{slide.title}</span>
                    <br />
                    <span className="text-orange-500">{slide.highlight}</span>
                  </h1>

                  <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto text-slate-300 text-pretty leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-3 mb-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-orange-500 scale-125" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="inline-flex items-center px-10 py-5 text-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300">
              Nossos Serviços
              <ArrowRight className="ml-3 h-6 w-6" />
            </button>

            <button className="inline-flex items-center px-10 py-5 text-lg border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:scale-105 transition-all duration-300">
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
