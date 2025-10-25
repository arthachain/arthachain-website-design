import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import StickerCard from "@/components/StickerCard"
import CodeBlock from "@/components/CodeBlock"
import { Brain, Database, Zap, Shield, Layers, TrendingUp } from "lucide-react"

export const metadata = {
  title: "AI on ArthaChain | SVDB",
  description: "State Vector Database - Native AI computation on blockchain",
}

export default function AIPage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection
          title="AI-Native Blockchain"
          subtitle="Introducing SVDB: State Vector Database for on-chain AI"
          pattern="dots"
        />

        {/* What is SVDB */}
        <section className="py-20 bg-white border-b-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-[#8c00ff] text-white border-[3px] border-black shadow-[4px_4px_0px_#000] mb-6 text-sm font-bold uppercase">
                  Revolutionary Technology
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  What is SVDB?
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  State Vector Database (SVDB) is a groundbreaking innovation that brings native AI capabilities to blockchain without sacrificing decentralization or security.
                </p>
                <p className="text-gray-700 mb-6">
                  SVDB enables storing, querying, and computing with vector embeddings directly on-chain. This means you can run AI models, perform similarity searches, and build intelligent dApps without relying on centralized infrastructure.
                </p>
              </div>

              <div className="space-y-4">
                <StickerCard color="purple">
                  <div className="flex items-start gap-4">
                    <Database className="w-10 h-10 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Vector Storage</h3>
                      <p className="text-white/90 text-sm">Store high-dimensional embeddings on-chain with cryptographic verification</p>
                    </div>
                  </div>
                </StickerCard>

                <StickerCard color="bright">
                  <div className="flex items-start gap-4">
                    <Zap className="w-10 h-10 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Fast Queries</h3>
                      <p className="text-white/90 text-sm">Perform similarity searches in milliseconds using optimized indexing</p>
                    </div>
                  </div>
                </StickerCard>

                <StickerCard color="pink">
                  <div className="flex items-start gap-4">
                    <Brain className="w-10 h-10 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">AI Computation</h3>
                      <p className="text-white/90 text-sm">Run inference on-chain with verifiable results and deterministic outputs</p>
                    </div>
                  </div>
                </StickerCard>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                How SVDB Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A three-layer architecture enables efficient AI operations on-chain
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <StickerCard>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#450693] border-[3px] border-black flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3">Storage Layer</h3>
                  <p className="text-gray-700 text-sm">
                    Vectors are stored in a specialized Merkle tree structure optimized for similarity searches
                  </p>
                </div>
              </StickerCard>

              <StickerCard>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#8c00ff] border-[3px] border-black flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3">Index Layer</h3>
                  <p className="text-gray-700 text-sm">
                    Hierarchical Navigable Small World (HNSW) graphs enable fast approximate nearest neighbor searches
                  </p>
                </div>
              </StickerCard>

              <StickerCard>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#ff3f7f] border-[3px] border-black flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3">Compute Layer</h3>
                  <p className="text-gray-700 text-sm">
                    Zero-knowledge proofs verify AI computations while maintaining privacy and efficiency
                  </p>
                </div>
              </StickerCard>
            </div>

            <div className="max-w-3xl mx-auto">
              <CodeBlock
                code={`import { SVDB } from '@arthachain/svdb'

// Initialize SVDB
const svdb = new SVDB({
  collection: 'user-preferences',
  dimension: 384
})

// Store vector embedding
await svdb.insert({
  id: 'user_001',
  vector: embeddingArray,
  metadata: { category: 'fashion' }
})

// Query similar vectors
const results = await svdb.query({
  vector: queryEmbedding,
  k: 10,
  filter: { category: 'fashion' }
})

console.log(results)
// Returns top 10 most similar items`}
                language="javascript"
                title="SVDB Example"
              />
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white border-t-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Use Cases
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SVDB unlocks entirely new categories of decentralized applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StickerCard color="purple">
                <h3 className="text-2xl font-bold mb-3 text-white">AI-Powered DeFi</h3>
                <p className="text-white/90 text-sm mb-4">
                  Build intelligent trading algorithms that analyze market sentiment and predict trends
                </p>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• Sentiment analysis</li>
                  <li>• Risk scoring</li>
                  <li>• Fraud detection</li>
                </ul>
              </StickerCard>

              <StickerCard color="bright">
                <h3 className="text-2xl font-bold mb-3 text-white">Decentralized Social</h3>
                <p className="text-white/90 text-sm mb-4">
                  Create recommendation systems and content discovery without centralized servers
                </p>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• Content recommendations</li>
                  <li>• User matching</li>
                  <li>• Spam detection</li>
                </ul>
              </StickerCard>

              <StickerCard color="pink">
                <h3 className="text-2xl font-bold mb-3 text-white">NFT Search</h3>
                <p className="text-white/90 text-sm mb-4">
                  Enable semantic search across NFT collections by image similarity
                </p>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• Image similarity search</li>
                  <li>• Style-based discovery</li>
                  <li>• Duplicate detection</li>
                </ul>
              </StickerCard>

              <StickerCard color="yellow">
                <h3 className="text-2xl font-bold mb-3">Gaming AI</h3>
                <p className="text-black/80 text-sm mb-4">
                  Build NPCs with persistent memory and intelligent behavior
                </p>
                <ul className="space-y-2 text-black/70 text-sm">
                  <li>• Intelligent NPCs</li>
                  <li>• Player behavior analysis</li>
                  <li>• Dynamic difficulty</li>
                </ul>
              </StickerCard>

              <StickerCard color="purple">
                <h3 className="text-2xl font-bold mb-3 text-white">Healthcare</h3>
                <p className="text-white/90 text-sm mb-4">
                  Secure patient data with privacy-preserving AI diagnosis
                </p>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• Medical image analysis</li>
                  <li>• Patient matching</li>
                  <li>• Drug discovery</li>
                </ul>
              </StickerCard>

              <StickerCard color="bright">
                <h3 className="text-2xl font-bold mb-3 text-white">Identity</h3>
                <p className="text-white/90 text-sm mb-4">
                  Decentralized identity with biometric verification on-chain
                </p>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• Biometric verification</li>
                  <li>• Reputation systems</li>
                  <li>• Sybil resistance</li>
                </ul>
              </StickerCard>
            </div>
          </div>
        </section>

        {/* Performance */}
        <section className="py-20 bg-[#ffc400] border-t-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Performance Metrics
              </h2>
              <p className="text-xl mb-12">
                SVDB delivers production-ready performance at scale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border-[3px] border-black bg-white p-6 shadow-[4px_4px_0px_#000]">
                <TrendingUp className="w-10 h-10 mb-3" />
                <div className="text-3xl font-bold mb-2">10M+</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Vectors Stored</div>
              </div>

              <div className="border-[3px] border-black bg-white p-6 shadow-[4px_4px_0px_#000]">
                <Zap className="w-10 h-10 mb-3" />
                <div className="text-3xl font-bold mb-2">&lt;50ms</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Query Latency</div>
              </div>

              <div className="border-[3px] border-black bg-white p-6 shadow-[4px_4px_0px_#000]">
                <Shield className="w-10 h-10 mb-3" />
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Verifiable</div>
              </div>

              <div className="border-[3px] border-black bg-white p-6 shadow-[4px_4px_0px_#000]">
                <Layers className="w-10 h-10 mb-3" />
                <div className="text-3xl font-bold mb-2">2048</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Max Dimensions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className="py-20 bg-[#450693] text-white border-t-[3px] border-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Start Building with SVDB
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join the AI revolution on blockchain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/docs/svdb"
                className="inline-block px-8 py-4 bg-white text-black border-[3px] border-white shadow-[4px_4px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#fff] transition-all font-bold uppercase tracking-wider"
              >
                Read Documentation
              </a>
              <a
                href="/developers"
                className="inline-block px-8 py-4 bg-[#8c00ff] text-white border-[3px] border-white shadow-[4px_4px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#fff] transition-all font-bold uppercase tracking-wider"
              >
                Quick Start Guide
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
