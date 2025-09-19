import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function SobrePage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center overflow-hidden">
        {/* Technology Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/abstract-technology-circuit-board-pattern-with-blu.jpg')",
          }}
        ></div>

        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern opacity-20"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Sobre a <span className="text-orange-500">L21</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto animate-fade-in-up">
            Conheça nossa história, missão e os valores que nos movem a transformar dados em resultados concretos
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 animate-fade-in-up"
          >
            Nossa Jornada
          </Button>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Nossa <span className="text-orange-500">História</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img src="/mascote-falcao-l21.png" alt="Mascote L21" className="w-full max-w-md mx-auto" />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Movida pelo desafio de desenvolver tecnologias e soluções, que possam impulsionar o desenvolvimento e
                  sustentabilidade dos negócios de seus clientes, a L21 Consultoria e Treinamentos acredita que a
                  atualização tecnológica é uma ferramenta revolucionária na gestão.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Para isso temos a receita de sucesso: um time de excelência. Profissionais qualificados, inovadores e
                  atualizados, trabalhando para ser uma referência no processo de desenvolvimento e consultoria de
                  soluções em tecnologia da informação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gradient-to-br from-teal-500 to-blue-600">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Nossos <span className="text-orange-300">Valores</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">M</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Missão</h3>
              <p className="text-gray-200 leading-relaxed">
                Transformar dados em vantagem competitiva através de soluções inovadoras e personalizadas para cada
                cliente.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">V</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Visão</h3>
              <p className="text-gray-200 leading-relaxed">
                Ser referência em consultoria e desenvolvimento de soluções em tecnologia da informação no mercado
                nacional.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">E</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excelência</h3>
              <p className="text-gray-200 leading-relaxed">
                Profissionais qualificados, inovadores e atualizados, explorando experiências para agregar valor às
                organizações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">30+</div>
              <div className="text-xl text-gray-300">Clientes</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">20+</div>
              <div className="text-xl text-gray-300">Projetos</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">5+</div>
              <div className="text-xl text-gray-300">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-xl text-gray-300">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Time */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Nosso <span className="text-orange-500">Time</span>
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Buscamos o desenvolvimento de soluções inovadoras para atender as necessidades de nossos clientes. Nosso
              time é composto por profissionais especializados em Business Intelligence, desenvolvimento de software e
              consultoria empresarial.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Especialistas em BI</h3>
                <p className="text-gray-600">
                  Profissionais certificados em Power BI e ferramentas de análise de dados
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Desenvolvedores</h3>
                <p className="text-gray-600">Equipe experiente em desenvolvimento de sistemas e integrações</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
