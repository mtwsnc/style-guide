import Link from "next/link"
import { Navigation } from "@/components/Navigation"
import { Section } from "@/components/Section"

export default function PrinciplesPage() {
  return (
    <div className="min-h-screen bg-warm-background">
      <Navigation />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="mb-4 font-bold text-4xl text-deep-forest-green">Guiding Principles</h1>
          <p className="text-gray-700 text-lg">
            The core values and philosophy that drive every design decision at MTWS. These
            principles ensure our digital presence reflects our community's mission and values.
          </p>
        </div>

        <Section
          title="Our Mission"
          description="Understanding the foundation of our community guides every design choice we make."
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-white p-8 shadow-sm">
              <h3 className="mb-4 font-bold text-2xl text-deep-forest-green">Community First</h3>
              <p className="mb-4 text-gray-700">
                Since 2002, Masjid Tawheed Was-Sunnah has served the Research Triangle Park area as
                a center for worship, learning, and community building. Our digital presence
                reflects this commitment to accessibility and inclusivity.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Welcoming to all backgrounds and levels of knowledge</li>
                <li>• Clear, jargon-free communication</li>
                <li>• Multilingual support (English and Arabic)</li>
                <li>• Accessible design for all abilities</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-white p-8 shadow-sm">
              <h3 className="mb-4 font-bold text-2xl text-deep-forest-green">
                Educational Excellence
              </h3>
              <p className="mb-4 text-gray-700">
                We believe in the power of knowledge to transform lives. Our design system
                prioritizes clarity, readability, and intuitive navigation to support learning.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Information hierarchy that guides understanding</li>
                <li>• Readable typography optimized for long-form content</li>
                <li>• Interactive elements that engage learners</li>
                <li>• Consistent patterns that reduce cognitive load</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section
          title="Design Philosophy"
          description="How our values translate into concrete design decisions."
        >
          <div className="space-y-8">
            {/* Clarity Principle */}
            <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
              <div className="bg-gradient-to-r from-primary-green to-olive-green p-6">
                <h3 className="mb-2 font-bold text-2xl text-white">Clarity Above All</h3>
                <p className="text-green-50">
                  Every design element should serve a clear purpose and enhance understanding.
                </p>
              </div>
              <div className="p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">In Practice:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• High contrast ratios for optimal readability</li>
                      <li>• Generous white space to reduce visual clutter</li>
                      <li>• Logical information hierarchy</li>
                      <li>• Consistent iconography with clear meanings</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">Example:</h4>
                    <div className="rounded border bg-gray-50 p-4">
                      <div className="mb-1 text-gray-600 text-sm">Seminar Information</div>
                      <div className="mb-2 font-semibold text-gray-900">Understanding Tawheed</div>
                      <div className="space-y-1 text-gray-600 text-sm">
                        <div>📅 December 15, 2024</div>
                        <div>🕐 7:00 PM - 9:00 PM</div>
                        <div>📍 Main Prayer Hall</div>
                      </div>
                      <p className="mt-2 text-gray-500 text-xs">
                        Clear visual hierarchy with icons for quick scanning
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accessibility Principle */}
            <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
              <div className="bg-gradient-to-r from-sandy-gold to-olive-green p-6">
                <h3 className="mb-2 font-bold text-2xl text-deep-forest-green">
                  Universal Accessibility
                </h3>
                <p className="text-gray-800">
                  Design that works for everyone, regardless of ability or technology.
                </p>
              </div>
              <div className="p-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">Visual</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• WCAG AA contrast compliance</li>
                      <li>• Scalable text and interfaces</li>
                      <li>• Color is never the only indicator</li>
                      <li>• Clear focus states</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">Motor</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Minimum 44px touch targets</li>
                      <li>• Keyboard navigation support</li>
                      <li>• Generous click areas</li>
                      <li>• No time-sensitive actions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">Cognitive</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Consistent patterns</li>
                      <li>• Clear error messages</li>
                      <li>• Logical navigation flows</li>
                      <li>• Ample white space</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Cultural Sensitivity Principle */}
            <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
              <div className="bg-gradient-to-r from-deep-forest-green to-primary-green p-6">
                <h3 className="mb-2 font-bold text-2xl text-white">Cultural Sensitivity</h3>
                <p className="text-green-50">
                  Respectful representation of Islamic values and multicultural community.
                </p>
              </div>
              <div className="p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">Islamic Elements:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Authentic Arabic typography for Quranic text</li>
                      <li>• Appropriate use of Islamic terminology</li>
                      <li>• Respectful imagery and iconography</li>
                      <li>• Prayer time considerations in scheduling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">Inclusive Design:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Multilingual content support</li>
                      <li>• Diverse representation in imagery</li>
                      <li>• Gender-sensitive language and design</li>
                      <li>• Accommodation for different technical literacy levels</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          title="Tone of Voice"
          description="How we communicate through words to build trust and understanding."
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="mb-4 font-semibold text-gray-900 text-xl">We Are:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-primary-green">Welcoming & Warm</h4>
                    <p className="text-gray-600 text-sm">
                      Using inclusive language that makes everyone feel at home, regardless of their
                      background or level of Islamic knowledge.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-green">Clear & Direct</h4>
                    <p className="text-gray-600 text-sm">
                      Avoiding jargon and explaining concepts in accessible terms. Information is
                      presented logically and concisely.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-green">Respectful & Dignified</h4>
                    <p className="text-gray-600 text-sm">
                      Maintaining the reverence appropriate for religious content while remaining
                      approachable and human.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="mb-4 font-semibold text-gray-900 text-xl">We Avoid:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-red-600">Exclusionary Language</h4>
                    <p className="text-gray-600 text-sm">
                      No assumptions about prior knowledge or background. We explain terms and
                      provide context.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-600">Overly Casual Tone</h4>
                    <p className="text-gray-600 text-sm">
                      While friendly, we maintain respect for the sacred nature of our content and
                      community.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-600">Complexity for Its Own Sake</h4>
                    <p className="text-gray-600 text-sm">
                      Simple, clear communication is always preferred over unnecessarily complex
                      language.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Writing Examples */}
          <div className="mt-8 rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="mb-6 font-semibold text-gray-900 text-xl">Writing Examples</h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="mb-4">
                  <span className="rounded bg-green-100 px-2 py-1 text-green-800 text-xs">
                    ✓ Good
                  </span>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="rounded border border-green-200 bg-green-50 p-4">
                    <p className="mb-1 font-medium">Seminar Description:</p>
                    <p className="text-gray-700">
                      "Join us for an enlightening discussion about the concept of Tawheed (the
                      Oneness of Allah). This session is perfect for anyone wanting to deepen their
                      understanding, whether you're new to Islam or seeking to strengthen your
                      knowledge."
                    </p>
                  </div>
                  <div className="rounded border border-green-200 bg-green-50 p-4">
                    <p className="mb-1 font-medium">Error Message:</p>
                    <p className="text-gray-700">
                      "We couldn't process your registration right now. Please check your internet
                      connection and try again. If you continue to have trouble, feel free to
                      contact us at tech@mtws.org."
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <span className="rounded bg-red-100 px-2 py-1 text-red-800 text-xs">✗ Avoid</span>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="rounded border border-red-200 bg-red-50 p-4">
                    <p className="mb-1 font-medium">Too Exclusive:</p>
                    <p className="text-gray-700">
                      "Advanced seminar on Tawheed for serious students of Islamic theology. Basic
                      knowledge of Arabic and Islamic jurisprudence assumed."
                    </p>
                  </div>
                  <div className="rounded border border-red-200 bg-red-50 p-4">
                    <p className="mb-1 font-medium">Unhelpful Error:</p>
                    <p className="text-gray-700">
                      "Error 500: Internal server error occurred during form submission process."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          title="Implementation Guidelines"
          description="Practical guidance for applying these principles in real projects."
        >
          <div className="rounded-lg border bg-white p-8 shadow-sm">
            <h3 className="mb-6 font-bold text-2xl text-gray-900">Before You Design or Code</h3>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="mb-4 font-semibold text-gray-900 text-lg">Questions to Ask:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 text-primary-green">•</span>
                    <span>Does this serve our community's needs?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 text-primary-green">•</span>
                    <span>Is this accessible to users with different abilities?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 text-primary-green">•</span>
                    <span>Can someone new to our community understand this?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 text-primary-green">•</span>
                    <span>Does this respect our Islamic values and diversity?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 text-primary-green">•</span>
                    <span>Is this the simplest way to achieve the goal?</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-gray-900 text-lg">Success Metrics:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 text-primary-green">•</span>
                    <span>Users can complete tasks without assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 text-primary-green">•</span>
                    <span>Content is accessible across devices and assistive technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 text-primary-green">•</span>
                    <span>Community feedback indicates feeling welcomed and understood</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 text-primary-green">•</span>
                    <span>New visitors can navigate and find relevant information easily</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 text-primary-green">•</span>
                    <span>Load times and performance meet accessibility standards</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-gray-200 border-t pt-8">
              <h4 className="mb-4 font-semibold text-gray-900 text-lg">
                Resources for Team Members
              </h4>
              <div className="grid gap-6 md:grid-cols-2">
                <a
                  href="https://www.w3.org/WAI/WCAG21/quickref/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg p-4 text-center transition-colors hover:bg-gray-50"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-sandy-gold transition-colors group-hover:bg-sandy-gold/80">
                    <svg
                      className="h-6 w-6 text-deep-forest-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h5 className="font-medium text-gray-900 transition-colors group-hover:text-primary-green">
                    WCAG Guidelines
                  </h5>
                  <p className="text-gray-600 text-sm">Reference for accessibility standards</p>
                </a>
                <a
                  href="https://design.mtws.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg p-4 text-center transition-colors hover:bg-gray-50"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-sandy-gold transition-colors group-hover:bg-sandy-gold/80">
                    <svg
                      className="h-6 w-6 text-deep-forest-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V5z"
                      />
                    </svg>
                  </div>
                  <h5 className="font-medium text-gray-900 transition-colors group-hover:text-primary-green">
                    Component Library
                  </h5>
                  <p className="text-gray-600 text-sm">Pre-built, tested components</p>
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* Final Call to Action */}
        <div className="mt-16 rounded-xl border bg-white p-8 text-center shadow-lg">
          <h2 className="mb-4 font-bold text-3xl text-deep-forest-green">Building Together</h2>
          <p className="mx-auto mb-6 max-w-2xl text-gray-700">
            These principles guide us, but they evolve with our community. Your feedback and
            contributions help us create digital experiences that truly serve our mission.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:tech@mtws.org"
              className="inline-block rounded-lg bg-primary-green px-6 py-3 font-medium text-white transition-colors hover:bg-primary-green/90"
            >
              Share Feedback
            </a>
            <Link
              href="/components"
              className="inline-block rounded-lg bg-sandy-gold px-6 py-3 font-medium text-deep-forest-green transition-colors hover:bg-sandy-gold/90"
            >
              View Components
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
