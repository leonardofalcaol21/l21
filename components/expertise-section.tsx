import { TrendingUp, Users, Clock, Award } from "lucide-react"

export default function ExpertiseSection() {
  return (
    <section
      className="relative"
      style={{
        background: "linear-gradient(135deg, #06b6d4 0%, #14b8a6 50%, #2563eb 100%)",
        backgroundColor: "#06b6d4",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Tenha as <span className="text-orange-400">melhores tecnologias</span>
              <br />
              ao seu favor
            </h2>
            <p className="text-white/90 text-xl text-pretty leading-relaxed mb-8">
              Utilizamos as tecnologias mais avançadas e metodologias comprovadas para entregar soluções que superam
              expectativas e geram resultados reais para o seu negócio.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-3 h-3 bg-white rounded-full group-hover:scale-125 transition-transform" />
                <span className="text-white text-lg">Tecnologias de ponta e inovadoras</span>
              </div>
              <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-3 h-3 bg-white rounded-full group-hover:scale-125 transition-transform" />
                <span className="text-white text-lg">Metodologias ágeis e eficientes</span>
              </div>
              <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-3 h-3 bg-white rounded-full group-hover:scale-125 transition-transform" />
                <span className="text-white text-lg">Suporte especializado 24/7</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/40 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-orange-200 transition-colors">
                  100+
                </div>
              </div>
              <div className="text-white/80 group-hover:text-white transition-colors font-medium">
                Projetos Entregues
              </div>
            </div>

            <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/40 transition-all duration-300">
                <Award className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-orange-200 transition-colors">
                  5+
                </div>
              </div>
              <div className="text-white/80 group-hover:text-white transition-colors font-medium">
                Anos de Experiência
              </div>
            </div>

            <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/40 transition-all duration-300">
                <Clock className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-orange-200 transition-colors">
                  24/7
                </div>
              </div>
              <div className="text-white/80 group-hover:text-white transition-colors font-medium">Suporte Técnico</div>
            </div>

            <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/40 transition-all duration-300">
                <Users className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-orange-200 transition-colors">
                  50+
                </div>
              </div>
              <div className="text-white/80 group-hover:text-white transition-colors font-medium">
                Clientes Satisfeitos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
