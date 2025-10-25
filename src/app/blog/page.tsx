import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import StickerCard from "@/components/StickerCard"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Blog | ArthaChain",
  description: "Latest news, updates, and insights from the ArthaChain team",
}

const blogPosts = [
  {
    title: "Introducing SVDB: The Future of On-Chain AI",
    excerpt: "Deep dive into our revolutionary State Vector Database and how it enables native AI computation on blockchain.",
    author: "Dr. Sarah Chen",
    date: "December 1, 2024",
    readTime: "8 min read",
    category: "Technology",
    color: "purple" as const,
    slug: "introducing-svdb",
  },
  {
    title: "ArthaChain Mainnet Launch: A New Era Begins",
    excerpt: "We're excited to announce the official launch of ArthaChain mainnet with 1,247 active validators.",
    author: "Mike Johnson",
    date: "November 28, 2024",
    readTime: "5 min read",
    category: "Announcement",
    color: "bright" as const,
    slug: "mainnet-launch",
  },
  {
    title: "Building AI-Powered DeFi Applications",
    excerpt: "Learn how to leverage SVDB to create intelligent DeFi protocols with on-chain AI capabilities.",
    author: "Alex Rivera",
    date: "November 25, 2024",
    readTime: "12 min read",
    category: "Tutorial",
    color: "pink" as const,
    slug: "ai-defi-tutorial",
  },
  {
    title: "Q4 2024 Ecosystem Update",
    excerpt: "Recap of ecosystem growth, new partnerships, and upcoming features in the ArthaChain ecosystem.",
    author: "Emily Zhang",
    date: "November 20, 2024",
    readTime: "6 min read",
    category: "Ecosystem",
    color: "yellow" as const,
    slug: "q4-2024-update",
  },
  {
    title: "Security Best Practices for Smart Contracts",
    excerpt: "Essential security guidelines for building safe and secure smart contracts on ArthaChain.",
    author: "David Kim",
    date: "November 15, 2024",
    readTime: "10 min read",
    category: "Security",
    color: "purple" as const,
    slug: "security-best-practices",
  },
  {
    title: "How We Achieved Sub-Second Finality",
    excerpt: "Technical deep-dive into our consensus mechanism and the optimizations that enable instant finality.",
    author: "Dr. Sarah Chen",
    date: "November 10, 2024",
    readTime: "15 min read",
    category: "Technology",
    color: "bright" as const,
    slug: "sub-second-finality",
  },
]

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection
          title="ArthaChain Blog"
          subtitle="Latest news, updates, and insights from our team"
          pattern="dots"
        />

        {/* Featured Post */}
        <section className="py-20 bg-white border-b-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-[3px] border-black shadow-[8px_8px_0px_#000] bg-[#450693] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 bg-[#ffc400] text-black border-[2px] border-black text-xs font-bold uppercase tracking-wider mb-4 w-fit">
                    Featured
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-white/90 mb-6 text-lg">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-white/80 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <Link
                    href={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black border-[3px] border-white shadow-[4px_4px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#fff] transition-all font-bold uppercase tracking-wider text-sm w-fit"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-[#8c00ff] border-l-[3px] border-black p-8 lg:p-12 flex items-center justify-center">
                  <div className="space-y-4">
                    <div className="w-full h-40 bg-[#ffc400] border-[3px] border-black" />
                    <div className="w-full h-24 bg-[#ff3f7f] border-[3px] border-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-20 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Recent Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our latest posts on technology, tutorials, and ecosystem updates
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(1).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                  <StickerCard color={post.color}>
                    <div className="inline-block px-3 py-1 border-[2px] border-black text-xs font-bold uppercase tracking-wider mb-3 bg-white text-black">
                      {post.category}
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${post.color === "yellow" ? "text-black" : "text-white"}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {post.title}
                    </h3>
                    <p className={`text-sm mb-4 ${post.color === "yellow" ? "text-black/80" : "text-white/90"}`}>
                      {post.excerpt}
                    </p>
                    <div className={`flex items-center gap-3 text-xs ${post.color === "yellow" ? "text-black/70" : "text-white/80"}`}>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </StickerCard>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-[#450693] text-white border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all font-bold uppercase tracking-wider">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-[#8c00ff] text-white border-t-[3px] border-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter for the latest updates and insights
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 border-[3px] border-black text-black font-medium"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-black border-[3px] border-white shadow-[4px_4px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#fff] transition-all font-bold uppercase tracking-wider whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
