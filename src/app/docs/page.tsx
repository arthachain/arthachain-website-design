"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import StickerCard from "@/components/StickerCard"
import CodeBlock from "@/components/CodeBlock"
import { useState } from "react"
import { Menu, X, ChevronRight, Book, Rocket, Code, Database, Shield, Zap } from "lucide-react"

const docSections = [
  {
    title: "Getting Started",
    icon: Rocket,
    items: [
      { title: "Introduction", slug: "introduction" },
      { title: "Quick Start", slug: "quick-start" },
      { title: "Installation", slug: "installation" },
      { title: "First Smart Contract", slug: "first-contract" },
    ],
  },
  {
    title: "Core Concepts",
    icon: Book,
    items: [
      { title: "Architecture", slug: "architecture" },
      { title: "Consensus Mechanism", slug: "consensus" },
      { title: "Accounts & Wallets", slug: "accounts" },
      { title: "Transactions", slug: "transactions" },
    ],
  },
  {
    title: "SVDB",
    icon: Database,
    items: [
      { title: "Introduction to SVDB", slug: "svdb-intro" },
      { title: "Vector Storage", slug: "vector-storage" },
      { title: "Queries & Indexes", slug: "queries" },
      { title: "AI Integration", slug: "ai-integration" },
    ],
  },
  {
    title: "Development",
    icon: Code,
    items: [
      { title: "Smart Contracts", slug: "smart-contracts" },
      { title: "JavaScript SDK", slug: "js-sdk" },
      { title: "Rust SDK", slug: "rust-sdk" },
      { title: "Testing & Debugging", slug: "testing" },
    ],
  },
  {
    title: "Security",
    icon: Shield,
    items: [
      { title: "Best Practices", slug: "best-practices" },
      { title: "Auditing", slug: "auditing" },
      { title: "Common Vulnerabilities", slug: "vulnerabilities" },
      { title: "Bug Bounty", slug: "bug-bounty" },
    ],
  },
  {
    title: "Advanced",
    icon: Zap,
    items: [
      { title: "Validators", slug: "validators" },
      { title: "Network Protocol", slug: "protocol" },
      { title: "Performance Optimization", slug: "optimization" },
      { title: "Cross-Chain", slug: "cross-chain" },
    ],
  },
]

