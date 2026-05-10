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
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <h3 className="mb-6 font-semibold text-gray-900 text-xl">Spacing Scale</h3>
      <div className="space-y-4">
        {values.map((spacing, index) => {
          const px = spacing.pixels ?? spacing.value
          return (
            <div
              key={index}
              className="flex items-center gap-6 rounded-lg border border-gray-100 p-4"
            >
              <div className="flex w-28 flex-shrink-0 items-center gap-2">
                <div
                  className="bg-primary-green"
                  style={{ width: px, height: "20px", minWidth: "4px" }}
                />
                <span className="text-gray-600 text-sm">{px}</span>
              </div>

              <div className="flex flex-1 flex-wrap items-center gap-3">
                <code className="rounded bg-gray-100 px-2 py-1 font-mono text-sm">
                  {spacing.name}
                </code>
                {spacing.token && (
                  <code className="font-mono text-olive-green text-xs">{spacing.token}</code>
                )}
                <span className="text-gray-600 text-sm">{spacing.usage}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
