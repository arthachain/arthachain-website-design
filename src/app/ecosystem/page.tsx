"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import StickerCard from "@/components/StickerCard"
import { useState } from "react"
import { ExternalLink, Filter } from "lucide-react"

const projects = [
  {
    name: "DeFiSwap",
    category: "DeFi",
    description: "Decentralized exchange with lightning-fast swaps and minimal fees",
    color: "purple" as const,
    link: "https://defiswap.example.com",
  },
  {
    name: "ArthaLend",
    category: "DeFi",
    description: "Peer-to-peer lending platform with AI-powered risk assessment",
    color: "bright" as const,
    link: "https://arthalend.example.com",
  },
  {
    name: "NFT Marketplace",
    category: "NFT",
    description: "Trade NFTs with AI-powered similarity search and recommendations",
    color: "pink" as const,
    link: "https://nftmarket.example.com",
  },
  {
    name: "MetaWorlds",
    category: "Gaming",
    description: "Immersive metaverse with on-chain AI NPCs and dynamic worlds",
    color: "yellow" as const,
    link: "https://metaworlds.example.com",
  },
  {
    name: "SocialChain",
    category: "Social",
    description: "Decentralized social network with content recommendations",
    color: "purple" as const,
    link: "https://socialchain.example.com",
  },
  {
    name: "HealthVault",
    category: "Healthcare",
    description: "Secure medical records with privacy-preserving AI diagnostics",
    color: "bright" as const,
    link: "https://healthvault.example.com",
  },
  {
    name: "SupplyTrace",
    category: "Enterprise",
    description: "Supply chain tracking with AI-powered fraud detection",
    color: "pink" as const,
    link: "https://supplytrace.example.com",
  },
  {
    name: "ArthaOracle",
    category: "Infrastructure",
    description: "Decentralized oracle network with AI-verified data feeds",
    color: "yellow" as const,
    link: "https://oracle.example.com",
  },
  {
    name: "GameFi Arena",
    category: "Gaming",
    description: "Play-to-earn gaming platform with skill-based matchmaking",
    color: "purple" as const,
    link: "https://gamefi.example.com",
  },
  {
    name: "IdentityDAO",
    category: "Identity",
    description: "Self-sovereign identity with biometric verification",
    color: "bright" as const,
    link: "https://identity.example.com",
  },
  {
    name: "DataMarket",
    category: "Data",
    description: "Decentralized data marketplace with privacy-preserving queries",
    color: "pink" as const,
    link: "https://datamarket.example.com",
  },
  {
    name: "ArthaWallet",
    category: "Wallet",
    description: "Non-custodial wallet with AI-powered transaction analysis",
    color: "yellow" as const,
    link: "https://wallet.example.com",
  },
]

const categories = ["All", "DeFi", "NFT", "Gaming", "Social", "Healthcare", "Enterprise", "Infrastructure", "Identity", "Data", "Wallet"]

export default function EcosystemPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <>
      <Navigation />
      <main>
        <HeroSection
          title="ArthaChain Ecosystem"
          subtitle="Discover innovative projects building on ArthaChain"
          pattern="grid"
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5" />
                <h3 className="text-lg font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Filter by Category
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 border-[3px] border-black font-bold uppercase tracking-wider text-sm transition-all ${
                      activeCategory === category
                        ? "bg-[#450693] text-white shadow-[4px_4px_0px_#000]"
                        : "bg-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#000]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <StickerCard key={project.name} color={project.color}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {project.name}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-2 bg-white border-[2px] border-black hover:bg-gray-100 transition-colors"
                      aria-label="Visit project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div className={`inline-block px-2 py-1 text-xs font-bold uppercase tracking-wider border-[2px] border-black mb-3 ${
                    project.color === "yellow" ? "bg-black text-white" : "bg-white text-black"
                  }`}>
                    {project.category}
                  </div>
                  <p className={`text-sm ${project.color === "yellow" ? "text-black/80" : "text-white/90"}`}>
                    {project.description}
                  </p>
                </StickerCard>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No projects found in this category</p>
              </div>
            )}
          </div>
        </section>

        {/* Build on ArthaChain CTA */}
        <section className="py-20 bg-[#8c00ff] text-white border-t-[3px] border-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Build Your Project on ArthaChain
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our growing ecosystem and get featured here
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/developers"
                className="inline-block px-8 py-4 bg-white text-black border-[3px] border-white shadow-[4px_4px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#fff] transition-all font-bold uppercase tracking-wider"
              >
                Start Building
              </a>
              <a
                href="/grants"
                className="inline-block px-8 py-4 bg-[#ffc400] text-black border-[3px] border-white shadow-[4px_4px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#fff] transition-all font-bold uppercase tracking-wider"
              >
                Apply for Grants
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