export default function DocsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("introduction")

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-[1920px] mx-auto flex">
          {/* Mobile Sidebar Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="fixed top-24 left-4 z-50 lg:hidden p-3 bg-[#450693] text-white border-[3px] border-black shadow-[4px_4px_0px_#000]"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Sidebar */}
          <aside
            className={`fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] w-80 bg-[#f5f5f5] border-r-[3px] border-black overflow-y-auto transition-transform duration-300 z-40 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            }`}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Documentation
              </h2>
              
              <nav>
                {docSections.map((section) => (
                  <div key={section.title} className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <section.icon className="w-5 h-5" />
                      <h3 className="font-bold uppercase tracking-wider text-sm">
                        {section.title}
                      </h3>
                    </div>
                    <ul className="space-y-2 ml-7">
                      {section.items.map((item) => (
                        <li key={item.slug}>
                          <button
                            onClick={() => {
                              setActiveSection(item.slug)
                              setSidebarOpen(false)
                            }}
                            className={`w-full text-left px-3 py-2 transition-colors ${
                              activeSection === item.slug
                                ? "bg-[#450693] text-white border-[2px] border-black"
                                : "hover:bg-white border-[2px] border-transparent"
                            }`}
                          >
                            {item.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 p-6 lg:p-12">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
                <a href="/" className="hover:text-[#450693]">Home</a>
                <ChevronRight className="w-4 h-4" />
                <span>Documentation</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-black font-bold">Quick Start</span>
              </div>

              {/* Content */}
              <article className="prose prose-lg max-w-none">
                <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Quick Start Guide
                </h1>
                
                <p className="text-xl text-gray-700 mb-8">
                  Get up and running with ArthaChain in less than 5 minutes. This guide will walk you through 
                  installing the CLI, creating your first project, and deploying a smart contract.
                </p>

                <div className="border-[3px] border-black bg-[#ffc400] p-6 shadow-[4px_4px_0px_#000] my-8">
                  <h3 className="text-xl font-bold mb-2 mt-0">Prerequisites</h3>
                  <ul className="mb-0">
                    <li>Node.js 18+ installed</li>
                    <li>Basic knowledge of JavaScript or TypeScript</li>
                    <li>A code editor (VS Code recommended)</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Step 1: Install the CLI
                </h2>
                
                <p>Install the ArthaChain CLI globally using npm:</p>

                <CodeBlock
                  code={`npm install -g @arthachain/cli

# Verify installation
artha --version`}
                  language="bash"
                  title="Install CLI"
                />

                <h2 className="text-3xl font-bold mt-12 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Step 2: Create a New Project
                </h2>

                <p>Use the CLI to scaffold a new project:</p>

                <CodeBlock
                  code={`# Create new project
artha init my-first-dapp

# Navigate to project directory
cd my-first-dapp

# Install dependencies
npm install`}
                  language="bash"
                  title="Create Project"
                />

                <h2 className="text-3xl font-bold mt-12 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Step 3: Write Your First Smart Contract
                </h2>

                <p>Create a simple storage contract in <code>contracts/Storage.sol</code>:</p>

                <CodeBlock
                  code={`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private storedValue;
    
    event ValueChanged(uint256 newValue);
    
    function setValue(uint256 _value) public {
        storedValue = _value;
        emit ValueChanged(_value);
    }
    
    function getValue() public view returns (uint256) {
        return storedValue;
    }
}`}
                  language="solidity"
                  title="contracts/Storage.sol"
                />

                <h2 className="text-3xl font-bold mt-12 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Step 4: Compile and Deploy
                </h2>

                <p>Compile your contract and deploy it to the testnet:</p>

                <CodeBlock
                  code={`# Compile contract
artha compile

# Deploy to testnet
artha deploy --network testnet

# Output:
# ✓ Contract deployed at: 0x1234...5678
# ✓ Transaction hash: 0xabcd...ef01`}
                  language="bash"
                  title="Deploy Contract"
                />

                <h2 className="text-3xl font-bold mt-12 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Step 5: Interact with Your Contract
                </h2>

                <p>Use the SDK to interact with your deployed contract:</p>

                <CodeBlock
                  code={`import { ArthaChain } from '@arthachain/sdk'

// Initialize client
const client = new ArthaChain({
  network: 'testnet',
  privateKey: process.env.PRIVATE_KEY
})

// Get contract instance
const contract = client.contract('0x1234...5678')

// Call setValue
await contract.setValue(42)

// Read getValue
const value = await contract.getValue()
console.log('Stored value:', value) // 42`}
                  language="javascript"
                  title="Interact with Contract"
                />

                <div className="border-[3px] border-black bg-[#8c00ff] text-white p-6 shadow-[4px_4px_0px_#000] my-8">
                  <h3 className="text-xl font-bold mb-2 mt-0">🎉 Congratulations!</h3>
                  <p className="mb-0">
                    You've successfully deployed your first smart contract on ArthaChain. 
                    Check out the next guides to learn about SVDB integration and advanced features.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Next Steps
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                  <StickerCard color="purple">
                    <h3 className="text-xl font-bold text-white mb-2">Learn SVDB</h3>
                    <p className="text-white/90 text-sm">
                      Integrate AI capabilities with State Vector Database
                    </p>
                  </StickerCard>

                  <StickerCard color="bright">
                    <h3 className="text-xl font-bold text-white mb-2">SDK Reference</h3>
                    <p className="text-white/90 text-sm">
                      Explore the complete API documentation
                    </p>
                  </StickerCard>

                  <StickerCard color="pink">
                    <h3 className="text-xl font-bold text-white mb-2">Best Practices</h3>
                    <p className="text-white/90 text-sm">
                      Learn security and optimization tips
                    </p>
                  </StickerCard>

                  <StickerCard color="yellow">
                    <h3 className="text-xl font-bold text-black mb-2">Join Community</h3>
                    <p className="text-black/80 text-sm">
                      Get help from developers on Discord
                    </p>
                  </StickerCard>
                </div>
              </article>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-16 pt-8 border-t-[3px] border-black">
                <div>
                  <a
                    href="/docs/introduction"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all font-bold"
                  >
                    ← Introduction
                  </a>
                </div>
                <div>
                  <a
                    href="/docs/installation"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#450693] text-white border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all font-bold"
                  >
                    Installation →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
