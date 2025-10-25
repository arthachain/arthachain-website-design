import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import StickerCard from "@/components/StickerCard"
import CodeBlock from "@/components/CodeBlock"
import { Server, Shield, Coins, TrendingUp, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Validators | ArthaChain",
  description: "Become a validator and secure the ArthaChain network",
}

export default function ValidatorsPage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection
          title="Become a Validator"
          subtitle="Secure the network and earn rewards"
          pattern="dots"
        />

        {/* Overview */}
        <section className="py-20 bg-white border-b-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <StickerCard color="purple" hover={false}>
                <Server className="w-10 h-10 text-white mb-3" />
                <div className="text-3xl font-bold text-white mb-2">1,247</div>
                <div className="text-sm uppercase tracking-wider text-white/80">Active Validators</div>
              </StickerCard>

              <StickerCard color="bright" hover={false}>
                <Coins className="w-10 h-10 text-white mb-3" />
                <div className="text-3xl font-bold text-white mb-2">10K ARTH</div>
                <div className="text-sm uppercase tracking-wider text-white/80">Minimum Stake</div>
              </StickerCard>

              <StickerCard color="pink" hover={false}>
                <TrendingUp className="w-10 h-10 text-white mb-3" />
                <div className="text-3xl font-bold text-white mb-2">12.5%</div>
                <div className="text-sm uppercase tracking-wider text-white/80">Average APY</div>
              </StickerCard>

              <StickerCard color="yellow" hover={false}>
                <Shield className="w-10 h-10 text-black mb-3" />
                <div className="text-3xl font-bold text-black mb-2">99.97%</div>
                <div className="text-sm uppercase tracking-wider text-black/80">Network Uptime</div>
              </StickerCard>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Why Run a Validator?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Validators are the backbone of ArthaChain, securing the network and processing transactions. 
                Earn rewards while contributing to decentralization.
              </p>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Validator Requirements
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hardware and software requirements for running a validator node
              </p>
            </div>

            <div className="border-[3px] border-black bg-white shadow-[6px_6px_0px_#000] overflow-hidden">
              <div className="border-b-[3px] border-black bg-[#450693] px-6 py-4">
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Technical Requirements
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#f5f5f5] border-b-[3px] border-black">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-sm">Component</th>
                      <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-sm">Minimum</th>
                      <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-sm">Recommended</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b-[2px] border-gray-200">
                      <td className="px-6 py-4 font-bold">CPU</td>
                      <td className="px-6 py-4">8 cores @ 2.5GHz</td>
                      <td className="px-6 py-4">16 cores @ 3.0GHz</td>
                    </tr>
                    <tr className="border-b-[2px] border-gray-200">
                      <td className="px-6 py-4 font-bold">RAM</td>
                      <td className="px-6 py-4">32 GB</td>
                      <td className="px-6 py-4">64 GB</td>
                    </tr>
                    <tr className="border-b-[2px] border-gray-200">
                      <td className="px-6 py-4 font-bold">Storage</td>
                      <td className="px-6 py-4">1 TB NVMe SSD</td>
                      <td className="px-6 py-4">2 TB NVMe SSD</td>
                    </tr>
                    <tr className="border-b-[2px] border-gray-200">
                      <td className="px-6 py-4 font-bold">Network</td>
                      <td className="px-6 py-4">100 Mbps</td>
                      <td className="px-6 py-4">1 Gbps</td>
                    </tr>
                    <tr className="border-b-[2px] border-gray-200">
                      <td className="px-6 py-4 font-bold">Stake</td>
                      <td className="px-6 py-4">10,000 ARTH</td>
                      <td className="px-6 py-4">50,000+ ARTH</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold">Operating System</td>
                      <td className="px-6 py-4" colSpan={2}>Ubuntu 22.04 LTS or newer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Setup Guide */}
        <section className="py-20 bg-white border-t-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Quick Setup Guide
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get your validator node up and running in minutes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <StickerCard color="purple">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white border-[3px] border-black flex items-center justify-center flex-shrink-0 font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Install Dependencies</h3>
                      <p className="text-white/90 text-sm">
                        Update your system and install required packages including Docker and Node.js
                      </p>
                    </div>
                  </div>
                </StickerCard>

                <StickerCard color="bright">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white border-[3px] border-black flex items-center justify-center flex-shrink-0 font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Download Validator Software</h3>
                      <p className="text-white/90 text-sm">
                        Clone the validator repository and install the ArthaChain node software
                      </p>
                    </div>
                  </div>
                </StickerCard>

                <StickerCard color="pink">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white border-[3px] border-black flex items-center justify-center flex-shrink-0 font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Generate Keys</h3>
                      <p className="text-white/90 text-sm">
                        Create validator keys and secure them with strong encryption
                      </p>
                    </div>
                  </div>
                </StickerCard>

                <StickerCard color="yellow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-black border-[3px] border-black flex items-center justify-center flex-shrink-0 font-bold text-xl text-white">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Stake Tokens</h3>
                      <p className="text-black/80 text-sm">
                        Stake minimum 10,000 ARTH tokens to activate your validator
                      </p>
                    </div>
                  </div>
                </StickerCard>
              </div>

              <div className="space-y-6">
                <CodeBlock
                  code={`# Install ArthaChain CLI
curl -fsSL https://get.arthachain.io | sh

# Initialize validator
artha validator init --name "My Validator"

# Generate validator keys
artha validator keygen

# Start the validator node
artha validator start --stake 10000`}
                  language="bash"
                  title="Validator Setup Commands"
                />

                <div className="border-[3px] border-black bg-[#ffc400] p-6 shadow-[4px_4px_0px_#000]">
                  <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Need Help?
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Join our Discord for live support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Read the complete setup guide in docs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Watch video tutorials on YouTube</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rewards */}
        <section className="py-20 bg-[#450693] text-white border-t-[3px] border-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Validator Rewards
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Earn rewards for securing the network and validating transactions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="border-[3px] border-white p-6">
                <div className="text-4xl font-bold mb-2">8-15%</div>
                <div className="text-sm uppercase tracking-wider text-white/80">Annual Rewards</div>
              </div>
              <div className="border-[3px] border-white p-6">
                <div className="text-4xl font-bold mb-2">Daily</div>
                <div className="text-sm uppercase tracking-wider text-white/80">Reward Distribution</div>
              </div>
              <div className="border-[3px] border-white p-6">
                <div className="text-4xl font-bold mb-2">0%</div>
                <div className="text-sm uppercase tracking-wider text-white/80">Commission Fee</div>
              </div>
            </div>
            <a
              href="/docs/validators"
              className="inline-block px-8 py-4 bg-white text-black border-[3px] border-white shadow-[4px_4px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#fff] transition-all font-bold uppercase tracking-wider"
            >
              Read Full Documentation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
