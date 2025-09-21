'use client';

import { Navigation } from '@/components/Navigation';
import { Section } from '@/components/Section';
import { ColorSwatch } from '@/components/ColorSwatch';
import { TypographyScale } from '@/components/TypographyScale';
import { SpacingScale } from '@/components/SpacingScale';

export default function FoundationsPage() {
  const brandColors = [
    {
      name: "High Contrast Black",
      value: "#000000",
      description: "Primary text color for maximum readability",
      usage: ["Body text", "Headlines", "High-contrast elements"]
    },
    {
      name: "Deep Forest Green",
      value: "#132a1a",
      description: "Dark brand accent color for depth and sophistication",
      usage: ["Logo", "Primary navigation", "Section headers"]
    },
    {
      name: "Primary Green",
      value: "#407550",
      description: "Main brand color representing growth and harmony",
      usage: ["Primary buttons", "Links", "Active states", "Call-to-actions"]
    },
    {
      name: "Olive Green",
      value: "#82894d",
      description: "Secondary brand color for balance and natural feel",
      usage: ["Secondary buttons", "Borders", "Subtle accents"]
    },
    {
      name: "Sandy Gold",
      value: "#e7d296",
      description: "Warm accent color for highlights and emphasis",
      usage: ["Highlights", "Special buttons", "Accent elements"]
    },
    {
      name: "Warm Background",
      value: "#fdfbf5",
      description: "Main background color providing warmth and readability",
      usage: ["Page backgrounds", "Card backgrounds", "Content areas"]
    }
  ];

  const typographySamples = [
    {
      element: "h1",
      className: "text-5xl font-bold",
      fontSize: "3rem (48px)",
      lineHeight: "1.1",
      fontWeight: "700 (Bold)",
      text: "Page Title - The largest heading for main page titles"
    },
    {
      element: "h2",
      className: "text-3xl font-bold",
      fontSize: "1.875rem (30px)",
      lineHeight: "1.2",
      fontWeight: "700 (Bold)",
      text: "Section Title - For major content sections"
    },
    {
      element: "h3",
      className: "text-xl font-semibold",
      fontSize: "1.25rem (20px)",
      lineHeight: "1.3",
      fontWeight: "600 (Semibold)",
      text: "Subsection Title - For content subsections"
    },
    {
      element: "p",
      className: "text-base",
      fontSize: "1rem (16px)",
      lineHeight: "1.6",
      fontWeight: "400 (Regular)",
      text: "Body Text - Regular paragraph text for content. This is the most commonly used text style for reading content."
    },
    {
      element: "small",
      className: "text-sm text-gray-600",
      fontSize: "0.875rem (14px)",
      lineHeight: "1.5",
      fontWeight: "400 (Regular)",
      text: "Small Text - For captions, metadata, and secondary information"
    }
  ];

  const arabicSamples = [
    {
      element: "Arabic Uthmanic",
      className: "font-uthmanic text-xl",
      fontSize: "1.25rem (20px)",
      lineHeight: "1.8",
      fontWeight: "400 (Regular)",
      text: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ"
    },
    {
      element: "Arabic Riwaya",
      className: "font-riwaya text-lg",
      fontSize: "1.125rem (18px)",
      lineHeight: "1.7",
      fontWeight: "400 (Regular)",
      text: "مسجد التوحيد والسنة"
    }
  ];

  const spacingValues = [
    { name: "xs", value: "0.25rem", pixels: "4px", usage: "Minimal spacing, icon gaps" },
    { name: "sm", value: "0.5rem", pixels: "8px", usage: "Small component padding" },
    { name: "md", value: "1rem", pixels: "16px", usage: "Standard component spacing" },
    { name: "lg", value: "1.5rem", pixels: "24px", usage: "Section spacing, card padding" },
    { name: "xl", value: "2rem", pixels: "32px", usage: "Large section breaks" },
    { name: "2xl", value: "3rem", pixels: "48px", usage: "Major page sections" },
    { name: "3xl", value: "4rem", pixels: "64px", usage: "Hero sections, page headers" }
  ];

  return (
    <div className="min-h-screen bg-warm-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-deep-forest-green mb-4">
            Foundations
          </h1>
          <p className="text-lg text-gray-700">
            The atomic elements of our design system. These foundational elements ensure 
            consistency and accessibility across all digital experiences.
          </p>
        </div>

        <Section 
          title="Color Palette" 
          description="Our carefully selected colors represent the values and identity of MTWS. Each color has specific usage guidelines to maintain consistency and accessibility."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandColors.map((color, index) => (
              <ColorSwatch
                key={index}
                name={color.name}
                value={color.value}
                description={color.description}
                usage={color.usage}
              />
            ))}
          </div>
          
          {/* Accessibility Examples */}
          <div className="mt-8 bg-white rounded-lg border shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessible Color Combinations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-warm-background text-high-contrast-black p-4 rounded border">
                  <p className="font-medium">High Contrast Black on Warm Background</p>
                  <p className="text-sm">Perfect contrast ratio for body text</p>
                </div>
                <div className="bg-primary-green text-white p-4 rounded">
                  <p className="font-medium">White on Primary Green</p>
                  <p className="text-sm">Ideal for call-to-action buttons</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-sandy-gold text-deep-forest-green p-4 rounded">
                  <p className="font-medium">Deep Forest Green on Sandy Gold</p>
                  <p className="text-sm">Great for highlighted content</p>
                </div>
                <div className="bg-white text-olive-green p-4 rounded border">
                  <p className="font-medium">Olive Green on White</p>
                  <p className="text-sm">Perfect for secondary elements</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section 
          title="Typography" 
          description="Our typography system uses DM Sans for its excellent readability and modern appearance, with custom Arabic fonts for Islamic content."
        >
          <TypographyScale 
            title="English Typography - DM Sans"
            samples={typographySamples}
          />
          
          <div className="mt-8">
            <TypographyScale 
              title="Arabic Typography - Custom Fonts"
              samples={arabicSamples}
            />
          </div>
          
          {/* Font Information */}
          <div className="mt-8 bg-white rounded-lg border shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Font Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">DM Sans</h4>
                <p className="text-sm text-gray-600 mb-2">Primary font for all English content</p>
                <div className="text-xs text-gray-500">
                  <p>• Weights: 100-1000</p>
                  <p>• Google Fonts</p>
                  <p>• Excellent readability</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">UthmanicHafs</h4>
                <p className="text-sm text-gray-600 mb-2">For Quranic text and formal Arabic</p>
                <div className="text-xs text-gray-500">
                  <p>• Traditional Arabic script</p>
                  <p>• Optimized for Quranic text</p>
                  <p>• Class: .font-uthmanic</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">29LTRiwaya</h4>
                <p className="text-sm text-gray-600 mb-2">For general Arabic content</p>
                <div className="text-xs text-gray-500">
                  <p>• Modern Arabic design</p>
                  <p>• Great for headings</p>
                  <p>• Class: .font-riwaya</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section 
          title="Spacing & Layout" 
          description="Consistent spacing creates visual rhythm and hierarchy. Our spacing system is based on a 4px grid for precise alignment."
        >
          <SpacingScale values={spacingValues} />
          
          {/* Spacing Examples */}
          <div className="mt-8 bg-white rounded-lg border shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Spacing in Practice</h3>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Card Example</h4>
                <div className="bg-gray-50 rounded border-2 border-dashed border-gray-300 p-6">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h5 className="font-semibold mb-2">Card Title</h5>
                    <p className="text-gray-600 text-sm mb-4">Card content with proper spacing</p>
                    <button className="bg-primary-green text-white px-4 py-2 rounded">Action Button</button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  • Card padding: 24px (lg) • Content spacing: 16px (md) • Button padding: 8px 16px
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section 
          title="Iconography" 
          description="We use Lucide React icons for their consistency, clarity, and comprehensive coverage of common UI needs."
        >
          <div className="bg-white rounded-lg border shadow-sm p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {/* Sample icons would go here - you can expand this */}
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 7l5 5l5-5" />
                  </svg>
                </div>
                <p className="text-xs text-gray-600">Mail</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-xs text-gray-600">Phone</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-xs text-gray-600">Location</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-xs text-gray-600">Clock</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </div>
                <p className="text-xs text-gray-600">Share</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-xs text-gray-600">Check</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Icon Guidelines</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Standard size: 16px (1rem) or 24px (1.5rem)</li>
                <li>• Stroke width: 2px for consistency</li>
                <li>• Use semantic colors (primary-green for actions, gray for neutral)</li>
                <li>• Always include proper alt text for accessibility</li>
              </ul>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}