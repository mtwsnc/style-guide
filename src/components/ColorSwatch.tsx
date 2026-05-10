"use client"

import { useState } from "react"

interface ColorSwatchProps {
  name: string
  token?: string
  value: string
  description: string
  usage: string[]
}

export function ColorSwatch({ name, token, value, description, usage }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy color:", err)
    }
  }

  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
      <div
        className="group relative flex h-24 cursor-pointer items-center justify-center"
        style={{ backgroundColor: value }}
        onClick={copyToClipboard}
      >
        <div className="rounded bg-black bg-opacity-50 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
          {copied ? "Copied!" : "Click to copy"}
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <code
            className="cursor-pointer rounded bg-gray-100 px-2 py-1 text-xs transition-colors hover:bg-gray-200"
            onClick={copyToClipboard}
          >
            {value}
          </code>
        </div>
        {token && <code className="mb-2 block font-mono text-olive-green text-xs">{token}</code>}
        <p className="mb-3 text-gray-600 text-sm">{description}</p>
        <div>
          <h4 className="mb-1 font-medium text-gray-900 text-xs">Usage:</h4>
          <ul className="text-gray-600 text-xs">
            {usage.map((use, index) => (
              <li key={index}>• {use}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
