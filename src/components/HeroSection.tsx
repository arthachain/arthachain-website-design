import { ReactNode } from "react"

interface HeroSectionProps {
  title: string
  subtitle?: string
  children?: ReactNode
  pattern?: "dots" | "grid" | "lines"
}

export default function HeroSection({ 
  title, 
  subtitle, 
  children,
  pattern = "dots" 
}: HeroSectionProps) {
  const patterns = {
    dots: "bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]",
    grid: "bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]",
    lines: "bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_11px)]",
  }

  return (
    <section className="relative overflow-hidden bg-[#ffc400] border-b-[3px] border-black">
      <div className={`absolute inset-0 opacity-5 ${patterns[pattern]}`} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl">
          <h1 
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl lg:text-2xl mb-8 text-black/80">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
      
      {/* Decorative Doodle Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border-[3px] border-black rotate-12 hidden lg:block" />
      <div className="absolute bottom-10 right-32 w-16 h-16 bg-[#ff3f7f] border-[3px] border-black -rotate-6 hidden lg:block" />
      <div className="absolute top-32 right-64 w-12 h-12 bg-[#8c00ff] border-[3px] border-black rotate-45 hidden lg:block" />
    </section>
  )
}
