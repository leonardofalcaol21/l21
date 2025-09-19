import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PowerBIPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 flex items-center justify-center overflow-hidden">
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
            Transforme seus dados em <span className="text-orange-500">vantagem competitiva</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-3xl mx-auto animate-fade-in-up">
            Dashboards profissionais, análises avançadas e insights que impulsionam seu negócio com Power BI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3"
            >
              Saiba Mais
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 bg-transparent"
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços Power BI */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Nossos Serviços de <span className="text-orange-500">Power BI</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">📊</span>
                </div>
                <CardTitle className="text-xl">Dashboards Profissionais</CardTitle>
                <CardDescription>Unificamos os dados de diversas fontes em painéis dinâmicos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Integramos sistemas legados (Winthor, RMS, Protheus), planilhas e outras fontes de dados em dashboards
                  interativos que facilitam a tomada de decisão.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Integração com múltiplas fontes</li>
                  <li>• Visualizações interativas</li>
                  <li>• Atualizações automáticas</li>
                  <li>• Acesso mobile e web</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">🎓</span>
                </div>
                <CardTitle className="text-xl">Treinamentos</CardTitle>
                <CardDescription>Capacitamos sua equipe para usar o Power BI</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Ministramos treinamentos de Power BI e Excel para qualificar o time dos nossos clientes e atingir os
                  resultados esperados.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Treinamento básico ao avançado</li>
                  <li>• Metodologia prática</li>
                  <li>• Certificação inclusa</li>
                  <li>• Suporte pós-treinamento</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">💡</span>
                </div>
                <CardTitle className="text-xl">Consultoria BI</CardTitle>
                <CardDescription>Estratégias personalizadas para seu negócio</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Ajudamos na melhoria dos processos, construção de indicadores de desempenho e escolha da melhor
                  solução para sua realidade.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Análise de processos</li>
                  <li>• Definição de KPIs</li>
                  <li>• Arquitetura de dados</li>
                  <li>• Governança de dados</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Por que escolher nossos serviços de <span className="text-orange-500">Power BI</span>?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Decisões Baseadas em Dados</h3>
                  <p className="text-gray-300">Transforme dados brutos em insights acionáveis para sua empresa</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Economia de Tempo</h3>
                  <p className="text-gray-300">Automatize relatórios e tenha informações em tempo real</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">ROI Comprovado</h3>
                  <p className="text-gray-300">Nossos clientes veem resultados mensuráveis em poucos meses</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Suporte Especializado</h3>
                  <p className="text-gray-300">Equipe certificada Microsoft disponível para suporte contínuo</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img src="/mascote-falcao-l21.png" alt="Mascote L21 Power BI" className="w-full max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-16 bg-gradient-to-br from-teal-500 to-blue-600">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Nosso <span className="text-orange-300">Processo</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Análise</h3>
              <p className="text-gray-200">Entendemos suas necessidades e fontes de dados</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Planejamento</h3>
              <p className="text-gray-200">Definimos a arquitetura e indicadores chave</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Desenvolvimento</h3>
              <p className="text-gray-200">Criamos dashboards e relatórios personalizados</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Entrega</h3>
              <p className="text-gray-200">Treinamos sua equipe e fornecemos suporte</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Pronto para transformar seus <span className="text-orange-500">dados</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como o Power BI pode revolucionar a gestão do seu negócio
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg"
          >
            Solicitar Orçamento
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
