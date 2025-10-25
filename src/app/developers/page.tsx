"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import StickerCard from "@/components/StickerCard"
import CodeBlock from "@/components/CodeBlock"
import DoodleButton from "@/components/DoodleButton"
import { useState } from "react"
import { Book, Code, Rocket, Terminal } from "lucide-react"

export default function DevelopersPage() {
  const [activeTab, setActiveTab] = useState<"cli" | "js" | "rust" | "python">("cli")

  const quickstartCode = {
    cli: `# Install ArthaChain CLI
npm install -g @arthachain/cli

# Create new project
artha init my-project

# Deploy smart contract
artha deploy contracts/MyContract.sol`,
    js: `// Install SDK
// npm install @arthachain/sdk

import { ArthaChain } from '@arthachain/sdk'

// Initialize client
const client = new ArthaChain({
  network: 'mainnet',
  apiKey: 'your-api-key'
})

// Deploy contract
const contract = await client.deploy({
  code: contractCode,
  args: [param1, param2]
})`,
    rust: `// Add to Cargo.toml
// arthachain-sdk = "1.0"

use arthachain_sdk::prelude::*;

#[tokio::main]
async fn main() {
    // Initialize client
    let client = ArthaClient::new(
        Network::Mainnet
    ).await?;
    
    // Deploy contract
    let contract = client
        .deploy(contract_wasm)
        .await?;
}`,
    python: `# Install SDK
# pip install arthachain-sdk

from arthachain import ArthaChain

# Initialize client
client = ArthaChain(
    network='mainnet',
    api_key='your-api-key'
)

# Deploy contract
contract = client.deploy(
    code=contract_code,
    args=[param1, param2]
)`
  }

  return (
    <>
      <Navigation />
      <main>
        <HeroSection
          title="Build on ArthaChain"
          subtitle="Everything you need to start building decentralized applications"
          pattern="lines"
        />

        {/* Quick Start */}
        <section className="py-20 bg-white border-b-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Quick Start
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get started in minutes with our comprehensive SDKs
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              <button
                onClick={() => setActiveTab("cli")}
                className={`px-6 py-3 border-[3px] border-black font-bold uppercase tracking-wider transition-all ${
                  activeTab === "cli"
                    ? "bg-[#450693] text-white shadow-[4px_4px_0px_#000]"
                    : "bg-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#000]"
                }`}
              >
                CLI
              </button>
              <button
                onClick={() => setActiveTab("js")}
                className={`px-6 py-3 border-[3px] border-black font-bold uppercase tracking-wider transition-all ${
                  activeTab === "js"
                    ? "bg-[#450693] text-white shadow-[4px_4px_0px_#000]"
                    : "bg-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#000]"
                }`}
              >
                JavaScript
              </button>
              <button
                onClick={() => setActiveTab("rust")}
                className={`px-6 py-3 border-[3px] border-black font-bold uppercase tracking-wider transition-all ${
                  activeTab === "rust"
                    ? "bg-[#450693] text-white shadow-[4px_4px_0px_#000]"
                    : "bg-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#000]"
                }`}
              >
                Rust
              </button>
              <button
                onClick={() => setActiveTab("python")}
                className={`px-6 py-3 border-[3px] border-black font-bold uppercase tracking-wider transition-all ${
                  activeTab === "python"
                    ? "bg-[#450693] text-white shadow-[4px_4px_0px_#000]"
                    : "bg-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#000]"
                }`}
              >
                Python
              </button>
            </div>

            <CodeBlock
              code={quickstartCode[activeTab]}
              language={activeTab === "cli" ? "bash" : activeTab}
              title={`Quick Start - ${activeTab.toUpperCase()}`}
            />
          </div>
        </section>

        {/* Developer Resources */}
        <section className="py-20 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Developer Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive tools and documentation for every stage
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StickerCard color="purple">
                <Book className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Documentation</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Complete guides and API references
                </p>
                <DoodleButton variant="outline" size="sm" href="/docs">
                  Read Docs
                </DoodleButton>
              </StickerCard>

              <StickerCard color="bright">
                <Code className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Examples</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Sample projects and templates
                </p>
                <DoodleButton variant="outline" size="sm" href="https://github.com">
                  View Examples
                </DoodleButton>
              </StickerCard>

              <StickerCard color="pink">
                <Terminal className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Playground</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Test contracts in browser
                </p>
                <DoodleButton variant="outline" size="sm" href="/playground">
                  Try Now
                </DoodleButton>
              </StickerCard>

              <StickerCard color="yellow">
                <Rocket className="w-12 h-12 text-black mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black">Grants</h3>
                <p className="text-black/80 mb-4 text-sm">
                  Funding for your project
                </p>
                <DoodleButton variant="primary" size="sm" href="/grants">
                  Apply Now
                </DoodleButton>
              </StickerCard>
            </div>
          </div>
        </section>

        {/* Smart Contract Example */}
        <section className="py-20 bg-white border-t-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Write Smart Contracts
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  Use familiar languages like Solidity or our native Rust SDK to build secure, efficient smart contracts.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#450693] border-[2px] border-black flex-shrink-0 mt-1 mr-3" />
                    <span>Full Solidity compatibility</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#8c00ff] border-[2px] border-black flex-shrink-0 mt-1 mr-3" />
                    <span>Native Rust support for optimal performance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#ff3f7f] border-[2px] border-black flex-shrink-0 mt-1 mr-3" />
                    <span>Built-in testing and debugging tools</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#ffc400] border-[2px] border-black flex-shrink-0 mt-1 mr-3" />
                    <span>Gas optimization recommendations</span>
                  </li>
                </ul>
              </div>

              <div>
                <CodeBlock
                  code={`pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private value;
    
    event ValueChanged(uint256 newValue);
    
    function setValue(uint256 _value) public {
        value = _value;
        emit ValueChanged(_value);
    }
    
    function getValue() public view returns (uint256) {
        return value;
    }
}`}
                  language="solidity"
                  title="Smart Contract Example"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Developer Tools */}
        <section className="py-20 bg-[#8c00ff] text-white border-t-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Developer Tools
              </h2>
              <p className="text-xl mb-12 text-white/90">
                Everything you need in one place
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="border-[3px] border-white p-6 bg-white/10">
                  <h3 className="text-xl font-bold mb-2">CLI Tools</h3>
                  <p className="text-sm text-white/80">Command-line interface for deployment and management</p>
                </div>
                <div className="border-[3px] border-white p-6 bg-white/10">
                  <h3 className="text-xl font-bold mb-2">Web3 Wallet</h3>
                  <p className="text-sm text-white/80">Browser extension for easy dApp interaction</p>
                </div>
                <div className="border-[3px] border-white p-6 bg-white/10">
                  <h3 className="text-xl font-bold mb-2">Block Explorer</h3>
                  <p className="text-sm text-white/80">Real-time blockchain data and analytics</p>
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
