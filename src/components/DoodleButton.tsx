import { ReactNode, ButtonHTMLAttributes } from "react"

interface DoodleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary" | "accent" | "outline"
  size?: "sm" | "md" | "lg"
  href?: string
}

export default function DoodleButton({ 
  children, 
  variant = "primary",
  size = "md",
  className = "",
  href,
  ...props 
}: DoodleButtonProps) {
  const variants = {
    primary: "bg-[#450693] text-white hover:bg-[#5a0bb8]",
    secondary: "bg-[#8c00ff] text-white hover:bg-[#a020ff]",
    accent: "bg-[#ff3f7f] text-white hover:bg-[#ff5a94]",
    outline: "bg-white text-black hover:bg-[#f5f5f5]",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const classes = `doodle-button ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
