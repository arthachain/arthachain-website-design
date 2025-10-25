"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null)

  const megaMenus = {
    technology: [
      { title: "Architecture", href: "/technology", desc: "Deep dive into our blockchain" },
      { title: "Consensus", href: "/technology#consensus", desc: "Proof of Stake mechanism" },
      { title: "AI Integration", href: "/ai", desc: "SVDB and AI features" },
    ],
    developers: [
      { title: "Quick Start", href: "/developers", desc: "Get started in minutes" },
      { title: "Documentation", href: "/docs", desc: "Complete guides" },
      { title: "API Reference", href: "/docs/api", desc: "Full API docs" },
    ],
    ecosystem: [
      { title: "Projects", href: "/ecosystem", desc: "Built on ArthaChain" },
      { title: "Validators", href: "/validators", desc: "Become a validator" },
      { title: "Grants", href: "/grants", desc: "Funding opportunities" },
    ],
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#450693] border-[3px] border-black flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              ArthaChain
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Technology Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen("technology")}
              onMouseLeave={() => setMegaMenuOpen(null)}
            >
              <button className="px-4 py-2 font-medium flex items-center gap-1 hover:bg-[#f5f5f5] transition-colors">
                Technology <ChevronDown className="w-4 h-4" />
              </button>
              {megaMenuOpen === "technology" && (
                <div className="absolute top-full left-0 w-64 bg-white border-[3px] border-black shadow-[4px_4px_0px_#000] mt-2">
                  <div className="p-4 space-y-2">
                    {megaMenus.technology.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block p-3 hover:bg-[#f5f5f5] border-[2px] border-transparent hover:border-black transition-all"
                      >
                        <div className="font-semibold">{item.title}</div>
                        <div className="text-sm text-gray-600">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Developers Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen("developers")}
              onMouseLeave={() => setMegaMenuOpen(null)}
            >
              <button className="px-4 py-2 font-medium flex items-center gap-1 hover:bg-[#f5f5f5] transition-colors">
                Developers <ChevronDown className="w-4 h-4" />
              </button>
              {megaMenuOpen === "developers" && (
                <div className="absolute top-full left-0 w-64 bg-white border-[3px] border-black shadow-[4px_4px_0px_#000] mt-2">
                  <div className="p-4 space-y-2">
                    {megaMenus.developers.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block p-3 hover:bg-[#f5f5f5] border-[2px] border-transparent hover:border-black transition-all"
                      >
                        <div className="font-semibold">{item.title}</div>
                        <div className="text-sm text-gray-600">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Ecosystem Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen("ecosystem")}
              onMouseLeave={() => setMegaMenuOpen(null)}
            >
              <button className="px-4 py-2 font-medium flex items-center gap-1 hover:bg-[#f5f5f5] transition-colors">
                Ecosystem <ChevronDown className="w-4 h-4" />
              </button>
              {megaMenuOpen === "ecosystem" && (
                <div className="absolute top-full left-0 w-64 bg-white border-[3px] border-black shadow-[4px_4px_0px_#000] mt-2">
                  <div className="p-4 space-y-2">
                    {megaMenus.ecosystem.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block p-3 hover:bg-[#f5f5f5] border-[2px] border-transparent hover:border-black transition-all"
                      >
                        <div className="font-semibold">{item.title}</div>
                        <div className="text-sm text-gray-600">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/roadmap" className="px-4 py-2 font-medium hover:bg-[#f5f5f5] transition-colors">
              Roadmap
            </Link>
            <Link href="/community" className="px-4 py-2 font-medium hover:bg-[#f5f5f5] transition-colors">
              Community
            </Link>
            <Link href="/blog" className="px-4 py-2 font-medium hover:bg-[#f5f5f5] transition-colors">
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/developers"
              className="inline-block px-6 py-3 bg-[#450693] text-white doodle-button"
            >
              Start Building
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 border-[3px] border-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t-[3px] border-black bg-white">
          <div className="px-4 py-4 space-y-2">
            <Link href="/technology" className="block py-2 font-medium border-b border-gray-200">
              Technology
            </Link>
            <Link href="/developers" className="block py-2 font-medium border-b border-gray-200">
              Developers
            </Link>
            <Link href="/ecosystem" className="block py-2 font-medium border-b border-gray-200">
              Ecosystem
            </Link>
            <Link href="/validators" className="block py-2 font-medium border-b border-gray-200">
              Validators
            </Link>
            <Link href="/roadmap" className="block py-2 font-medium border-b border-gray-200">
              Roadmap
            </Link>
            <Link href="/community" className="block py-2 font-medium border-b border-gray-200">
              Community
            </Link>
            <Link href="/blog" className="block py-2 font-medium border-b border-gray-200">
              Blog
            </Link>
            <Link
              href="/developers"
              className="block w-full mt-4 px-6 py-3 bg-[#450693] text-white text-center doodle-button"
            >
              Start Building
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
