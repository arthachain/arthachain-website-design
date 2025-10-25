import Link from "next/link"
import { Twitter, Github, MessageCircle, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-[3px] border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#8c00ff] border-[3px] border-white flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                ArthaChain
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-sm">
              The AI-native blockchain built for the future. Fast, scalable, and designed for developers.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-[2px] border-white flex items-center justify-center hover:bg-[#8c00ff] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-[2px] border-white flex items-center justify-center hover:bg-[#8c00ff] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-[2px] border-white flex items-center justify-center hover:bg-[#8c00ff] transition-colors"
                aria-label="Discord"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-[2px] border-white flex items-center justify-center hover:bg-[#8c00ff] transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Technology */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Technology
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/technology" className="text-gray-400 hover:text-[#8c00ff] transition-colors">
                  Architecture
                </Link>
              </li>
              <li>
                <Link href="/technology#consensus" className="text-gray-400 hover:text-[#8c00ff] transition-colors">
                  Consensus
                </Link>
              </li>
              <li>
                <Link href="/ai" className="text-gray-400 hover:text-[#8c00ff] transition-colors">
                  AI Features
                </Link>
              </li>
              <li>
                <Link href="/technology#security" className="text-gray-400 hover:text-[#8c00ff] transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Developers
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/developers" className="text-gray-400 hover:text-[#8c00ff] transition-colors">
                  Quick Start
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-[#8c00ff] transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/docs/api" className="text-gray-400 hover:text-[#8c00ff] transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/grants" className="text-gray-400 hover:text-[#8c00ff] transition-colors">
                  Grants Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Community
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ecosystem" className="text-gray-400 hover:text-[#8c00ff] transition-colors">
                  Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/validators" className="text-gray-400 hover:text-[#8c00ff] transition-colors">
                  Validators
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-[#8c00ff] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-400 hover:text-[#8c00ff] transition-colors">
                  Forums
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#8c00ff] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#8c00ff] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t-[2px] border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ArthaChain. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-[#8c00ff] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#8c00ff] text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-[#8c00ff] text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
