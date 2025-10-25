import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import StickerCard from "@/components/StickerCard"
import { Target, Users, Lightbulb, Globe, Award, TrendingUp } from "lucide-react"

export const metadata = {
  title: "About | ArthaChain",
  description: "Learn about ArthaChain's mission, vision, and the team building the future of blockchain",
}

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Co-Founder & CEO",
    bio: "Former MIT researcher with 15+ years in distributed systems and cryptography",
    color: "purple" as const,
  },
  {
    name: "Mike Johnson",
    role: "Co-Founder & CTO",
    bio: "Ex-Google engineer, led blockchain infrastructure at major crypto projects",
    color: "bright" as const,
  },
  {
    name: "Emily Zhang",
    role: "Head of Engineering",
    bio: "Built scalable systems at Facebook and Amazon, blockchain expert",
    color: "pink" as const,
  },
  {
    name: "Alex Rivera",
    role: "Head of Product",
    bio: "Product leader from Coinbase, passionate about developer experience",
    color: "yellow" as const,
  },
]

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We push boundaries and challenge conventions to build breakthrough technology",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Our community shapes our direction and we build for their needs",
  },
  {
    icon: Lightbulb,
    title: "Open & Transparent",
    description: "Open-source code, transparent governance, and public roadmaps",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Building technology that empowers people worldwide",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection
          title="About ArthaChain"
          subtitle="Building the future of decentralized technology"
          pattern="grid"
        />

        {/* Mission */}
        <section className="py-20 bg-white border-b-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Our Mission
                </h2>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  To democratize access to blockchain technology by building the world's most 
                  performant, secure, and developer-friendly AI-native blockchain platform.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <StickerCard color="purple" hover={false}>
                  <div className="text-center">
                    <Award className="w-12 h-12 text-white mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-2">2023</div>
                    <div className="text-sm uppercase tracking-wider text-white/80">Founded</div>
                  </div>
                </StickerCard>
                <StickerCard color="bright" hover={false}>
                  <div className="text-center">
                    <Users className="w-12 h-12 text-white mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-2">75+</div>
                    <div className="text-sm uppercase tracking-wider text-white/80">Team Members</div>
                  </div>
                </StickerCard>
                <StickerCard color="pink" hover={false}>
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-white mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-2">$25M</div>
                    <div className="text-sm uppercase tracking-wider text-white/80">Funding Raised</div>
                  </div>
                </StickerCard>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Our Story
                </h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    ArthaChain was born from a simple observation: existing blockchains weren't 
                    ready for the AI revolution. While AI models were advancing rapidly, blockchain 
                    infrastructure remained stuck in the past.
                  </p>
                  <p>
                    In 2023, our founding team came together with a vision to bridge this gap. 
                    We asked ourselves: what if we could run AI computations directly on-chain 
                    without sacrificing decentralization?
                  </p>
                  <p>
                    After months of research and development, we created SVDB (State Vector Database) - 
                    a breakthrough technology that enables native AI operations on blockchain. 
                    Today, ArthaChain powers thousands of applications and serves millions of users worldwide.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="border-[3px] border-black shadow-[8px_8px_0px_#000] bg-[#8c00ff] p-8">
                  <div className="space-y-4">
                    <div className="w-full h-32 bg-[#ffc400] border-[3px] border-black" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 bg-[#ff3f7f] border-[3px] border-black" />
                      <div className="h-24 bg-[#450693] border-[3px] border-black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white border-t-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <StickerCard key={index}>
                  <value.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {value.description}
                  </p>
                </StickerCard>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-[#f5f5f5] border-t-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experienced leaders from top tech companies and blockchain projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <StickerCard key={member.name} color={member.color}>
                  <div className="w-full aspect-square bg-white border-[3px] border-black mb-4" />
                  <h3 className={`text-xl font-bold mb-1 ${member.color === "yellow" ? "text-black" : "text-white"}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {member.name}
                  </h3>
                  <div className={`text-sm font-bold mb-3 ${member.color === "yellow" ? "text-black/80" : "text-white/90"}`}>
                    {member.role}
                  </div>
                  <p className={`text-sm ${member.color === "yellow" ? "text-black/70" : "text-white/80"}`}>
                    {member.bio}
                  </p>
                </StickerCard>
              ))}
            </div>
          </div>
        </section>

        {/* Investors */}
        <section className="py-20 bg-white border-t-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Backed by Leading Investors
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Supported by top venture capital firms and strategic partners
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Sequoia Capital", "Andreessen Horowitz", "Paradigm", "Coinbase Ventures", "Pantera Capital", "Digital Currency Group", "Framework Ventures", "Multicoin Capital"].map((investor, i) => (
                <div
                  key={i}
                  className="border-[3px] border-black bg-[#f5f5f5] p-6 flex items-center justify-center text-center font-bold"
                >
                  {investor}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#450693] text-white border-t-[3px] border-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Join Our Team
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We're always looking for talented individuals to join our mission
            </p>
            <a
              href="/careers"
              className="inline-block px-8 py-4 bg-white text-black border-[3px] border-white shadow-[4px_4px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#fff] transition-all font-bold uppercase tracking-wider"
            >
              View Open Positions
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
