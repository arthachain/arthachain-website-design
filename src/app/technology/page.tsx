import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import StickerCard from "@/components/StickerCard"
import { Layers, Lock, Zap, Database, Network, Cpu } from "lucide-react"

export const metadata = {
  title: "Technology | ArthaChain",
  description: "Deep dive into ArthaChain's revolutionary blockchain architecture",
}

export default function TechnologyPage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection
          title="Revolutionary Technology"
          subtitle="Built from the ground up for speed, security, and scalability"
          pattern="grid"
        />

        {/* Architecture Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Multi-Layer Architecture
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our innovative architecture separates concerns for maximum efficiency
              </p>
            </div>

            <div className="space-y-6">
              <StickerCard color="purple">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white border-[3px] border-black flex items-center justify-center flex-shrink-0">
                    <Layers className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Layer 1: Consensus Layer
                    </h3>
                    <p className="text-white/90">
                      Proof-of-Stake consensus with Byzantine Fault Tolerance. Validators stake tokens to secure the network and validate transactions with instant finality.
                    </p>
                  </div>
                </div>
              </StickerCard>

              <StickerCard color="bright">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white border-[3px] border-black flex items-center justify-center flex-shrink-0">
                    <Zap className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Layer 2: Execution Layer
                    </h3>
                    <p className="text-white/90">
                      Parallel execution engine processes thousands of transactions simultaneously. Smart contract VM with gas optimization and instant finality.
                    </p>
                  </div>
                </div>
              </StickerCard>

              <StickerCard color="pink">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white border-[3px] border-black flex items-center justify-center flex-shrink-0">
                    <Database className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Layer 3: Data Layer (SVDB)
                    </h3>
                    <p className="text-white/90">
                      State Vector Database enables AI-native operations. Store and query vector embeddings on-chain with cryptographic verification.
                    </p>
                  </div>
                </div>
              </StickerCard>

              <StickerCard color="yellow">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-black border-[3px] border-black flex items-center justify-center flex-shrink-0">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Layer 4: Network Layer
                    </h3>
                    <p className="text-black/80">
                      Optimized P2P networking with intelligent routing. Gossip protocol ensures rapid block propagation across thousands of nodes.
                    </p>
                  </div>
                </div>
              </StickerCard>
            </div>
          </div>
        </section>

        {/* Consensus Mechanism */}
        <section id="consensus" className="py-20 bg-[#f5f5f5] border-t-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Proof-of-Stake Consensus
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  Our Byzantine Fault Tolerant PoS mechanism ensures security while maintaining incredible speed.
                </p>
                <div className="space-y-4">
                  <div className="border-[3px] border-black p-4 bg-white">
                    <h4 className="font-bold mb-2">Validator Selection</h4>
                    <p className="text-gray-700 text-sm">
                      Validators are chosen based on stake weight and reputation score. Minimum stake of 10,000 ARTH required.
                    </p>
                  </div>
                  <div className="border-[3px] border-black p-4 bg-white">
                    <h4 className="font-bold mb-2">Block Production</h4>
                    <p className="text-gray-700 text-sm">
                      New blocks every 1 second with instant finality. No reorganizations or uncle blocks.
                    </p>
                  </div>
                  <div className="border-[3px] border-black p-4 bg-white">
                    <h4 className="font-bold mb-2">Slashing Protection</h4>
                    <p className="text-gray-700 text-sm">
                      Malicious validators lose their stake. Double-signing and downtime are automatically penalized.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-[3px] border-black shadow-[8px_8px_0px_#000] bg-[#8c00ff] p-8">
                <h3 className="text-2xl font-bold mb-6 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Network Statistics
                </h3>
                <div className="space-y-6 text-white">
                  <div>
                    <div className="text-sm uppercase tracking-wider opacity-80 mb-2">Active Validators</div>
                    <div className="text-4xl font-bold">1,247</div>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-wider opacity-80 mb-2">Total Staked</div>
                    <div className="text-4xl font-bold">47.3M ARTH</div>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-wider opacity-80 mb-2">Average APY</div>
                    <div className="text-4xl font-bold">12.5%</div>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-wider opacity-80 mb-2">Network Uptime</div>
                    <div className="text-4xl font-bold">99.97%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section id="security" className="py-20 bg-white border-t-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Security First
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multiple layers of security protect your assets and data
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StickerCard>
                <Lock className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Cryptographic Verification</h3>
                <p className="text-gray-700 text-sm">
                  Every transaction is cryptographically signed and verified using elliptic curve cryptography.
                </p>
              </StickerCard>

              <StickerCard>
                <Lock className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Formal Verification</h3>
                <p className="text-gray-700 text-sm">
                  Smart contracts can be formally verified to prove correctness and eliminate bugs.
                </p>
              </StickerCard>

              <StickerCard>
                <Lock className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Multi-Sig Support</h3>
                <p className="text-gray-700 text-sm">
                  Native multi-signature accounts require multiple approvals for enhanced security.
                </p>
              </StickerCard>

              <StickerCard>
                <Lock className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Regular Audits</h3>
                <p className="text-gray-700 text-sm">
                  Quarterly security audits by leading firms ensure code quality and safety.
                </p>
              </StickerCard>

              <StickerCard>
                <Lock className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Bug Bounty Program</h3>
                <p className="text-gray-700 text-sm">
                  Up to $100,000 rewards for critical vulnerability discoveries.
                </p>
              </StickerCard>

              <StickerCard>
                <Lock className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Decentralized Governance</h3>
                <p className="text-gray-700 text-sm">
                  No single point of failure - community governs protocol upgrades.
                </p>
              </StickerCard>
            </div>
          </div>
        </section>

        {/* Performance */}
        <section className="py-20 bg-[#450693] text-white border-t-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Unmatched Performance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="border-[3px] border-white p-8">
                  <div className="text-5xl font-bold mb-2">50K+</div>
                  <div className="text-sm uppercase tracking-wider opacity-80">TPS</div>
                </div>
                <div className="border-[3px] border-white p-8">
                  <div className="text-5xl font-bold mb-2">&lt;1s</div>
                  <div className="text-sm uppercase tracking-wider opacity-80">Finality</div>
                </div>
                <div className="border-[3px] border-white p-8">
                  <div className="text-5xl font-bold mb-2">$0.001</div>
                  <div className="text-sm uppercase tracking-wider opacity-80">Gas Fee</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
