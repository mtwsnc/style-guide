import React from "react"

interface SpacingScaleProps {
  values: {
    name: string
    token?: string
    value: string
    pixels?: string
    usage: string
  }[]
}

export function SpacingScale({ values }: SpacingScaleProps) {
  return (
    <div className="bg-white rounded-lg border shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Spacing Scale</h3>
      <div className="space-y-4">
        {values.map((spacing, index) => {
          const px = spacing.pixels ?? spacing.value
          return (
            <div
              key={index}
              className="flex items-center gap-6 p-4 border border-gray-100 rounded-lg"
            >
              <div className="flex items-center gap-2 w-28 flex-shrink-0">
                <div
                  className="bg-primary-green"
                  style={{ width: px, height: "20px", minWidth: "4px" }}
                />
                <span className="text-sm text-gray-600">{px}</span>
              </div>

              <div className="flex-1 flex flex-wrap items-center gap-3">
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                  {spacing.name}
                </code>
                {spacing.token && (
                  <code className="text-xs text-olive-green font-mono">{spacing.token}</code>
                )}
                <span className="text-sm text-gray-600">{spacing.usage}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
