import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import StickerCard from "@/components/StickerCard"
import DoodleButton from "@/components/DoodleButton"
import CookieConsent from "@/components/CookieConsent"
import { ArrowRight, Brain, IdCard, MessageCircle, Database, Zap, Shield, Cpu, Globe as GlobeIcon, Lock, Code, CheckCircle, XCircle, Users, Building2, Palette, FlaskConical, MapPin, Calendar, Wrench, FileCode, Search, Github, MessageSquare, Twitter, BookOpen } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "ArthaChain — The Next-Gen AI, DID & SocialFi Blockchain | Fully On-Chain, Quantum Secure",
  description: "ArthaChain is a decentralized Layer 1 blockchain that merges AI, SocialFi, and DID with a fully on-chain database architecture (SVDB). Built with Rust, powered by SVCP and Quantum SVBFT, delivering 100,000+ TPS and future-ready quantum resistance.",
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
        {/* HERO SECTION */}
        <section className="relative py-20 lg:py-32 bg-white border-b-[3px] border-black overflow-hidden">
          {/* Background Doodle Pattern - Neural network style */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            {/* Data flow circles */}
            <div className="absolute top-10 left-10 w-32 h-32 border-[3px] border-black rounded-full" />
            <div className="absolute top-20 right-20 w-24 h-24 border-[3px] border-black rounded-full" />
            <div className="absolute bottom-20 left-1/4 w-16 h-16 border-[3px] border-black rounded-full" />
            <div className="absolute top-1/3 right-1/3 w-20 h-20 border-[3px] border-black rounded-full" />
            <div className="absolute bottom-10 right-10 w-28 h-28 border-[3px] border-black rounded-full" />
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <line x1="10%" y1="20%" x2="70%" y2="40%" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="30%" y1="60%" x2="80%" y2="30%" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="60%" y1="80%" x2="20%" y2="50%" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-3 bg-[#450693] text-white border-[3px] border-black shadow-[4px_4px_0px_#000] mb-8 text-sm font-bold uppercase">
                🇮🇳 Made in India. Built for the World.
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                On-Chain Intelligence. <br />Identity. Social. Reimagined.
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-[#450693] font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                ArthaChain is the next-generation Layer 1 blockchain that unites AI, SocialFi, and Decentralized Identity into one fully on-chain ecosystem.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
                Built for a future where intelligence and identity live natively on-chain — ArthaChain merges AI-native computation, verifiable digital identity, and social interaction into a single decentralized protocol.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DoodleButton variant="primary" size="lg" href="/developers">
                🛠️ Start Building
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

        {/* SECTION 1 — WHAT IS ARTHACHAIN */}
        <section className="py-20 bg-[#f5f5f5] border-b-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                The Future of Decentralization — AI, DID, and SocialFi on One Chain
              </h2>
              <div className="max-w-4xl mx-auto space-y-4">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                  ArthaChain is a Layer 1 blockchain built to power the next era of decentralized applications. It combines Decentralized AI (D-AI), Digital Identity (DID), and SocialFi within a single, unified infrastructure — all running completely on-chain.
                </p>
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-bold">
                  No external databases. No off-chain dependencies.<br />
                  Just pure, scalable, intelligent blockchain architecture.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <StickerCard color="purple">
                <div className="h-16 w-16 bg-[#450693] border-[3px] border-black flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  🧠 Decentralized AI (D-AI)
                </h3>
                <p className="text-gray-700 text-lg">
                  Run and train AI models directly on-chain without external servers.
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
                  Assign verifiable digital identities to people, apps, and even AIs.
                </p>
              </StickerCard>

              <StickerCard color="pink">
                <div className="h-16 w-16 bg-[#ff3f7f] border-[3px] border-black flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  💬 SocialFi Framework
                </h3>
                <p className="text-gray-700 text-lg">
                  Empower creators and communities with transparent, reward-based social interaction.
                </p>
              </StickerCard>

              <StickerCard color="yellow">
                <div className="h-16 w-16 bg-[#ffc400] border-[3px] border-black flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  💾 SVDB (Scalable Virtual Database)
                </h3>
                <p className="text-gray-700 text-lg">
                  A revolutionary on-chain data system that eliminates the need for off-chain storage.
                </p>
              </StickerCard>
            </div>
          </div>
        </section>

        {/* SECTION 2 — HOW ARTHACHAIN WORKS */}
        <section className="py-20 bg-white border-b-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Redefining Blockchain Architecture from the Core
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Most blockchains rely on off-chain computation and storage to achieve scale. ArthaChain takes a different route — reengineering the base layer to handle AI workloads, identity verification, and social transactions directly on-chain with unprecedented speed and efficiency.
              </p>
            </div>

            {/* Technology Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <StickerCard>
                <div className="h-12 w-12 bg-[#450693] border-[3px] border-black flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  ⚡ SVCP Consensus
                </h3>
                <p className="text-gray-700">
                  Delivers 100,000+ TPS, scaling up to 22.6 million TPS through AI-driven sharding and DAG parallelism.
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
                  Post-quantum ready with Dilithium and Merkle proofs to safeguard against future cryptographic threats.
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
                  Real-time neural system for fraud detection, network scaling, and adaptive load balancing.
                </p>
              </StickerCard>

              <StickerCard>
                <div className="h-12 w-12 bg-[#ffc400] border-[3px] border-black flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  💾 SVDB (On-Chain Data Layer)
                </h3>
                <p className="text-gray-700">
                  Persistent, queryable, and cost-efficient — built for the AI age.
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
                  Natively connects with Ethereum, Bitcoin, Cosmos, and Polkadot ecosystems for seamless cross-chain interaction.
                </p>
              </StickerCard>
            </div>

            {/* Comparison Table */}
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                How It Differs
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
                        <td className="px-6 py-4 border-l-[3px] border-black">Off-chain / external DB</td>
                        <td className="px-6 py-4 border-l-[3px] border-black bg-[#f5f5f5] font-semibold">Fully On-chain (SVDB)</td>
                      </tr>
                      <tr className="border-b-[3px] border-black">
                        <td className="px-6 py-4 font-semibold">AI Integration</td>
                        <td className="px-6 py-4 border-l-[3px] border-black">None / API-based</td>
                        <td className="px-6 py-4 border-l-[3px] border-black bg-[#f5f5f5] font-semibold">Native D-AI Layer</td>
                      </tr>
                      <tr className="border-b-[3px] border-black">
                        <td className="px-6 py-4 font-semibold">Identity</td>
                        <td className="px-6 py-4 border-l-[3px] border-black">Wallet-based</td>
                        <td className="px-6 py-4 border-l-[3px] border-black bg-[#f5f5f5] font-semibold">Built-in DID for Humans & AI</td>
                      </tr>
                      <tr className="border-b-[3px] border-black">
                        <td className="px-6 py-4 font-semibold">Consensus</td>
                        <td className="px-6 py-4 border-l-[3px] border-black">PoS / BFT</td>
                        <td className="px-6 py-4 border-l-[3px] border-black bg-[#f5f5f5] font-semibold">SVCP + Quantum SVBFT</td>
                      </tr>
                      <tr className="border-b-[3px] border-black">
                        <td className="px-6 py-4 font-semibold">Scalability</td>
                        <td className="px-6 py-4 border-l-[3px] border-black">Limited by block size</td>
                        <td className="px-6 py-4 border-l-[3px] border-black bg-[#f5f5f5] font-semibold">DAG + AI-Driven Sharding</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold">Interoperability</td>
                        <td className="px-6 py-4 border-l-[3px] border-black">Optional bridges</td>
                        <td className="px-6 py-4 border-l-[3px] border-black bg-[#f5f5f5] font-semibold">Native Multi-Chain Protocols</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — WHY ARTHACHAIN */}
        <section className="py-20 bg-[#f5f5f5] border-b-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Why ArthaChain Matters — A New Age of Intelligent Decentralization
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Every blockchain was once an experiment — ArthaChain is an evolution. It redefines decentralization for the world after Web3: one where intelligence, identity, and interaction coexist seamlessly within the blockchain layer itself.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <StickerCard color="purple">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#450693] border-[3px] border-black flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">🧠 Built for the AI Era</h3>
                    <p className="text-gray-700">Designed for AI-native dApps from day one.</p>
                  </div>
                </div>
              </StickerCard>

              <StickerCard color="bright">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8c00ff] border-[3px] border-black flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">🔐 Quantum-Resistant</h3>
                    <p className="text-gray-700">Security that looks beyond the next decade.</p>
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
                    <p className="text-gray-700">No central dependencies. No third-party APIs.</p>
                  </div>
                </div>
              </StickerCard>

              <StickerCard color="yellow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ffc400] border-[3px] border-black flex items-center justify-center flex-shrink-0">
                    <GlobeIcon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">🌏 Globally Scalable</h3>
                    <p className="text-gray-700">Open-source and built to scale without borders.</p>
                  </div>
                </div>
              </StickerCard>

              <StickerCard color="purple">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#450693] border-[3px] border-black flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🇮🇳</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">🇮🇳 Made in India. Built for the World.</h3>
                    <p className="text-gray-700">Indian innovation, global impact.</p>
                  </div>
                </div>
              </StickerCard>
            </div>
          </div>
        </section>

        {/* SECTION 4 — THE ECOSYSTEM */}
        <section className="py-20 bg-white border-b-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                The ArthaChain Ecosystem
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                A growing ecosystem of developers, creators, and innovators building the intelligent internet of tomorrow — powered by ArthaChain's decentralized infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <StickerCard color="purple">
                <div className="h-16 w-16 bg-[#450693] border-[3px] border-black flex items-center justify-center mb-6 mx-auto">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  🧑‍💻 Developers
                </h3>
                <p className="text-gray-700 text-center">
                  Build AI-native dApps using the Rust SDKs and APIs.
                </p>
              </StickerCard>

              <StickerCard color="bright">
                <div className="h-16 w-16 bg-[#8c00ff] border-[3px] border-black flex items-center justify-center mb-6 mx-auto">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  🏗️ Enterprises
                </h3>
                <p className="text-gray-700 text-center">
                  Integrate decentralized identity and data management systems.
                </p>
              </StickerCard>

              <StickerCard color="pink">
                <div className="h-16 w-16 bg-[#ff3f7f] border-[3px] border-black flex items-center justify-center mb-6 mx-auto">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  🎨 Creators
                </h3>
                <p className="text-gray-700 text-center">
                  Use SocialFi to engage and monetize communities transparently.
                </p>
              </StickerCard>

              <StickerCard color="yellow">
                <div className="h-16 w-16 bg-[#ffc400] border-[3px] border-black flex items-center justify-center mb-6 mx-auto">
                  <FlaskConical className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  🌐 Researchers & AI Labs
                </h3>
                <p className="text-gray-700 text-center">
                  Experiment with on-chain model training and inference.
                </p>
              </StickerCard>
            </div>

            <div className="text-center mt-12">
              <DoodleButton variant="primary" size="lg" href="/ecosystem">
                Explore the Ecosystem
              </DoodleButton>
            </div>
          </div>
        </section>

        {/* SECTION 5 — ROADMAP PREVIEW */}
        <section className="py-20 bg-[#f5f5f5] border-b-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                From Vision to Mainnet — The Journey of ArthaChain
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <StickerCard color="purple">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#450693] border-[3px] border-black flex items-center justify-center flex-shrink-0 font-bold text-white">
                    1
                  </div>
                  <h3 className="text-lg font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Phase 1</h3>
                </div>
                <p className="text-gray-700">
                  Testnet & Developer Network Launch
                </p>
              </StickerCard>

              <StickerCard color="bright">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8c00ff] border-[3px] border-black flex items-center justify-center flex-shrink-0 font-bold text-white">
                    2
                  </div>
                  <h3 className="text-lg font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Phase 2</h3>
                </div>
                <p className="text-gray-700">
                  Mainnet Release + SDK Launch
                </p>
              </StickerCard>

              <StickerCard color="pink">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#ff3f7f] border-[3px] border-black flex items-center justify-center flex-shrink-0 font-bold text-white">
                    3
                  </div>
                  <h3 className="text-lg font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Phase 3</h3>
                </div>
                <p className="text-gray-700">
                  Ecosystem Expansion (AI & SocialFi dApps)
                </p>
              </StickerCard>

              <StickerCard color="yellow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#ffc400] border-[3px] border-black flex items-center justify-center flex-shrink-0 font-bold text-black">
                    4
                  </div>
                  <h3 className="text-lg font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Phase 4</h3>
                </div>
                <p className="text-gray-700">
                  Quantum Security Upgrade + Global Adoption
                </p>
              </StickerCard>
            </div>

            <div className="text-center">
              <DoodleButton variant="outline" size="lg" href="/roadmap">
                View Full Roadmap
              </DoodleButton>
            </div>
          </div>
        </section>

        {/* SECTION 6 — FOR DEVELOPERS */}
        <section className="py-20 bg-white border-b-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Everything You Need to Build Intelligent dApps
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                With Rust-based SDKs, comprehensive APIs, and powerful dev tools, ArthaChain enables developers to build decentralized, AI-driven, and socially connected applications effortlessly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              <StickerCard color="purple">
                <div className="h-12 w-12 bg-[#450693] border-[3px] border-black flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  ⚡ Local Testnet & API Gateway
                </h3>
                <p className="text-gray-700">
                  Test your dApps locally with full node simulation
                </p>
              </StickerCard>

              <StickerCard color="bright">
                <div className="h-12 w-12 bg-[#8c00ff] border-[3px] border-black flex items-center justify-center mb-4">
                  <FileCode className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  💡 Smart Contract SDKs
                </h3>
                <p className="text-gray-700">
                  Build with JavaScript, Rust, or Python
                </p>
              </StickerCard>

              <StickerCard color="pink">
                <div className="h-12 w-12 bg-[#ff3f7f] border-[3px] border-black flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  🔍 On-Chain Data Explorer (SVDB)
                </h3>
                <p className="text-gray-700">
                  Query and analyze on-chain data easily
                </p>
              </StickerCard>
            </div>

            <div className="text-center">
              <DoodleButton variant="primary" size="lg" href="/developers">
                🧩 Join Early Developer Network
              </DoodleButton>
            </div>
          </div>
        </section>

        {/* SECTION 7 — COMMUNITY & OPEN SOURCE */}
        <section className="py-20 bg-[#f5f5f5] border-b-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Open-Source by Design. Driven by Community.
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                ArthaChain thrives on collaboration — from developers writing code to creators shaping social layers, to communities driving decentralization.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <Link href="/community" className="block">
                <StickerCard color="purple" className="h-full transition-transform hover:scale-105">
                  <div className="h-16 w-16 bg-[#450693] border-[3px] border-black flex items-center justify-center mb-4 mx-auto">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    💬 Join Discord
                  </h3>
                </StickerCard>
              </Link>

              <a href="https://twitter.com/arthachain" target="_blank" rel="noopener noreferrer" className="block">
                <StickerCard color="bright" className="h-full transition-transform hover:scale-105">
                  <div className="h-16 w-16 bg-[#8c00ff] border-[3px] border-black flex items-center justify-center mb-4 mx-auto">
                    <Twitter className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    🐦 Follow on X
                  </h3>
                </StickerCard>
              </a>

              <Link href="/docs" className="block">
                <StickerCard color="pink" className="h-full transition-transform hover:scale-105">
                  <div className="h-16 w-16 bg-[#ff3f7f] border-[3px] border-black flex items-center justify-center mb-4 mx-auto">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    📚 Read the Docs
                  </h3>
                </StickerCard>
              </Link>

              <a href="https://github.com/arthachain" target="_blank" rel="noopener noreferrer" className="block">
                <StickerCard color="yellow" className="h-full transition-transform hover:scale-105">
                  <div className="h-16 w-16 bg-[#ffc400] border-[3px] border-black flex items-center justify-center mb-4 mx-auto">
                    <Github className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    🧑‍💻 Contribute on GitHub
                  </h3>
                </StickerCard>
              </a>
            </div>
          </div>
        </section>

        {/* FINAL CTA Section */}
        <section className="py-20 bg-[#450693] border-t-[3px] border-black relative overflow-hidden">
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