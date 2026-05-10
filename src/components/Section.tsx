import type { ReactNode } from "react"

interface SectionProps {
  title: string
  description?: string
  children: ReactNode
}

export function Section({ title, description, children }: SectionProps) {
  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="mb-2 font-bold text-3xl text-gray-900">{title}</h2>
        {description && <p className="text-gray-600 text-lg">{description}</p>}
      </div>
      {children}
    </section>
  )
}
