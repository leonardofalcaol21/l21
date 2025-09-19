import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              <Image
                src="/mascote-falcao-l21.png"
                alt="Mascote L21 - Falcão da empresa"
                width={700}
                height={700}
                className="w-[600px] h-[600px] object-contain"
              />
              {/* Floating elements around character */}
              <div className="absolute top-10 right-10 w-4 h-4 bg-orange-500 rounded-full animate-bounce" />
              <div className="absolute bottom-16 left-8 w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
              <div className="absolute top-20 left-12 w-2 h-2 bg-orange-600 rounded-full animate-ping" />
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-500 text-sm font-medium">✨ Inovação Tecnológica</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Transformamos desafios tecnológicos em <span className="text-orange-500">soluções práticas</span>
            </h2>

            <p className="text-lg text-gray-700 mb-8 text-pretty leading-relaxed">
              Na L21, auxiliamos empresas a se destacarem em um mundo impulsionado por dados e inovação. Somos
              especialistas em tecnologia, dados e educação, oferecendo soluções personalizadas que conectam estratégias
              a resultados tangíveis em duas frentes principais: dados e desenvolvimento.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3 p-6 bg-white/50 rounded-lg border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">📊</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Dados</h3>
                  <p className="text-sm text-gray-700">
                    Transformamos dados em insights acionáveis para suas empresas através de análise e IA.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-6 bg-white/50 rounded-lg border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">💻</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Desenvolvimento</h3>
                  <p className="text-sm text-gray-700">
                    Soluções tecnológicas sob medida com as mais recentes tecnologias e práticas de desenvolvimento.
                  </p>
                </div>
              </div>
            </div>

            <button
              className="inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: "#f97316",
                color: "#ffffff",
                border: "none",
              }}
            >
              Saiba Mais
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
