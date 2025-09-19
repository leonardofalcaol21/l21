import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, Zap, Shield } from "lucide-react"

export default function SolutionsSection() {
  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Desenvolvemos <span className="text-orange-400">soluções</span> que acompanham a{" "}
            <span className="text-orange-400">evolução</span> do seu negócio
          </h2>
          <p className="text-slate-200 text-lg max-w-4xl mx-auto text-pretty leading-relaxed">
            Nossa expertise técnica combinada com visão estratégica resulta em soluções que não apenas resolvem
            problemas atuais, mas preparam sua empresa para o futuro
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/25 bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-600 overflow-hidden group">
            <CardContent className="p-8 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors backdrop-blur-sm">
                  <Database className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Desenvolvimento de Software</h3>
                <p className="text-white text-pretty leading-relaxed mb-6">
                  Sistemas personalizados que se adaptam perfeitamente às necessidades específicas do seu negócio e
                  crescem junto com sua empresa.
                </p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-600 bg-white/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                >
                  Saiba Mais
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 overflow-hidden group">
            <CardContent className="p-8 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors backdrop-blur-sm">
                  <Zap className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Aplicações Móveis</h3>
                <p className="text-white text-pretty leading-relaxed mb-6">
                  Apps nativos e híbridos que conectam sua empresa aos clientes, oferecendo experiências excepcionais em
                  qualquer dispositivo.
                </p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-white/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                >
                  Saiba Mais
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 bg-gradient-to-br from-cyan-600 via-cyan-500 to-blue-500 overflow-hidden group">
            <CardContent className="p-8 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors backdrop-blur-sm">
                  <Shield className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Portais Web & Sistemas</h3>
                <p className="text-white text-pretty leading-relaxed mb-6">
                  Plataformas web robustas e seguras que centralizam informações e facilitam a gestão de processos
                  complexos.
                </p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-cyan-600 bg-white/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                >
                  Saiba Mais
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
