import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import StickerCard from "@/components/StickerCard"
import { CheckCircle2, Circle, Clock } from "lucide-react"

export const metadata = {
  title: "Roadmap | ArthaChain",
  description: "ArthaChain development roadmap and milestones",
}

const roadmapItems = [
  {
    quarter: "Q4 2023",
    status: "completed",
    title: "Foundation",
    items: [
      "Whitepaper published",
      "Core team assembled",
      "Initial funding secured",
      "Testnet v1 launched",
    ],
  },
  {
    quarter: "Q1 2024",
    status: "completed",
    title: "Mainnet Launch",
    items: [
      "Mainnet beta launched",
      "Validator program initiated",
      "Block explorer released",
      "Developer documentation v1",
    ],
  },
  {
    quarter: "Q2 2024",
    status: "completed",
    title: "SVDB Alpha",
    items: [
      "SVDB architecture designed",
      "Alpha implementation completed",
      "First AI dApps deployed",
      "Grants program launched",
    ],
  },
  {
    quarter: "Q3 2024",
    status: "in-progress",
    title: "Ecosystem Growth",
    items: [
      "SVDB mainnet integration",
      "50+ dApps in ecosystem",
      "Cross-chain bridges",
      "Mobile wallet launch",
    ],
  },
  {
    quarter: "Q4 2024",
    status: "planned",
    title: "Advanced Features",
    items: [
      "Zero-knowledge rollups",
      "Advanced SVDB queries",
      "Governance token launch",
      "DAO formation",
    ],
  },
  {
    quarter: "Q1 2025",
    status: "planned",
    title: "Enterprise Adoption",
    items: [
      "Enterprise SDK release",
      "Private chain support",
      "Institutional partnerships",
      "Compliance framework",
    ],
  },
  {
    quarter: "Q2 2025",
    status: "planned",
    title: "Global Expansion",
    items: [
      "Multi-language support",
      "Regional validators",
      "Developer conferences",
      "Mass market adoption",
    ],
  },
  {
    quarter: "Q3 2025",
    status: "planned",
    title: "Innovation Lab",
    items: [
      "AI model marketplace",
      "Quantum-resistant crypto",
      "Layer 2 scaling solutions",
      "Interoperability protocol",
    ],
  },
]

export default function RoadmapPage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection
          title="Development Roadmap"
          subtitle="Our journey to revolutionize blockchain technology"
          pattern="lines"
        />

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Our Milestones
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tracking our progress from inception to global adoption
              </p>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#450693]" />
                <span className="font-bold">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-[#8c00ff]" />
                <span className="font-bold">In Progress</span>
              </div>
              <div className="flex items-center gap-2">
                <Circle className="w-6 h-6 text-gray-400" />
                <span className="font-bold">Planned</span>
              </div>
            </div>

            {/* Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roadmapItems.map((item, index) => {
                const colors = {
                  completed: "purple" as const,
                  "in-progress": "bright" as const,
                  planned: "white" as const,
                }
                const color = colors[item.status as keyof typeof colors]

                const Icon = item.status === "completed" 
                  ? CheckCircle2 
                  : item.status === "in-progress" 
                  ? Clock 
                  : Circle

                return (
                  <StickerCard key={index} color={color}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-3 py-1 border-[2px] border-black text-sm font-bold uppercase tracking-wider ${
                        color === "white" ? "bg-black text-white" : "bg-white text-black"
                      }`}>
                        {item.quarter}
                      </div>
                      <Icon className={`w-6 h-6 ${color === "white" ? "text-gray-400" : "text-white"}`} />
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 ${color === "white" ? "text-black" : "text-white"}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {item.title}
                    </h3>
                    <ul className={`space-y-2 text-sm ${color === "white" ? "text-gray-700" : "text-white/90"}`}>
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  </StickerCard>
                )
              })}
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 bg-[#f5f5f5] border-t-[3px] border-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Long-Term Vision
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                ArthaChain aims to become the world's leading AI-native blockchain platform, 
                powering the next generation of decentralized applications with unmatched 
                performance, security, and developer experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StickerCard color="purple">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">2025</div>
                  <div className="text-white/90 text-sm">100K+ Daily Active Users</div>
                </div>
              </StickerCard>
              <StickerCard color="bright">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">2026</div>
                  <div className="text-white/90 text-sm">1000+ dApps in Ecosystem</div>
                </div>
              </StickerCard>
              <StickerCard color="pink">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">2027</div>
                  <div className="text-white/90 text-sm">Global Enterprise Adoption</div>
                </div>
              </StickerCard>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#ffc400] border-t-[3px] border-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Join Our Journey
            </h2>
            <p className="text-xl mb-8">
              Be part of the blockchain revolution and help shape the future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/developers"
                className="inline-block px-8 py-4 bg-[#450693] text-white border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all font-bold uppercase tracking-wider"
              >
                Start Building
              </a>
              <a
                href="/community"
                className="inline-block px-8 py-4 bg-white text-black border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all font-bold uppercase tracking-wider"
              >
                Join Community
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
