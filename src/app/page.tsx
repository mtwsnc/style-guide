import { Navigation } from '@/components/Navigation';
import { Palette, Component, BookOpen } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-warm-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-deep-forest-green mb-6">
            MTWS Design System
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            A living, interactive style guide and design system for Masjid Tawheed Was-Sunnah. 
            This is not a static document—it's a dynamic, always-up-to-date representation 
            of our brand's digital identity.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/foundations"
              className="bg-primary-green text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all font-medium"
            >
              Explore Foundations
            </a>
            <a
              href="/components"
              className="border border-primary-green text-primary-green px-6 py-3 rounded-lg hover:bg-primary-green hover:text-white transition-all font-medium"
            >
              View Components
            </a>
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 mb-4">
              This style guide transforms our brand from a passive blueprint into an active, 
              indispensable tool for our entire team. Built using the same code components 
              as our live website, it can never be out of date.
            </p>
            <p className="text-gray-700">
              It creates a "single source of truth" that is dynamic, interactive, and 
              always perfectly in sync with our live website.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-green mr-2">•</span>
                <span><strong>Absolute Consistency:</strong> Undeniable source of truth with no room for interpretation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2">•</span>
                <span><strong>Enhanced Efficiency:</strong> Pre-built, pre-approved components accelerate development</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2">•</span>
                <span><strong>Better Collaboration:</strong> Shared universal language for designers and developers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-sandy-gold rounded-lg mb-4 flex items-center justify-center">
              <Palette className="w-6 h-6 text-deep-forest-green" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Foundations</h3>
            <p className="text-gray-600 mb-4">
              Color palette, typography, spacing, and iconography—the atomic elements of our design.
            </p>
            <a href="/foundations" className="text-primary-green hover:underline font-medium">
              View Foundations →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-sandy-gold rounded-lg mb-4 flex items-center justify-center">
              <Component className="w-6 h-6 text-deep-forest-green" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Components</h3>
            <p className="text-gray-600 mb-4">
              Live, interactive inventory of every UI component with copy-code functionality.
            </p>
            <a href="/components" className="text-primary-green hover:underline font-medium">
              View Components →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-sandy-gold rounded-lg mb-4 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-deep-forest-green" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Principles</h3>
            <p className="text-gray-600 mb-4">
              Our mission, values, and tone of voice that guide all design decisions.
            </p>
            <a href="/principles" className="text-primary-green hover:underline font-medium">
              View Principles →
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>Built with the same components as our live website • Always in sync • Never outdated</p>
        </div>
      </div>
    </div>
  );
}