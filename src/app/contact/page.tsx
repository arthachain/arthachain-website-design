"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import StickerCard from "@/components/StickerCard"
import DoodleButton from "@/components/DoodleButton"
import { Mail, MessageCircle, Send, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <>
      <Navigation />
      <main>
        <HeroSection
          title="Get in Touch"
          subtitle="We'd love to hear from you"
          pattern="lines"
        />

        {/* Contact Options */}
        <section className="py-20 bg-white border-b-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <StickerCard color="purple">
                <Mail className="w-10 h-10 text-white mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <a href="mailto:hello@arthachain.io" className="text-white/90 hover:text-white text-sm">
                  hello@arthachain.io
                </a>
              </StickerCard>

              <StickerCard color="bright">
                <MessageCircle className="w-10 h-10 text-white mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Discord</h3>
                <a href="https://discord.gg/arthachain" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white text-sm">
                  Join our community
                </a>
              </StickerCard>

              <StickerCard color="pink">
                <Send className="w-10 h-10 text-white mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Telegram</h3>
                <a href="https://t.me/arthachain" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white text-sm">
                  Chat with us
                </a>
              </StickerCard>

              <StickerCard color="yellow">
                <Phone className="w-10 h-10 text-black mb-3" />
                <h3 className="text-xl font-bold text-black mb-2">Phone</h3>
                <a href="tel:+1234567890" className="text-black/80 hover:text-black text-sm">
                  +1 (234) 567-890
                </a>
              </StickerCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold mb-2 uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-[3px] border-black focus:outline-none focus:ring-2 focus:ring-[#8c00ff]"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold mb-2 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-[3px] border-black focus:outline-none focus:ring-2 focus:ring-[#8c00ff]"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold mb-2 uppercase tracking-wider">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border-[3px] border-black focus:outline-none focus:ring-2 focus:ring-[#8c00ff]"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold mb-2 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border-[3px] border-black focus:outline-none focus:ring-2 focus:ring-[#8c00ff] resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <DoodleButton type="submit" variant="primary" size="lg">
                    Send Message
                  </DoodleButton>
                </form>
              </div>

              {/* Office Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Our Offices
                </h2>
                <div className="space-y-6">
                  <StickerCard>
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="w-6 h-6 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-2">Headquarters</h3>
                        <p className="text-gray-700">
                          123 Blockchain Avenue<br />
                          San Francisco, CA 94105<br />
                          United States
                        </p>
                      </div>
                    </div>
                  </StickerCard>

                  <StickerCard>
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="w-6 h-6 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-2">Europe Office</h3>
                        <p className="text-gray-700">
                          456 Tech Street<br />
                          London E1 6AN<br />
                          United Kingdom
                        </p>
                      </div>
                    </div>
                  </StickerCard>

                  <StickerCard>
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="w-6 h-6 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-2">Asia Office</h3>
                        <p className="text-gray-700">
                          789 Innovation Road<br />
                          Singapore 018989<br />
                          Singapore
                        </p>
                      </div>
                    </div>
                  </StickerCard>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#f5f5f5] border-t-[3px] border-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How do I get started building on ArthaChain?",
                  a: "Check out our Developer Documentation for quick start guides, SDKs, and tutorials.",
                },
                {
                  q: "What support do you offer for developers?",
                  a: "We offer Discord support, documentation, grants program, and technical office hours.",
                },
                {
                  q: "How can I become a validator?",
                  a: "Visit our Validators page for requirements, setup guides, and application process.",
                },
                {
                  q: "Do you offer partnership opportunities?",
                  a: "Yes! Contact us at partnerships@arthachain.io to discuss collaboration opportunities.",
                },
              ].map((faq, i) => (
                <div key={i} className="border-[3px] border-black bg-white p-6">
                  <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Inquiries */}
        <section className="py-20 bg-[#ff3f7f] text-white border-t-[3px] border-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Business Inquiries
            </h2>
            <p className="text-xl text-white/90 mb-8">
              For partnerships, press, or business development inquiries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:partnerships@arthachain.io"
                className="inline-block px-8 py-4 bg-white text-black border-[3px] border-white shadow-[4px_4px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#fff] transition-all font-bold uppercase tracking-wider"
              >
                Partnerships
              </a>
              <a
                href="mailto:press@arthachain.io"
                className="inline-block px-8 py-4 bg-[#ffc400] text-black border-[3px] border-white shadow-[4px_4px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#fff] transition-all font-bold uppercase tracking-wider"
              >
                Press
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
