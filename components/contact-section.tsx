"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contato"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)",
        minHeight: "100vh",
        backgroundColor: "#0f172a",
      }}
    >
      <div className="absolute inset-0">
        <div
          className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, rgba(249, 115, 22, 0.05) 50%, transparent 100%)",
          }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(20, 184, 166, 0.05) 50%, transparent 100%)",
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#ffffff" }}>
            Entre em{" "}
            <span
              className="font-bold"
              style={{
                background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Contato
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-pretty" style={{ color: "#e2e8f0" }}>
            Vamos conversar sobre como podemos ajudar sua empresa a crescer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: "#ffffff" }}>
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(234, 88, 12, 0.3) 100%)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <Phone className="h-6 w-6" style={{ color: "#fb923c" }} />
                  </div>
                  <div>
                    <p style={{ color: "#94a3b8" }}>Telefone</p>
                    <p className="font-semibold" style={{ color: "#ffffff" }}>
                      (11) 99999-9999
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(13, 148, 136, 0.3) 100%)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <Mail className="h-6 w-6" style={{ color: "#2dd4bf" }} />
                  </div>
                  <div>
                    <p style={{ color: "#94a3b8" }}>Email</p>
                    <p className="font-semibold" style={{ color: "#ffffff" }}>
                      contato@l21.net.br
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(126, 34, 206, 0.3) 100%)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <MapPin className="h-6 w-6" style={{ color: "#a855f7" }} />
                  </div>
                  <div>
                    <p style={{ color: "#94a3b8" }}>Localização</p>
                    <p className="font-semibold" style={{ color: "#ffffff" }}>
                      São Paulo, SP
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div
              className="rounded-2xl p-6 border backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(30, 27, 75, 0.7)",
                borderColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <h4 className="text-xl font-bold mb-4" style={{ color: "#ffffff" }}>
                Horário de Atendimento
              </h4>
              <div className="space-y-2">
                <p style={{ color: "#cbd5e1" }}>Segunda - Sexta: 9:00 - 18:00</p>
                <p style={{ color: "#cbd5e1" }}>Sábado: 9:00 - 12:00</p>
                <p style={{ color: "#cbd5e1" }}>Domingo: Fechado</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="rounded-2xl p-8 border backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(30, 27, 75, 0.7)",
              borderColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#ffffff" }}>
              Envie uma Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Seu Nome"
                  value={formData.name}
                  onChange={handleChange}
                  className="border text-white placeholder:text-gray-400 focus:border-orange-400 transition-colors"
                  style={{
                    backgroundColor: "rgba(51, 65, 85, 0.6)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    color: "#ffffff",
                  }}
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Seu Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border text-white placeholder:text-gray-400 focus:border-orange-400 transition-colors"
                  style={{
                    backgroundColor: "rgba(51, 65, 85, 0.6)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    color: "#ffffff",
                  }}
                  required
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Sua Mensagem"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="border text-white placeholder:text-gray-400 focus:border-orange-400 transition-colors resize-none"
                  style={{
                    backgroundColor: "rgba(51, 65, 85, 0.6)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    color: "#ffffff",
                  }}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full font-semibold py-3 transform hover:scale-105 transition-all duration-300 border-0"
                style={{
                  background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                  color: "#ffffff",
                }}
              >
                Enviar Mensagem
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
