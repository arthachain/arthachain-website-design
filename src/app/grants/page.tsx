import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import StickerCard from "@/components/StickerCard"
import DoodleButton from "@/components/DoodleButton"
import { Coins, Rocket, Users, Code, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Grants Program | ArthaChain",
  description: "Funding opportunities for developers building on ArthaChain",
}

const grantTracks = [
  {
    name: "Infrastructure",
    amount: "$50K - $250K",
    color: "purple" as const,
    icon: Code,
    description: "Tools, libraries, and infrastructure for the ArthaChain ecosystem",
    examples: [
      "Development tools and SDKs",
      "Block explorers and analytics",
      "Wallet integrations",
      "Oracle implementations",
    ],
  },
  {
    name: "DeFi Applications",
    amount: "$25K - $150K",
    color: "bright" as const,
    icon: Coins,
    description: "Decentralized finance protocols and applications",
    examples: [
      "DEXs and AMMs",
      "Lending and borrowing",
      "Yield farming protocols",
      "Derivatives platforms",
    ],
  },
  {
    name: "AI & SVDB",
    amount: "$75K - $300K",
    color: "pink" as const,
    icon: Rocket,
    description: "Innovative applications leveraging SVDB and AI capabilities",
    examples: [
      "AI-powered dApps",
      "Vector database applications",
      "Machine learning models",
      "Recommendation systems",
    ],
  },
  {
    name: "Community & Education",
    amount: "$5K - $50K",
    color: "yellow" as const,
    icon: Users,
    description: "Content, tutorials, and community initiatives",
    examples: [
      "Educational content",
      "Video tutorials",
      "Hackathon organization",
      "Community management",
    ],
  },
]

export default function GrantsPage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection
          title="Grants Program"
          subtitle="Funding for builders shaping the future of blockchain"
          pattern="grid"
        />

        {/* Overview */}
        <section className="py-20 bg-white border-b-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <StickerCard color="purple" hover={false}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">$5M</div>
                  <div className="text-sm uppercase tracking-wider text-white/80">Total Fund Size</div>
                </div>
              </StickerCard>
              <StickerCard color="bright" hover={false}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">150+</div>
                  <div className="text-sm uppercase tracking-wider text-white/80">Projects Funded</div>
                </div>
              </StickerCard>
              <StickerCard color="pink" hover={false}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">4-6 weeks</div>
                  <div className="text-sm uppercase tracking-wider text-white/80">Review Time</div>
                </div>
              </StickerCard>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Building the Future Together
              </h2>
              <p className="text-xl text-gray-700">
                The ArthaChain Grants Program provides funding and support to developers, 
                researchers, and creators building innovative applications on our platform.
              </p>
            </div>
          </div>
        </section>

        {/* Grant Tracks */}
        <section className="py-20 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Grant Tracks
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the track that best fits your project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {grantTracks.map((track) => (
                <StickerCard key={track.name} color={track.color}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 border-[3px] border-black flex items-center justify-center flex-shrink-0 ${
                      track.color === "yellow" ? "bg-black" : "bg-white"
                    }`}>
                      <track.icon className={`w-6 h-6 ${track.color === "yellow" ? "text-white" : "text-black"}`} />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold mb-1 ${track.color === "yellow" ? "text-black" : "text-white"}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {track.name}
                      </h3>
                      <div className={`text-lg font-bold ${track.color === "yellow" ? "text-black/80" : "text-white/90"}`}>
                        {track.amount}
                      </div>
                    </div>
                  </div>
                  <p className={`mb-4 ${track.color === "yellow" ? "text-black/80" : "text-white/90"}`}>
                    {track.description}
                  </p>
                  <div className={`text-sm ${track.color === "yellow" ? "text-black/70" : "text-white/80"}`}>
                    <div className="font-bold mb-2">Examples:</div>
                    <ul className="space-y-1">
                      {track.examples.map((example, i) => (
                        <li key={i}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                </StickerCard>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-white border-t-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Application Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Simple and transparent process from application to funding
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border-[3px] border-black p-6 bg-white shadow-[4px_4px_0px_#000]">
                <div className="w-12 h-12 bg-[#450693] border-[3px] border-black flex items-center justify-center text-white text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Submit Application</h3>
                <p className="text-gray-700 text-sm">
                  Fill out the grant application form with your project details and roadmap
                </p>
              </div>

              <div className="border-[3px] border-black p-6 bg-white shadow-[4px_4px_0px_#000]">
                <div className="w-12 h-12 bg-[#8c00ff] border-[3px] border-black flex items-center justify-center text-white text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Initial Review</h3>
                <p className="text-gray-700 text-sm">
                  Our team reviews your application and provides feedback within 2 weeks
                </p>
              </div>

              <div className="border-[3px] border-black p-6 bg-white shadow-[4px_4px_0px_#000]">
                <div className="w-12 h-12 bg-[#ff3f7f] border-[3px] border-black flex items-center justify-center text-white text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Due Diligence</h3>
                <p className="text-gray-700 text-sm">
                  Technical review, team assessment, and milestone planning
                </p>
              </div>

              <div className="border-[3px] border-black p-6 bg-white shadow-[4px_4px_0px_#000]">
                <div className="w-12 h-12 bg-[#ffc400] border-[3px] border-black flex items-center justify-center text-black text-2xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Funding & Support</h3>
                <p className="text-gray-700 text-sm">
                  Receive funding in tranches based on milestone completion
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Look For */}
        <section className="py-20 bg-[#f5f5f5] border-t-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                What We Look For
              </h2>
              <div className="space-y-4">
                {[
                  "Strong technical team with relevant experience",
                  "Clear roadmap with achievable milestones",
                  "Innovative use of ArthaChain technology",
                  "Potential for ecosystem growth and adoption",
                  "Open-source commitment when applicable",
                  "Realistic budget and timeline",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 border-[3px] border-black bg-white">
                    <CheckCircle2 className="w-6 h-6 text-[#450693] flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#8c00ff] text-white border-t-[3px] border-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Ready to Apply?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Submit your grant application and join the ArthaChain ecosystem
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.example.com/grants"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white text-black border-[3px] border-white shadow-[4px_4px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#fff] transition-all font-bold uppercase tracking-wider"
              >
                Apply Now
              </a>
              <a
                href="/docs/grants"
                className="inline-block px-8 py-4 bg-[#ffc400] text-black border-[3px] border-white shadow-[4px_4px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#fff] transition-all font-bold uppercase tracking-wider"
              >
                Read Guidelines
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
