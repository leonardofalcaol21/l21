"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      {/* Main navigation */}
      <nav className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-white">L21</h1>
              <span className="ml-2 text-lg font-medium text-gray-300">Consultoria</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/sobre" className="text-gray-300 hover:text-primary transition-colors">
              Sobre Nós
            </Link>
            <Link href="/power-bi" className="text-gray-300 hover:text-primary transition-colors">
              Power BI
            </Link>
            <Link href="/desenvolvimento" className="text-gray-300 hover:text-primary transition-colors">
              Desenvolvimento
            </Link>
            <Link href="/contato" className="text-gray-300 hover:text-primary transition-colors">
              Contato
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
            >
              Portal do Cliente
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/sobre"
                className="text-gray-300 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link
                href="/power-bi"
                className="text-gray-300 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Power BI
              </Link>
              <Link
                href="/desenvolvimento"
                className="text-gray-300 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Desenvolvimento
              </Link>
              <Link
                href="/contato"
                className="text-gray-300 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  Portal do Cliente
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
