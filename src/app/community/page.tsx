import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import StickerCard from "@/components/StickerCard"
import { MessageCircle, Twitter, Github, Send, Users, Calendar, Award, Heart } from "lucide-react"

export const metadata = {
  title: "Community | ArthaChain",
  description: "Join the ArthaChain community and connect with developers worldwide",
}

export default function CommunityPage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection
          title="Join Our Community"
          subtitle="Connect with developers, validators, and enthusiasts worldwide"
          pattern="dots"
        />

        {/* Stats */}
        <section className="py-20 bg-white border-b-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StickerCard color="purple" hover={false}>
                <Users className="w-10 h-10 text-white mb-3" />
                <div className="text-4xl font-bold text-white mb-2">50K+</div>
                <div className="text-sm uppercase tracking-wider text-white/80">Community Members</div>
              </StickerCard>

              <StickerCard color="bright" hover={false}>
                <Calendar className="w-10 h-10 text-white mb-3" />
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-sm uppercase tracking-wider text-white/80">Events Per Year</div>
              </StickerCard>

              <StickerCard color="pink" hover={false}>
                <Award className="w-10 h-10 text-white mb-3" />
                <div className="text-4xl font-bold text-white mb-2">25</div>
                <div className="text-sm uppercase tracking-wider text-white/80">Hackathons</div>
              </StickerCard>

              <StickerCard color="yellow" hover={false}>
                <Heart className="w-10 h-10 text-black mb-3" />
                <div className="text-4xl font-bold text-black mb-2">1.2K+</div>
                <div className="text-sm uppercase tracking-wider text-black/80">Contributors</div>
              </StickerCard>
            </div>
          </div>
        </section>

        {/* Social Channels */}
        <section className="py-20 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Connect With Us
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join the conversation on your favorite platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                href="https://discord.gg/arthachain"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <StickerCard color="purple">
                  <MessageCircle className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Discord</h3>
                  <p className="text-white/90 text-sm mb-3">
                    Join 35K+ members for live discussions and support
                  </p>
                  <div className="text-white/80 text-xs uppercase tracking-wider">Most Active</div>
                </StickerCard>
              </a>

              <a
                href="https://twitter.com/arthachain"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <StickerCard color="bright">
                  <Twitter className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Twitter</h3>
                  <p className="text-white/90 text-sm mb-3">
                    Follow for updates, announcements, and ecosystem news
                  </p>
                  <div className="text-white/80 text-xs uppercase tracking-wider">15K Followers</div>
                </StickerCard>
              </a>

              <a
                href="https://github.com/arthachain"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <StickerCard color="pink">
                  <Github className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">GitHub</h3>
                  <p className="text-white/90 text-sm mb-3">
                    Contribute to our open-source codebase
                  </p>
                  <div className="text-white/80 text-xs uppercase tracking-wider">1.2K Contributors</div>
                </StickerCard>
              </a>

              <a
                href="https://t.me/arthachain"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <StickerCard color="yellow">
                  <Send className="w-12 h-12 text-black mb-4" />
                  <h3 className="text-2xl font-bold text-black mb-2">Telegram</h3>
                  <p className="text-black/80 text-sm mb-3">
                    Real-time chat with community members
                  </p>
                  <div className="text-black/70 text-xs uppercase tracking-wider">20K Members</div>
                </StickerCard>
              </a>
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="py-20 bg-white border-t-[3px] border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join us at conferences, hackathons, and community meetups
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-[3px] border-black shadow-[4px_4px_0px_#000] bg-white p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-[#450693] text-white border-[2px] border-black text-xs font-bold uppercase tracking-wider mb-3">
                      Virtual Hackathon
                    </div>
                    <h3 className="text-2xl font-bold mb-2">ArthaChain Global Hackathon 2024</h3>
                    <p className="text-gray-700 mb-2">Build the next generation of AI-powered dApps</p>
                    <p className="text-sm text-gray-600">December 15-17, 2024 • $100K in prizes</p>
                  </div>
                  <a
                    href="/events/hackathon"
                    className="px-6 py-3 bg-[#450693] text-white border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all font-bold uppercase tracking-wider text-sm whitespace-nowrap"
                  >
                    Register Now
                  </a>
                </div>
              </div>

              <div className="border-[3px] border-black shadow-[4px_4px_0px_#000] bg-white p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-[#8c00ff] text-white border-[2px] border-black text-xs font-bold uppercase tracking-wider mb-3">
                      Conference
                    </div>
                    <h3 className="text-2xl font-bold mb-2">ArthaChain Summit 2025</h3>
                    <p className="text-gray-700 mb-2">Annual developer conference with workshops and talks</p>
                    <p className="text-sm text-gray-600">January 20-22, 2025 • San Francisco, CA</p>
                  </div>
                  <a
                    href="/events/summit"
                    className="px-6 py-3 bg-[#8c00ff] text-white border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all font-bold uppercase tracking-wider text-sm whitespace-nowrap"
                  >
                    Get Tickets
                  </a>
                </div>
              </div>

              <div className="border-[3px] border-black shadow-[4px_4px_0px_#000] bg-white p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-[#ff3f7f] text-white border-[2px] border-black text-xs font-bold uppercase tracking-wider mb-3">
                      Meetup
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Local Developer Meetups</h3>
                    <p className="text-gray-700 mb-2">Monthly meetups in 50+ cities worldwide</p>
                    <p className="text-sm text-gray-600">Ongoing • Check your local chapter</p>
                  </div>
                  <a
                    href="/events/meetups"
                    className="px-6 py-3 bg-[#ff3f7f] text-white border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all font-bold uppercase tracking-wider text-sm whitespace-nowrap"
                  >
                    Find Meetup
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ambassador Program */}
        <section className="py-20 bg-[#ffc400] border-t-[3px] border-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Become an Ambassador
            </h2>
            <p className="text-xl mb-8">
              Help grow the ArthaChain community in your region and earn rewards
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="border-[3px] border-black bg-white p-6 shadow-[4px_4px_0px_#000]">
                <h3 className="text-xl font-bold mb-2">Organize Events</h3>
                <p className="text-sm text-gray-700">Host meetups and workshops</p>
              </div>
              <div className="border-[3px] border-black bg-white p-6 shadow-[4px_4px_0px_#000]">
                <h3 className="text-xl font-bold mb-2">Create Content</h3>
                <p className="text-sm text-gray-700">Write tutorials and guides</p>
              </div>
              <div className="border-[3px] border-black bg-white p-6 shadow-[4px_4px_0px_#000]">
                <h3 className="text-xl font-bold mb-2">Earn Rewards</h3>
                <p className="text-sm text-gray-700">Get tokens and merch</p>
              </div>
            </div>
            <a
              href="/ambassador"
              className="inline-block px-8 py-4 bg-[#450693] text-white border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all font-bold uppercase tracking-wider"
            >
              Apply Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
