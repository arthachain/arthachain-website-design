import { ReactNode } from "react"

interface StickerCardProps {
  children: ReactNode
  className?: string
  color?: "purple" | "bright" | "pink" | "yellow" | "white"
  hover?: boolean
}

export default function StickerCard({ 
  children, 
  className = "", 
  color = "white",
  hover = true 
}: StickerCardProps) {
  const bgColors = {
    purple: "bg-[#450693] text-white",
    bright: "bg-[#8c00ff] text-white",
    pink: "bg-[#ff3f7f] text-white",
    yellow: "bg-[#ffc400] text-black",
    white: "bg-white text-black",
  }

  const baseClasses = `border-[3px] border-black shadow-[6px_6px_0px_#000] p-6 ${bgColors[color]}`
  const hoverClasses = hover ? "transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#000]" : ""

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
}
