"use client"

import type { ReactNode } from "react"

interface ComponentShowcaseProps {
  title: string
  description?: string
  children: ReactNode
  code: string
}

export function ComponentShowcase({ title, description, children, code }: ComponentShowcaseProps) {
  return (
    <div className="mb-12 rounded-lg border border-gray-200 bg-white p-6">
      <div className="mb-4">
        <h3 className="mb-2 font-semibold text-gray-900 text-xl">{title}</h3>
        {description && <p className="text-gray-600">{description}</p>}
      </div>

      {/* Live Component Demo */}
      <div className="mb-6 rounded-lg border bg-gray-50 p-6">
        <div className="flex flex-wrap items-center gap-4">{children}</div>
      </div>

      {/* Code Example */}
      <div className="rounded-lg bg-gray-900 p-4 text-sm">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-gray-400 text-xs">React/TypeScript</span>
          <button
            onClick={() => navigator.clipboard.writeText(code)}
            className="rounded px-2 py-1 text-gray-400 text-xs transition-colors hover:bg-gray-700 hover:text-white"
          >
            Copy
          </button>
        </div>
        <pre className="overflow-x-auto text-gray-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}
