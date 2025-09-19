"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContatoPage() {
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
            Entre em <span className="text-orange-500">Contato</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto animate-fade-in-up">
            Estamos prontos para transformar suas ideias em soluções tecnológicas que impulsionam seu negócio
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 animate-fade-in-up"
          >
            Fale Conosco Agora
          </Button>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Envie sua <span className="text-orange-500">mensagem</span>
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
                    <Input type="text" placeholder="Seu nome completo" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input type="email" placeholder="seu@email.com" className="w-full" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                    <Input type="tel" placeholder="(91) 98703-7203" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                    <Input type="text" placeholder="Nome da sua empresa" className="w-full" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Serviço de Interesse</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                    <option value="">Selecione um serviço</option>
                    <option value="power-bi">Power BI</option>
                    <option value="desenvolvimento">Desenvolvimento</option>
                    <option value="integracao">Integração</option>
                    <option value="treinamento">Treinamento</option>
                    <option value="consultoria">Consultoria</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
                  <Textarea placeholder="Descreva seu projeto ou necessidade..." rows={6} className="w-full" />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Outras formas de <span className="text-orange-500">contato</span>
              </h2>

              <div className="space-y-6">
                <Card className="border-2 hover:border-orange-500 transition-colors">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xl">📱</span>
                      </div>
                      <div>
                        <CardTitle className="text-lg">WhatsApp</CardTitle>
                        <CardDescription>Resposta rápida das 9h às 18h</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-gray-800 mb-2">(91) 98703-7203</p>
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-white"
                      onClick={() =>
                        window.open("https://wa.me/5591987037203?text=Olá! Vim através do site da L21.", "_blank")
                      }
                    >
                      Abrir WhatsApp
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-orange-500 transition-colors">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xl">✉️</span>
                      </div>
                      <div>
                        <CardTitle className="text-lg">Email</CardTitle>
                        <CardDescription>Resposta em até 24h</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-bold text-gray-800">contato@l21.net.br</p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-orange-500 transition-colors">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xl">📍</span>
                      </div>
                      <div>
                        <CardTitle className="text-lg">Endereço</CardTitle>
                        <CardDescription>Nosso escritório em Belém</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-800">
                      Rodovia Augusto Montenegro, 4300
                      <br />
                      Parque Office, BelOffice Coworking
                      <br />
                      Sala 106N - Belém, PA
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <img src="/mascote-falcao-l21.png" alt="Mascote L21 Contato" className="w-64 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sessão Estratégica Gratuita */}
      <section className="py-16 bg-gradient-to-br from-teal-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Agende uma sessão <span className="text-orange-300">estratégica gratuita</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Precisa saber mais? Entre em contato conosco e nosso time estará pronto para atendê-lo. Oferecemos uma
            consulta gratuita para entender suas necessidades.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Análise Gratuita</h3>
              <p className="text-gray-200">Avaliamos suas necessidades sem custo</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-white mb-2">Estratégia Personalizada</h3>
              <p className="text-gray-200">Criamos um plano específico para você</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Resultados Rápidos</h3>
              <p className="text-gray-200">Implementação ágil e eficiente</p>
            </div>
          </div>
          <Button size="lg" className="mt-8 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
            Agendar Sessão Gratuita
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Perguntas <span className="text-orange-500">Frequentes</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Qual o prazo médio para desenvolvimento de um projeto?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  O prazo varia conforme a complexidade do projeto. Projetos simples podem ser entregues em 2-4 semanas,
                  enquanto sistemas mais complexos podem levar de 2-6 meses. Sempre definimos cronogramas realistas na
                  fase de planejamento.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vocês oferecem suporte após a entrega?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sim! Oferecemos suporte técnico e manutenção contínua para todos os nossos projetos. Temos planos de
                  suporte flexíveis que se adaptam às necessidades de cada cliente.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Como funciona o processo de orçamento?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Primeiro fazemos uma reunião para entender suas necessidades. Depois elaboramos uma proposta detalhada
                  com escopo, cronograma e investimento. O orçamento é sempre transparente e sem surpresas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Trabalham com empresas de que porte?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Atendemos desde pequenas empresas até grandes corporações. Nosso foco é sempre entregar soluções que
                  se adequem ao porte e orçamento de cada cliente, garantindo o melhor ROI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
