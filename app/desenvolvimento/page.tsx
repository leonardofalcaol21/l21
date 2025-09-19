import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DesenvolvimentoPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-800 flex items-center justify-center overflow-hidden">
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
            Desenvolvemos <span className="text-orange-500">soluções</span> de acordo com sua necessidade
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto animate-fade-in-up">
            Sistemas personalizados, integrações robustas e aplicações que impulsionam a evolução do seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3"
            >
              Nossos Projetos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 bg-transparent"
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços de Desenvolvimento */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Nossos Serviços de <span className="text-orange-500">Desenvolvimento</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">🌐</span>
                </div>
                <CardTitle className="text-xl">Sistemas Web</CardTitle>
                <CardDescription>Aplicações web modernas e responsivas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Desenvolvemos sistemas web completos utilizando as mais modernas tecnologias, garantindo performance,
                  segurança e escalabilidade.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• React, Next.js, Node.js</li>
                  <li>• Design responsivo</li>
                  <li>• APIs RESTful</li>
                  <li>• Banco de dados otimizado</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">🔗</span>
                </div>
                <CardTitle className="text-xl">Integrações</CardTitle>
                <CardDescription>Conectamos seus sistemas e dados</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Realizamos integrações com sistemas legados, APIs externas e serviços de terceiros para unificar seus
                  processos.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• ERP (Winthor, RMS, Protheus)</li>
                  <li>• APIs de pagamento</li>
                  <li>• Sistemas de CRM</li>
                  <li>• Marketplaces</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">📱</span>
                </div>
                <CardTitle className="text-xl">Apps Mobile</CardTitle>
                <CardDescription>Aplicativos nativos e híbridos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Criamos aplicativos mobile para iOS e Android, oferecendo experiência nativa e performance otimizada.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• React Native</li>
                  <li>• Interface intuitiva</li>
                  <li>• Sincronização offline</li>
                  <li>• Push notifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">⚙️</span>
                </div>
                <CardTitle className="text-xl">Automação</CardTitle>
                <CardDescription>Automatize processos e workflows</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Desenvolvemos soluções de automação para otimizar processos repetitivos e aumentar a produtividade.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• RPA (Robotic Process Automation)</li>
                  <li>• Workflows automatizados</li>
                  <li>• Integração de sistemas</li>
                  <li>• Relatórios automáticos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">☁️</span>
                </div>
                <CardTitle className="text-xl">Cloud Solutions</CardTitle>
                <CardDescription>Migração e desenvolvimento em nuvem</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Migramos e desenvolvemos soluções na nuvem, garantindo escalabilidade, segurança e redução de custos.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• AWS, Azure, Google Cloud</li>
                  <li>• Arquitetura serverless</li>
                  <li>• DevOps e CI/CD</li>
                  <li>• Monitoramento 24/7</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">🛡️</span>
                </div>
                <CardTitle className="text-xl">Segurança</CardTitle>
                <CardDescription>Proteção e compliance de dados</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Implementamos as melhores práticas de segurança para proteger seus dados e garantir compliance.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Criptografia de dados</li>
                  <li>• Autenticação multifator</li>
                  <li>• LGPD compliance</li>
                  <li>• Auditoria de segurança</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Tenha as <span className="text-orange-500">melhores tecnologias</span> ao seu favor
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Stack Tecnológico</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <h4 className="font-bold text-white mb-2">Frontend</h4>
                  <p className="text-gray-300 text-sm">React, Next.js, TypeScript, Tailwind CSS</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <h4 className="font-bold text-white mb-2">Backend</h4>
                  <p className="text-gray-300 text-sm">Node.js, Python, .NET, Java</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <h4 className="font-bold text-white mb-2">Database</h4>
                  <p className="text-gray-300 text-sm">PostgreSQL, MongoDB, SQL Server</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <h4 className="font-bold text-white mb-2">Cloud</h4>
                  <p className="text-gray-300 text-sm">AWS, Azure, Vercel, Docker</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img
                src="/mascote-falcao-l21.png"
                alt="Mascote L21 Desenvolvimento"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Processo de Desenvolvimento */}
      <section className="py-16 bg-gradient-to-br from-teal-500 to-blue-600">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Nosso Processo de <span className="text-orange-300">Desenvolvimento</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Descoberta</h3>
              <p className="text-gray-200 text-sm">Entendemos suas necessidades e objetivos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Planejamento</h3>
              <p className="text-gray-200 text-sm">Definimos arquitetura e cronograma</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Desenvolvimento</h3>
              <p className="text-gray-200 text-sm">Codificamos com metodologia ágil</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Testes</h3>
              <p className="text-gray-200 text-sm">Garantimos qualidade e performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">5</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Deploy</h3>
              <p className="text-gray-200 text-sm">Entregamos e oferecemos suporte</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Por que escolher a <span className="text-orange-500">L21</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Agilidade</h3>
              <p className="text-gray-600">
                Metodologia ágil com entregas rápidas e feedback contínuo para garantir que o projeto atenda suas
                expectativas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Personalização</h3>
              <p className="text-gray-600">
                Cada solução é desenvolvida especificamente para sua realidade, garantindo máxima eficiência e ROI.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🛠️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Suporte</h3>
              <p className="text-gray-600">
                Oferecemos suporte contínuo e manutenção para garantir que sua solução evolua junto com seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Pronto para <span className="text-orange-500">evoluir</span> seu negócio?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos desenvolver a solução perfeita para sua empresa
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg"
          >
            Iniciar Projeto
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
