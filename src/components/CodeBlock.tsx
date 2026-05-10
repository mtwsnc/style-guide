"use client"

import { Check, Copy } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/Button"

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

export function CodeBlock({ code, language = "tsx", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code:", err)
    }
  }

  return (
    <div className="relative overflow-hidden rounded-lg bg-gray-900">
      {title && (
        <div className="bg-gray-800 px-4 py-2 font-medium text-gray-300 text-sm">{title}</div>
      )}
      <div className="p-4">
        <div className="absolute top-2 right-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <pre className="overflow-x-auto text-gray-300 text-sm">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  )
}
