import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import StickerCard from "@/components/StickerCard"
import DoodleButton from "@/components/DoodleButton"
import CookieConsent from "@/components/CookieConsent"
import { ArrowRight, Zap, Shield, Cpu, TrendingUp, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <HeroSection
          title="The AI-Native Blockchain for Tomorrow"
          subtitle="Build faster, scale infinitely, and innovate freely with ArthaChain's revolutionary SVDB architecture."
          pattern="dots"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <DoodleButton variant="primary" size="lg" href="/developers">
              Start Building
            </DoodleButton>
            <DoodleButton variant="outline" size="lg" href="/technology">
              Learn More
            </DoodleButton>
          </div>
        </HeroSection>

        {/* Metrics Section */}
        <section className="py-20 bg-white border-b-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StickerCard color="purple" hover={false}>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50K+</div>
                  <div className="text-sm uppercase tracking-wider opacity-80">Transactions/Sec</div>
                </div>
              </StickerCard>
              <StickerCard color="bright" hover={false}>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">&lt;1s</div>
                  <div className="text-sm uppercase tracking-wider opacity-80">Finality Time</div>
                </div>
              </StickerCard>
              <StickerCard color="pink" hover={false}>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">$0.001</div>
                  <div className="text-sm uppercase tracking-wider opacity-80">Avg Gas Fee</div>
                </div>
              </StickerCard>
              <StickerCard color="yellow" hover={false}>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-sm uppercase tracking-wider opacity-80">Uptime</div>
                </div>
              </StickerCard>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Built for the Future
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                ArthaChain combines cutting-edge technology with developer-friendly tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StickerCard>
                <div className="h-12 w-12 bg-[#450693] border-[3px] border-black flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Lightning Fast
                </h3>
                <p className="text-gray-700">
                  Process 50,000+ transactions per second with sub-second finality times.
                </p>
              </StickerCard>

              <StickerCard>
                <div className="h-12 w-12 bg-[#8c00ff] border-[3px] border-black flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Ultra Secure
                </h3>
                <p className="text-gray-700">
                  Advanced cryptography and proven consensus mechanisms keep your assets safe.
                </p>
              </StickerCard>

              <StickerCard>
                <div className="h-12 w-12 bg-[#ff3f7f] border-[3px] border-black flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  AI-Native
                </h3>
                <p className="text-gray-700">
                  First blockchain with native AI support through our revolutionary SVDB system.
                </p>
              </StickerCard>

              <StickerCard>
                <div className="h-12 w-12 bg-[#ffc400] border-[3px] border-black flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Infinitely Scalable
                </h3>
                <p className="text-gray-700">
                  Horizontal scaling ensures performance never degrades as the network grows.
                </p>
              </StickerCard>

              <StickerCard>
                <div className="h-12 w-12 bg-[#450693] border-[3px] border-black flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Developer First
                </h3>
                <p className="text-gray-700">
                  Comprehensive SDKs, documentation, and tools to build with ease.
                </p>
              </StickerCard>

              <StickerCard>
                <div className="h-12 w-12 bg-[#8c00ff] border-[3px] border-black flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Truly Decentralized
                </h3>
                <p className="text-gray-700">
                  No central authority - powered by thousands of validators worldwide.
                </p>
              </StickerCard>
            </div>
          </div>
        </section>

        {/* SVDB Spotlight */}
        <section className="py-20 bg-white border-t-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-[#8c00ff] text-white border-[3px] border-black shadow-[4px_4px_0px_#000] mb-6 text-sm font-bold uppercase">
                  Innovation Spotlight
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Meet SVDB: The Future of Blockchain AI
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  State Vector Database (SVDB) is our groundbreaking innovation that enables native AI computation on-chain without compromising decentralization.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#ffc400] border-[2px] border-black flex-shrink-0 mt-1 mr-3" />
                    <span className="text-gray-700">Store and query vector embeddings directly on-chain</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#ff3f7f] border-[2px] border-black flex-shrink-0 mt-1 mr-3" />
                    <span className="text-gray-700">Run AI models without leaving the blockchain</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#8c00ff] border-[2px] border-black flex-shrink-0 mt-1 mr-3" />
                    <span className="text-gray-700">Seamless integration with existing smart contracts</span>
                  </li>
                </ul>
                <Link href="/ai">
                  <DoodleButton variant="secondary">
                    Explore SVDB <ArrowRight className="inline w-5 h-5 ml-2" />
                  </DoodleButton>
                </Link>
              </div>

              <div className="relative">
                <div className="border-[3px] border-black shadow-[8px_8px_0px_#000] bg-[#450693] p-8 relative">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-[#ffc400] border-[3px] border-black rotate-12" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#ff3f7f] border-[3px] border-black -rotate-6" />
                  <div className="space-y-4 text-white relative z-10">
                    <div className="font-mono text-sm">
                      <span className="text-[#ffc400]">// Initialize SVDB</span>
                    </div>
                    <div className="font-mono text-sm">
                      <span className="text-[#8c00ff]">const</span> svdb = <span className="text-[#ff3f7f]">new</span> SVDB()
                    </div>
                    <div className="font-mono text-sm mt-4">
                      <span className="text-[#ffc400]">// Store vector</span>
                    </div>
                    <div className="font-mono text-sm">
                      <span className="text-[#8c00ff]">await</span> svdb.store(embedding)
                    </div>
                    <div className="font-mono text-sm mt-4">
                      <span className="text-[#ffc400]">// Query similar vectors</span>
                    </div>
                    <div className="font-mono text-sm">
                      <span className="text-[#8c00ff]">const</span> results = <span className="text-[#8c00ff]">await</span> svdb.query(query)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#ff3f7f] border-t-[3px] border-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of developers building on ArthaChain today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DoodleButton variant="outline" size="lg" href="/developers">
                Get Started
              </DoodleButton>
              <DoodleButton variant="secondary" size="lg" href="/grants">
                Apply for Grants
              </DoodleButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}