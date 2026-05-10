import { BookOpen, Component, Palette } from "lucide-react"
import { Navigation } from "@/components/Navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-warm-background">
      <Navigation />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 font-bold text-5xl text-deep-forest-green">MTWS Design System</h1>
          <p className="mx-auto mb-8 max-w-3xl text-gray-700 text-xl">
            A living, interactive style guide and design system for Masjid Tawheed Was-Sunnah. This
            is not a static document—it's a dynamic, always-up-to-date representation of our brand's
            digital identity.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/foundations"
              className="rounded-lg bg-primary-green px-6 py-3 font-medium text-white transition-all hover:opacity-90"
            >
              Explore Foundations
            </a>
            <a
              href="/components"
              className="rounded-lg border border-primary-green px-6 py-3 font-medium text-primary-green transition-all hover:bg-primary-green hover:text-white"
            >
              View Components
            </a>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-16 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 font-bold text-3xl text-gray-900">Our Vision</h2>
            <p className="mb-4 text-gray-700">
              This style guide transforms our brand from a passive blueprint into an active,
              indispensable tool for our entire team. Built using the same code components as our
              live website, it can never be out of date.
            </p>
            <p className="text-gray-700">
              It creates a "single source of truth" that is dynamic, interactive, and always
              perfectly in sync with our live website.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="mb-4 font-semibold text-gray-900 text-xl">Key Benefits</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-primary-green">•</span>
                <span>
                  <strong>Absolute Consistency:</strong> Undeniable source of truth with no room for
                  interpretation
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary-green">•</span>
                <span>
                  <strong>Enhanced Efficiency:</strong> Pre-built, pre-approved components
                  accelerate development
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary-green">•</span>
                <span>
                  <strong>Better Collaboration:</strong> Shared universal language for designers and
                  developers
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sandy-gold">
              <Palette className="h-6 w-6 text-deep-forest-green" />
            </div>
            <h3 className="mb-2 font-semibold text-gray-900 text-xl">Foundations</h3>
            <p className="mb-4 text-gray-600">
              Color palette, typography, spacing, and iconography—the atomic elements of our design.
            </p>
            <a href="/foundations" className="font-medium text-primary-green hover:underline">
              View Foundations →
            </a>
          </div>

          <div className="rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sandy-gold">
              <Component className="h-6 w-6 text-deep-forest-green" />
            </div>
            <h3 className="mb-2 font-semibold text-gray-900 text-xl">Components</h3>
            <p className="mb-4 text-gray-600">
              Live, interactive inventory of every UI component with copy-code functionality.
            </p>
            <a href="/components" className="font-medium text-primary-green hover:underline">
              View Components →
            </a>
          </div>

          <div className="rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sandy-gold">
              <BookOpen className="h-6 w-6 text-deep-forest-green" />
            </div>
            <h3 className="mb-2 font-semibold text-gray-900 text-xl">Principles</h3>
            <p className="mb-4 text-gray-600">
              Our mission, values, and tone of voice that guide all design decisions.
            </p>
            <a href="/principles" className="font-medium text-primary-green hover:underline">
              View Principles →
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-gray-200 border-t pt-8 text-center text-gray-600">
          <p>
            Built with the same components as our live website • Always in sync • Never outdated
          </p>
        </div>
      </div>
    </div>
  )
}
