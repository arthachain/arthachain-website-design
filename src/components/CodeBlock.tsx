"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

export default function CodeBlock({ code, language = "bash", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="border-[3px] border-black shadow-[4px_4px_0px_#000] bg-[#1a1a1a] overflow-hidden">
      {title && (
        <div className="border-b-[3px] border-black bg-[#ffc400] px-4 py-2 flex items-center justify-between">
          <span className="font-bold text-sm uppercase tracking-wider">{title}</span>
          <span className="text-xs bg-black text-white px-2 py-1 border-[2px] border-black">
            {language}
          </span>
        </div>
      )}
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 bg-white border-[2px] border-white hover:bg-[#ffc400] transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
        <pre className="p-4 overflow-x-auto">
          <code className="text-[#8c00ff] text-sm font-mono">{code}</code>
        </pre>
      </div>
    </div>
  )
}
