import { Navigation } from '@/components/Navigation';
import { Section } from '@/components/Section';
import Link from 'next/link';

export default function PrinciplesPage() {
  return (
    <div className="min-h-screen bg-warm-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-deep-forest-green mb-4">
            Guiding Principles
          </h1>
          <p className="text-lg text-gray-700">
            The core values and philosophy that drive every design decision at MTWS. 
            These principles ensure our digital presence reflects our community's mission and values.
          </p>
        </div>

        <Section 
          title="Our Mission" 
          description="Understanding the foundation of our community guides every design choice we make."
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border shadow-sm p-8">
              <h3 className="text-2xl font-bold text-deep-forest-green mb-4">
                Community First
              </h3>
              <p className="text-gray-700 mb-4">
                Since 2002, Masjid Tawheed Was-Sunnah has served the Research Triangle Park area 
                as a center for worship, learning, and community building. Our digital presence 
                reflects this commitment to accessibility and inclusivity.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Welcoming to all backgrounds and levels of knowledge</li>
                <li>• Clear, jargon-free communication</li>
                <li>• Multilingual support (English and Arabic)</li>
                <li>• Accessible design for all abilities</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border shadow-sm p-8">
              <h3 className="text-2xl font-bold text-deep-forest-green mb-4">
                Educational Excellence
              </h3>
              <p className="text-gray-700 mb-4">
                We believe in the power of knowledge to transform lives. Our design system 
                prioritizes clarity, readability, and intuitive navigation to support learning.
              </p>
              <ul className="text-gray-600 space-y-2">
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
            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-primary-green to-olive-green p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Clarity Above All</h3>
                <p className="text-green-50">
                  Every design element should serve a clear purpose and enhance understanding.
                </p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">In Practice:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• High contrast ratios for optimal readability</li>
                      <li>• Generous white space to reduce visual clutter</li>
                      <li>• Logical information hierarchy</li>
                      <li>• Consistent iconography with clear meanings</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Example:</h4>
                    <div className="bg-gray-50 p-4 rounded border">
                      <div className="text-sm text-gray-600 mb-1">Seminar Information</div>
                      <div className="font-semibold text-gray-900 mb-2">Understanding Tawheed</div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>📅 December 15, 2024</div>
                        <div>🕐 7:00 PM - 9:00 PM</div>
                        <div>📍 Main Prayer Hall</div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Clear visual hierarchy with icons for quick scanning
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accessibility Principle */}
            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-sandy-gold to-olive-green p-6">
                <h3 className="text-2xl font-bold text-deep-forest-green mb-2">Universal Accessibility</h3>
                <p className="text-gray-800">
                  Design that works for everyone, regardless of ability or technology.
                </p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Visual</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• WCAG AA contrast compliance</li>
                      <li>• Scalable text and interfaces</li>
                      <li>• Color is never the only indicator</li>
                      <li>• Clear focus states</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Motor</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Minimum 44px touch targets</li>
                      <li>• Keyboard navigation support</li>
                      <li>• Generous click areas</li>
                      <li>• No time-sensitive actions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Cognitive</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
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
            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-deep-forest-green to-primary-green p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Cultural Sensitivity</h3>
                <p className="text-green-50">
                  Respectful representation of Islamic values and multicultural community.
                </p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Islamic Elements:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Authentic Arabic typography for Quranic text</li>
                      <li>• Appropriate use of Islamic terminology</li>
                      <li>• Respectful imagery and iconography</li>
                      <li>• Prayer time considerations in scheduling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Inclusive Design:</h4>
                    <ul className="text-gray-600 space-y-2">
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
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">We Are:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-primary-green">Welcoming & Warm</h4>
                    <p className="text-sm text-gray-600">
                      Using inclusive language that makes everyone feel at home, regardless of their background or level of Islamic knowledge.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-green">Clear & Direct</h4>
                    <p className="text-sm text-gray-600">
                      Avoiding jargon and explaining concepts in accessible terms. Information is presented logically and concisely.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-green">Respectful & Dignified</h4>
                    <p className="text-sm text-gray-600">
                      Maintaining the reverence appropriate for religious content while remaining approachable and human.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">We Avoid:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-red-600">Exclusionary Language</h4>
                    <p className="text-sm text-gray-600">
                      No assumptions about prior knowledge or background. We explain terms and provide context.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-600">Overly Casual Tone</h4>
                    <p className="text-sm text-gray-600">
                      While friendly, we maintain respect for the sacred nature of our content and community.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-600">Complexity for Its Own Sake</h4>
                    <p className="text-sm text-gray-600">
                      Simple, clear communication is always preferred over unnecessarily complex language.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Writing Examples */}
          <div className="mt-8 bg-white rounded-lg border shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Writing Examples</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">✓ Good</span>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="bg-green-50 p-4 rounded border border-green-200">
                    <p className="font-medium mb-1">Seminar Description:</p>
                    <p className="text-gray-700">
                      "Join us for an enlightening discussion about the concept of Tawheed (the Oneness of Allah). 
                      This session is perfect for anyone wanting to deepen their understanding, whether you're new to Islam or seeking to strengthen your knowledge."
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded border border-green-200">
                    <p className="font-medium mb-1">Error Message:</p>
                    <p className="text-gray-700">
                      "We couldn't process your registration right now. Please check your internet connection and try again. 
                      If you continue to have trouble, feel free to contact us at tech@mtws.org."
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">✗ Avoid</span>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="bg-red-50 p-4 rounded border border-red-200">
                    <p className="font-medium mb-1">Too Exclusive:</p>
                    <p className="text-gray-700">
                      "Advanced seminar on Tawheed for serious students of Islamic theology. 
                      Basic knowledge of Arabic and Islamic jurisprudence assumed."
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded border border-red-200">
                    <p className="font-medium mb-1">Unhelpful Error:</p>
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
          <div className="bg-white rounded-lg border shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Before You Design or Code</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Questions to Ask:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2 mt-1">•</span>
                    <span>Does this serve our community's needs?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2 mt-1">•</span>
                    <span>Is this accessible to users with different abilities?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2 mt-1">•</span>
                    <span>Can someone new to our community understand this?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2 mt-1">•</span>
                    <span>Does this respect our Islamic values and diversity?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2 mt-1">•</span>
                    <span>Is this the simplest way to achieve the goal?</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Success Metrics:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2 mt-1">•</span>
                    <span>Users can complete tasks without assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2 mt-1">•</span>
                    <span>Content is accessible across devices and assistive technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2 mt-1">•</span>
                    <span>Community feedback indicates feeling welcomed and understood</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2 mt-1">•</span>
                    <span>New visitors can navigate and find relevant information easily</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-green mr-2 mt-1">•</span>
                    <span>Load times and performance meet accessibility standards</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Resources for Team Members</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <a 
                  href="https://www.w3.org/WAI/WCAG21/quickref/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-center group hover:bg-gray-50 p-4 rounded-lg transition-colors"
                >
                  <div className="w-12 h-12 bg-sandy-gold rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:bg-sandy-gold/80 transition-colors">
                    <svg className="w-6 h-6 text-deep-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h5 className="font-medium text-gray-900 group-hover:text-primary-green transition-colors">WCAG Guidelines</h5>
                  <p className="text-sm text-gray-600">Reference for accessibility standards</p>
                </a>
                <a 
                  href="https://design.mtws.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-center group hover:bg-gray-50 p-4 rounded-lg transition-colors"
                >
                  <div className="w-12 h-12 bg-sandy-gold rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:bg-sandy-gold/80 transition-colors">
                    <svg className="w-6 h-6 text-deep-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <h5 className="font-medium text-gray-900 group-hover:text-primary-green transition-colors">Component Library</h5>
                  <p className="text-sm text-gray-600">Pre-built, tested components</p>
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* Final Call to Action */}
        <div className="mt-16 bg-white rounded-xl p-8 text-center border shadow-lg">
          <h2 className="text-3xl font-bold text-deep-forest-green mb-4">
            Building Together
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            These principles guide us, but they evolve with our community. 
            Your feedback and contributions help us create digital experiences 
            that truly serve our mission.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:tech@mtws.org"
              className="inline-block bg-primary-green text-white px-6 py-3 rounded-lg hover:bg-primary-green/90 transition-colors font-medium"
            >
              Share Feedback
            </a>
            <Link
              href="/components"
              className="inline-block bg-sandy-gold text-deep-forest-green px-6 py-3 rounded-lg hover:bg-sandy-gold/90 transition-colors font-medium"
            >
              View Components
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}