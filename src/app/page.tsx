import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import StickerCard from "@/components/StickerCard"
import DoodleButton from "@/components/DoodleButton"
import CookieConsent from "@/components/CookieConsent"
import { ArrowRight, Brain, IdCard, MessageCircle, Database, Zap, Shield, Cpu, Globe as GlobeIcon, Lock, Code, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "ArthaChain — The Next-Gen AI, DID & SocialFi Blockchain | Fully On-Chain, Quantum Secure",
  description: "ArthaChain is a decentralized Layer 1 blockchain combining AI, SocialFi, and DID with an on-chain database (SVDB). Built with Rust, powered by SVCP & Quantum SVBFT, delivering 100,000+ TPS and future-ready quantum resistance.",
  keywords: "AI blockchain, decentralized AI, on-chain database, DID blockchain, SocialFi platform, quantum resistant blockchain, Indian blockchain, Layer 1 blockchain, Rust blockchain, ArthaChain, SVDB",
  openGraph: {
    title: "ArthaChain — The Next-Gen AI, DID & SocialFi Blockchain",
    description: "Built with Rust, powered by SVCP & Quantum SVBFT, delivering 100,000+ TPS and future-ready quantum resistance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArthaChain — The Next-Gen AI, DID & SocialFi Blockchain",
    description: "Built with Rust, powered by SVCP & Quantum SVBFT, delivering 100,000+ TPS and future-ready quantum resistance.",
  }
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* WHO SECTION - Hero with DIIGOO Background */}
        <section className="relative py-20 lg:py-32 bg-white border-b-[3px] border-black overflow-hidden">
          {/* Background Doodle Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 border-[3px] border-black rounded-full" />
            <div className="absolute top-20 right-20 w-24 h-24 border-[3px] border-black" />
            <div className="absolute bottom-20 left-1/4 w-16 h-16 border-[3px] border-black rotate-45" />
            <div className="absolute top-1/3 right-1/3 w-20 h-20 border-[3px] border-black rounded-full" />
            <div className="absolute bottom-10 right-10 w-28 h-28 border-[3px] border-black rotate-12" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-3 bg-[#450693] text-white border-[3px] border-black shadow-[4px_4px_0px_#000] mb-8 text-sm font-bold uppercase">
                🇮🇳 Made in India. Built for the World.
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                ArthaChain
              </h1>
              
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#450693]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                A Blockchain Developed by DIIGOO Tech Private Limited
              </p>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-700 font-semibold">
                from India to the World of the Future
              </p>
              
              <div className="inline-block px-6 py-3 bg-[#ffc400] border-[3px] border-black shadow-[4px_4px_0px_#000] mb-12">
                <p className="text-lg font-bold uppercase tracking-wider">
                  Decentralised Indian Innovation for Global Open Opportunities (DIIGOO)
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 mb-12">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                ArthaChain is a next-generation blockchain ecosystem born from Indian innovation and built for a global decentralized future. Developed by DIIGOO Tech Private Limited, it represents a bold vision — combining meaning, power, and code to redefine how intelligence, identity, and social interaction live on the blockchain.
              </p>
              
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-semibold">
                We believe technology should carry meaning, unlock power, and be written in code that shapes the future.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DoodleButton variant="primary" size="lg" href="/developers">
                🛠️ Build on ArthaChain
              </DoodleButton>
              <DoodleButton variant="outline" size="lg" href="/docs">
                🔍 Explore Docs
              </DoodleButton>
              <DoodleButton variant="secondary" size="lg" href="/community">
                💬 Join Community
              </DoodleButton>
            </div>
          </div>
        </section>

        {/* WHAT SECTION - Next Generation Technology */}
        <section className="py-20 bg-[#f5f5f5] border-b-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                The Next Generation of Blockchain Technology
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                ArthaChain is a Layer 1 blockchain platform that merges AI, Decentralized Identity (DID), and SocialFi into a unified on-chain ecosystem. Powered by SVCP consensus and Quantum SVBFT, it achieves ultra-fast scalability, real-time AI processing, and quantum-resistant security — all built in Rust for unmatched performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <StickerCard color="purple">
                <div className="h-16 w-16 bg-[#450693] border-[3px] border-black flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  🧠 D-AI
                </h3>
                <p className="text-gray-700 text-lg">
                  Run AI models directly on-chain — no external servers.
                </p>
              </StickerCard>

              <StickerCard color="bright">
                <div className="h-16 w-16 bg-[#8c00ff] border-[3px] border-black flex items-center justify-center mb-6">
                  <IdCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  🪪 DID Integration
                </h3>
                <p className="text-gray-700 text-lg">
                  Verifiable identity for humans, apps, and AIs.
                </p>
              </StickerCard>

              <StickerCard color="pink">
                <div className="h-16 w-16 bg-[#ff3f7f] border-[3px] border-black flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  💬 SocialFi
                </h3>
                <p className="text-gray-700 text-lg">
                  Transparent, reward-based social layer for creators.
                </p>
              </StickerCard>

              <StickerCard color="yellow">
                <div className="h-16 w-16 bg-[#ffc400] border-[3px] border-black flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  💾 SVDB
                </h3>
                <p className="text-gray-700 text-lg">
                  World's first AI-ready, on-chain database — fast, affordable, secure.
                </p>
              </StickerCard>
            </div>
          </div>
        </section>

        {/* HOW SECTION - Reimagining Blockchain Core */}
        <section className="py-20 bg-white border-b-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                How ArthaChain Reimagines the Blockchain Core
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Most Layer 1 blockchains struggle to balance speed, security, and scalability. ArthaChain breaks that compromise by redesigning the entire base layer with intelligence and identity at its core.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <StickerCard>
                <div className="h-12 w-12 bg-[#450693] border-[3px] border-black flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  ⚡ SVCP Consensus
                </h3>
                <p className="text-gray-700">
                  100K+ TPS, scaling to 22.6M TPS via AI-driven sharding.
                </p>
              </StickerCard>

              <StickerCard>
                <div className="h-12 w-12 bg-[#8c00ff] border-[3px] border-black flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  🔐 Quantum SVBFT
                </h3>
                <p className="text-gray-700">
                  Future-proof security with post-quantum cryptography.
                </p>
              </StickerCard>

              <StickerCard>
                <div className="h-12 w-12 bg-[#ff3f7f] border-[3px] border-black flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  🧠 AI Optimization Engine
                </h3>
                <p className="text-gray-700">
                  Real-time fraud detection and load balancing.
                </p>
              </StickerCard>

              <StickerCard>
                <div className="h-12 w-12 bg-[#ffc400] border-[3px] border-black flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  💾 SVDB
                </h3>
                <p className="text-gray-700">
                  Persistent, queryable, cost-efficient on-chain data layer.
                </p>
              </StickerCard>

              <StickerCard>
                <div className="h-12 w-12 bg-[#450693] border-[3px] border-black flex items-center justify-center mb-4">
                  <GlobeIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  🌐 Interoperability Bridges
                </h3>
                <p className="text-gray-700">
                  Native multi-chain support for Ethereum, Bitcoin, Cosmos, and Polkadot.
                </p>
              </StickerCard>
            </div>

            {/* Comparison Table */}
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                ArthaChain vs Traditional Layer 1
              </h3>
              <div className="border-[3px] border-black shadow-[8px_8px_0px_#000] bg-white overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-[3px] border-black bg-[#450693] text-white">
                        <th className="px-6 py-4 text-left font-bold text-lg">Feature</th>
                        <th className="px-6 py-4 text-left font-bold text-lg border-l-[3px] border-black">Traditional Layer 1</th>
                        <th className="px-6 py-4 text-left font-bold text-lg border-l-[3px] border-black bg-[#8c00ff]">ArthaChain</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-800">
                      <tr className="border-b-[3px] border-black">
                        <td className="px-6 py-4 font-semibold">Data Storage</td>
                        <td className="px-6 py-4 border-l-[3px] border-black">
                          <div className="flex items-center gap-2">
                            <XCircle className="w-5 h-5 text-[#ff3f7f]" />
                            Off-chain / External DB
                          </div>
                        </td>
                        <td className="px-6 py-4 border-l-[3px] border-black bg-[#f5f5f5]">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-[#450693]" />
                            Fully On-chain (SVDB)
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b-[3px] border-black">
                        <td className="px-6 py-4 font-semibold">AI Integration</td>
                        <td className="px-6 py-4 border-l-[3px] border-black">
                          <div className="flex items-center gap-2">
                            <XCircle className="w-5 h-5 text-[#ff3f7f]" />
                            None / API-based
                          </div>
                        </td>
                        <td className="px-6 py-4 border-l-[3px] border-black bg-[#f5f5f5]">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-[#450693]" />
                            Native D-AI Layer
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b-[3px] border-black">
                        <td className="px-6 py-4 font-semibold">Identity</td>
                        <td className="px-6 py-4 border-l-[3px] border-black">
                          <div className="flex items-center gap-2">
                            <XCircle className="w-5 h-5 text-[#ff3f7f]" />
                            Wallet-based
                          </div>
                        </td>
                        <td className="px-6 py-4 border-l-[3px] border-black bg-[#f5f5f5]">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-[#450693]" />
                            DID for Humans + AI
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b-[3px] border-black">
                        <td className="px-6 py-4 font-semibold">Consensus</td>
                        <td className="px-6 py-4 border-l-[3px] border-black">
                          <div className="flex items-center gap-2">
                            <XCircle className="w-5 h-5 text-[#ff3f7f]" />
                            BFT / PoS
                          </div>
                        </td>
                        <td className="px-6 py-4 border-l-[3px] border-black bg-[#f5f5f5]">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-[#450693]" />
                            SVCP + Quantum SVBFT
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b-[3px] border-black">
                        <td className="px-6 py-4 font-semibold">Scalability</td>
                        <td className="px-6 py-4 border-l-[3px] border-black">
                          <div className="flex items-center gap-2">
                            <XCircle className="w-5 h-5 text-[#ff3f7f]" />
                            Block-limited
                          </div>
                        </td>
                        <td className="px-6 py-4 border-l-[3px] border-black bg-[#f5f5f5]">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-[#450693]" />
                            DAG + AI-driven Sharding
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold">Interoperability</td>
                        <td className="px-6 py-4 border-l-[3px] border-black">
                          <div className="flex items-center gap-2">
                            <XCircle className="w-5 h-5 text-[#ff3f7f]" />
                            Optional Bridges
                          </div>
                        </td>
                        <td className="px-6 py-4 border-l-[3px] border-black bg-[#f5f5f5]">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-[#450693]" />
                            Native Multi-Chain Protocols
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY SECTION - Why ArthaChain Matters */}
        <section className="py-20 bg-[#f5f5f5] border-b-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Why ArthaChain Matters — Even Before Mainnet
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Every established blockchain once started as an experiment. ArthaChain's difference is that it doesn't just replicate — it evolves. By combining AI, SocialFi, and Decentralized Identity, it creates a digital infrastructure for the post-Web3 world — the Age of Intelligent Decentralization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
              <StickerCard color="purple">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#450693] border-[3px] border-black flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">🧠 Built for the Next Era</h3>
                    <p className="text-gray-700">AI-native from day one</p>
                  </div>
                </div>
              </StickerCard>

              <StickerCard color="bright">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8c00ff] border-[3px] border-black flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">🔐 Quantum-Resistant Architecture</h3>
                    <p className="text-gray-700">Future-proof security</p>
                  </div>
                </div>
              </StickerCard>

              <StickerCard color="pink">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ff3f7f] border-[3px] border-black flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">💾 Fully On-Chain Stack</h3>
                    <p className="text-gray-700">No dependencies</p>
                  </div>
                </div>
              </StickerCard>

              <StickerCard color="yellow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ffc400] border-[3px] border-black flex items-center justify-center flex-shrink-0">
                    <GlobeIcon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">🌏 Inclusive & Scalable</h3>
                    <p className="text-gray-700">Open-source, globally scalable</p>
                  </div>
                </div>
              </StickerCard>

              <StickerCard color="purple">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#450693] border-[3px] border-black flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🇮🇳</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Made in India. Built for the World.</h3>
                    <p className="text-gray-700">Global innovation, Indian roots</p>
                  </div>
                </div>
              </StickerCard>
            </div>
          </div>
        </section>

        {/* CTA Section - Start Building the Future */}
        <section className="py-20 bg-gradient-to-br from-[#450693] to-[#8c00ff] border-t-[3px] border-black relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #450693 0%, #8c00ff 100%)' }}>
          {/* Doodle decorations */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 border-[3px] border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-40 h-40 border-[3px] border-white" />
            <div className="absolute top-1/2 left-1/4 w-24 h-24 border-[3px] border-white rotate-45" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              🌐 Start Building the Future on ArthaChain
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              Join the revolution in decentralized AI, identity, and social networks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DoodleButton variant="secondary" size="lg" href="/developers">
                🛠️ Build on ArthaChain
              </DoodleButton>
              <DoodleButton variant="outline" size="lg" href="/docs">
                🔍 Explore Docs
              </DoodleButton>
              <DoodleButton variant="accent" size="lg" href="/community">
                💬 Join Community
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