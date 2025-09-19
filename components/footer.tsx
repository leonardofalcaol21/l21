import { Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-bold text-primary">L21</h3>
              <span className="ml-2 text-xl font-medium">Consultoria</span>
            </div>
            <p className="text-gray-300 mb-6 text-pretty">
              Transformamos dados em insights estratégicos e desenvolvemos soluções tecnológicas que impulsionam o
              crescimento do seu negócio.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>11 98703-7203</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>contato@l21.net.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Segunda a Sexta: 8h às 18h</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-primary transition-colors">
                  Business Intelligence
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-primary transition-colors">
                  Power BI
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-primary transition-colors">
                  Desenvolvimento
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-primary transition-colors">
                  Treinamentos
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-primary transition-colors">
                  Consultoria
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Portal do Cliente
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 L21 Consultoria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
