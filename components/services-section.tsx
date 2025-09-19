import { BarChart3, Code, Users } from "lucide-react"

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      className=""
      style={{
        backgroundColor: "#1e40af",
        backgroundImage: "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #1e40af 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Transforme seus dados em
            <br />
            <span className="text-orange-400">vantagem competitiva</span>
          </h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto text-pretty leading-relaxed">
            Oferecemos soluções completas que conectam tecnologia e estratégia para acelerar o crescimento do seu
            negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-teal-500/25">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors backdrop-blur-sm">
              <BarChart3 className="h-10 w-10 text-white group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-200 transition-colors">
              Business Intelligence
            </h3>
            <p className="text-teal-50 text-pretty leading-relaxed">
              Transformamos dados brutos em insights estratégicos através de dashboards Power BI profissionais e
              análises avançadas que impulsionam decisões inteligentes.
            </p>
          </div>

          <div className="text-center group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/25">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors backdrop-blur-sm">
              <Code className="h-10 w-10 text-white group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-200 transition-colors">
              Desenvolvimento
            </h3>
            <p className="text-blue-50 text-pretty leading-relaxed">
              Criamos soluções personalizadas e integrações robustas que automatizam processos e conectam seus sistemas
              para máxima eficiência operacional.
            </p>
          </div>

          <div className="text-center group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/25">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors backdrop-blur-sm">
              <Users className="h-10 w-10 text-white group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-200 transition-colors">
              Consultoria
            </h3>
            <p className="text-cyan-50 text-pretty leading-relaxed">
              Oferecemos mentoria especializada e treinamentos que capacitam sua equipe com as melhores práticas em
              análise de dados e gestão empresarial.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
