interface TypographyScaleProps {
  title: string
  samples: {
    element: string
    className: string
    fontSize: string
    lineHeight: string
    fontWeight: string
    text: string
  }[]
}

export function TypographyScale({ title, samples }: TypographyScaleProps) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <h3 className="mb-6 font-semibold text-gray-900 text-xl">{title}</h3>
      <div className="space-y-6">
        {samples.map((sample, index) => (
          <div key={index} className="border-gray-100 border-b pb-4 last:border-b-0">
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3">
              {/* Typography Sample */}
              <div className="lg:col-span-2">
                <div
                  className={sample.className}
                  style={{
                    fontSize: sample.fontSize,
                    lineHeight: sample.lineHeight,
                    fontWeight: sample.fontWeight,
                  }}
                >
                  {sample.text}
                </div>
              </div>

              {/* Typography Details */}
              <div className="lg:col-span-1">
                <div className="space-y-1 text-gray-600 text-sm">
                  <div>
                    <strong>Element:</strong> {sample.element}
                  </div>
                  <div>
                    <strong>Class:</strong>{" "}
                    <code className="rounded bg-gray-100 px-1">{sample.className}</code>
                  </div>
                  <div>
                    <strong>Size:</strong> {sample.fontSize}
                  </div>
                  <div>
                    <strong>Line Height:</strong> {sample.lineHeight}
                  </div>
                  <div>
                    <strong>Weight:</strong> {sample.fontWeight}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
