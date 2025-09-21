'use client';

import { Navigation } from '@/components/Navigation';
import { Section } from '@/components/Section';
import { ComponentShowcase } from '@/components/ComponentShowcase';
import { Button } from '@/components/ui/Button';
import AudioPlayer from '@/components/ui/AudioPlayer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { Link, Hash, Component, Play, Navigation as NavIcon, AlertCircle, Layout } from 'lucide-react';

export default function ComponentsPage() {
  const componentSections = [
    { id: 'audio', title: 'Audio Player', icon: Play, description: 'Media playback with controls' },
    { id: 'buttons', title: 'Buttons', icon: Component, description: 'Interactive buttons and actions' },
    { id: 'cards', title: 'Cards', icon: Layout, description: 'Content containers' },
    { id: 'forms', title: 'Forms & Inputs', icon: Hash, description: 'Form elements and inputs' },
    { id: 'navigation', title: 'Navigation', icon: NavIcon, description: 'Navigation components' },
    { id: 'status', title: 'Status & Feedback', icon: AlertCircle, description: 'Alerts and status indicators' },
    { id: 'layout', title: 'Layout Components', icon: Layout, description: 'Structural layout elements' },
  ];

  return (
    <div className="min-h-screen bg-warm-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-deep-forest-green mb-4">
            Components
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Live, interactive inventory of every UI component. Each component is rendered 
            with the exact same code used on our main website, ensuring perfect consistency.
          </p>

          {/* Table of Contents */}
          <div className="bg-white rounded-lg border shadow-sm p-6 mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Hash className="w-5 h-5" />
              Component Index
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {componentSections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-sandy-gold rounded-lg flex items-center justify-center group-hover:bg-primary-green group-hover:text-white transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover:text-primary-green transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-sm text-gray-600">{section.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <Section 
          title="Audio Player" 
          description="Interactive audio player with playback controls and progress tracking."
        >
          <div id="audio">
            <ComponentShowcase
              title="Audio Player Component"
              description="Full-featured audio player used throughout the MTWS website for Islamic content playback."
              code={`import AudioPlayer from '@/components/ui/AudioPlayer';

<AudioPlayer
  src="/assets/general/A-Glimpse-into-the-Religion-of-Islam-Audiobook1.mp3"
  title="A Glimpse into the Religion of Islam"
  artist="Masjid Tawheed Was-Sunnah"
  cover="/assets/general/eng-islam-audiobook.jpg"
/>`}
            >
              <div className="w-full max-w-md">
                <AudioPlayer
                  src="/assets/general/A-Glimpse-into-the-Religion-of-Islam-Audiobook1.mp3"
                  title="A Glimpse into the Religion of Islam"
                  artist="Masjid Tawheed Was-Sunnah"
                  cover="/assets/general/eng-islam-audiobook.jpg"
                />
              </div>
            </ComponentShowcase>
          </div>
        </Section>

        <Section 
          title="Buttons" 
          description="Interactive buttons with various styles and states for different use cases."
        >
          <div id="buttons">
          <ComponentShowcase
            title="Button Variants"
            description="Different button styles for various contexts and emphasis levels."
            code={`import { Button } from '@/components/ui/Button';

// Primary button (default)
<Button>Primary Button</Button>

// Secondary button with outline
<Button variant="outline">Secondary Button</Button>

// Destructive button for dangerous actions
<Button variant="destructive">Delete</Button>

// Ghost button for subtle actions
<Button variant="ghost">Ghost Button</Button>

// Link style button
<Button variant="link">Link Button</Button>`}
          >
            <Button>Primary Button</Button>
            <Button variant="outline">Secondary Button</Button>
            <Button variant="destructive">Delete</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
          </ComponentShowcase>

          <ComponentShowcase
            title="Button Sizes"
            description="Different button sizes for various layout contexts."
            code={`import { Button } from '@/components/ui/Button';

// Small button
<Button size="sm">Small</Button>

// Default button
<Button>Default</Button>

// Large button
<Button size="lg">Large</Button>

// Icon button
<Button size="icon">
  <Icon />
</Button>`}
          >
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </Button>
          </ComponentShowcase>

          <ComponentShowcase
            title="Button States"
            description="Visual representation of different button states."
            code={`import { Button } from '@/components/ui/Button';

// Normal state
<Button>Normal</Button>

// Disabled state
<Button disabled>Disabled</Button>

// Loading state (custom implementation)
<Button disabled>
  <Spinner className="mr-2" />
  Loading...
</Button>`}
          >
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
            <Button disabled className="opacity-70">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </Button>
          </ComponentShowcase>
          </div>
        </Section>

        <Section 
          title="Cards" 
          description="Flexible content containers with consistent styling and spacing."
        >
          <div id="cards">
            <ComponentShowcase
              title="Basic Card"
              description="Standard card layout with header, content, and footer."
              code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

<Card className="w-full max-w-md">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>
      Card description or subtitle goes here
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the main content area of the card.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
            >
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>
                    Card description or subtitle goes here
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">This is the main content area of the card.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Action</Button>
                </CardFooter>
              </Card>
            </ComponentShowcase>

            <ComponentShowcase
              title="Seminar Card Example"
              description="Card styled for displaying seminar information."
              code={`<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Understanding Tawheed</CardTitle>
    <CardDescription>
      Shaykh Rasheed Barbee
    </CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-2 text-sm text-gray-600">
      <div>📅 December 15, 2024</div>
      <div>🕐 7:00 PM - 9:00 PM</div>
      <div>📍 MTWS 3714 S. Alston Ave. Durham NC 27713</div>
    </div>
  </CardContent>
  <CardFooter>
    <Button size="sm">Register</Button>
  </CardFooter>
</Card>`}
            >
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle>Understanding Tawheed</CardTitle>
                  <CardDescription>
                    Shaykh Rasheed Barbee
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>📅 December 15, 2024</div>
                    <div>🕐 7:00 PM - 9:00 PM</div>
                    <div>📍 MTWS 3714 S. Alston Ave. Durham NC 27713</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Register</Button>
                </CardFooter>
              </Card>
            </ComponentShowcase>
          </div>
        </Section>

        <Section 
          title="Forms & Inputs" 
          description="Form elements with consistent styling and validation states."
        >
          <ComponentShowcase
            title="Text Input"
            description="Standard text input with label and placeholder."
            code={`import { Input } from '@/components/ui/Input';

<div className="space-y-2">
  <label htmlFor="email" className="text-sm font-medium">
    Email Address
  </label>
  <Input
    id="email"
    type="email"
    placeholder="your.email@example.com"
  />
</div>`}
          >
            <div className="space-y-2 w-full max-w-sm">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </ComponentShowcase>

          <ComponentShowcase
            title="Contact Form"
            description="Example contact form with multiple input types."
            code={`import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

<form className="space-y-4">
  <div>
    <label className="text-sm font-medium">Name</label>
    <Input placeholder="Your full name" />
  </div>
  <div>
    <label className="text-sm font-medium">Email</label>
    <Input type="email" placeholder="your.email@example.com" />
  </div>
  <div>
    <label className="text-sm font-medium">Message</label>
    <textarea 
      className="w-full p-3 border rounded-md"
      rows={4}
      placeholder="Your message..."
    />
  </div>
  <Button type="submit">Send Message</Button>
</form>`}
          >
            <form className="space-y-4 w-full max-w-md">
              <div>
                <label className="text-sm font-medium block mb-1">Name</label>
                <input
                  placeholder="Your full name"
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Message</label>
                <textarea 
                  className="w-full p-3 border border-input rounded-md text-sm resize-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  rows={4}
                  placeholder="Your message..."
                />
              </div>
              <Button type="submit" size="sm">Send Message</Button>
            </form>
          </ComponentShowcase>
        </Section>

        <Section 
          title="Navigation" 
          description="Navigation components for different contexts and layouts."
        >
          <ComponentShowcase
            title="Breadcrumbs"
            description="Hierarchical navigation showing user's location."
            code={`import Link from 'next/link';

<nav className="flex" aria-label="Breadcrumb">
  <ol className="flex items-center space-x-2">
    <li>
      <Link href="/" className="text-gray-500 hover:text-gray-700">
        Home
      </Link>
    </li>
    <li className="text-gray-400">/</li>
    <li>
      <Link href="/seminars" className="text-gray-500 hover:text-gray-700">
        Seminars
      </Link>
    </li>
    <li className="text-gray-400">/</li>
    <li className="text-gray-900 font-medium">
      Understanding Tawheed
    </li>
  </ol>
</nav>`}
          >
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    Home
                  </a>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    Seminars
                  </a>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">
                  Understanding Tawheed
                </li>
              </ol>
            </nav>
          </ComponentShowcase>

          <ComponentShowcase
            title="Main Navigation"
            description="Primary site navigation with active states."
            code={`import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Seminars', href: '/seminars' },
  { name: 'Contact', href: '/contact' },
  { name: 'Donate', href: '/donate' },
];

<nav className="flex space-x-8">
  {navItems.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-primary-green',
        pathname === item.href 
          ? 'text-primary-green' 
          : 'text-gray-700'
      )}
    >
      {item.name}
    </Link>
  ))}
</nav>`}
          >
            <nav className="flex space-x-8">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary-green transition-colors">
                About
              </a>
              <a href="#" className="text-sm font-medium text-primary-green">
                Seminars
              </a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary-green transition-colors">
                Contact
              </a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary-green transition-colors">
                Donate
              </a>
            </nav>
          </ComponentShowcase>
        </Section>

        <Section 
          title="Status & Feedback" 
          description="Components for displaying status, alerts, and user feedback."
        >
          <ComponentShowcase
            title="Status Badges"
            description="Color-coded badges for displaying item status."
            code={`// Status badge variants
<span className="bg-primary-green text-white text-xs px-2 py-1 rounded-full">
  Upcoming
</span>

<span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
  Completed
</span>

<span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
  Cancelled
</span>

<span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
  Live
</span>`}
          >
            <span className="bg-primary-green text-white text-xs px-2 py-1 rounded-full">
              Upcoming
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
              Completed
            </span>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
              Cancelled
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              Live
            </span>
          </ComponentShowcase>

          <ComponentShowcase
            title="Alert Messages"
            description="Informational alerts for user feedback."
            code={`// Success alert
<div className="bg-green-50 border border-green-200 rounded-lg p-4">
  <div className="flex">
    <CheckIcon className="h-5 w-5 text-green-400" />
    <div className="ml-3">
      <p className="text-sm font-medium text-green-800">
        Success! Your message has been sent.
      </p>
    </div>
  </div>
</div>

// Error alert
<div className="bg-red-50 border border-red-200 rounded-lg p-4">
  <div className="flex">
    <XIcon className="h-5 w-5 text-red-400" />
    <div className="ml-3">
      <p className="text-sm font-medium text-red-800">
        Error: Please check your input and try again.
      </p>
    </div>
  </div>
</div>`}
          >
            <div className="space-y-4 w-full max-w-md">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex">
                  <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                      Success! Your message has been sent.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex">
                  <svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">
                      Error: Please check your input and try again.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ComponentShowcase>
        </Section>

        <Section 
          title="Layout Components" 
          description="Structural components for page layout and content organization."
        >
          <ComponentShowcase
            title="Page Header"
            description="Standard page header with title and description."
            code={`<div className="mb-12">
  <h1 className="text-4xl font-bold text-deep-forest-green mb-4">
    Page Title
  </h1>
  <p className="text-lg text-gray-700">
    Page description or subtitle that provides context about the content.
  </p>
</div>`}
          >
            <div className="w-full">
              <h1 className="text-4xl font-bold text-deep-forest-green mb-4">
                Page Title
              </h1>
              <p className="text-lg text-gray-700">
                Page description or subtitle that provides context about the content.
              </p>
            </div>
          </ComponentShowcase>

          <ComponentShowcase
            title="Section with Divider"
            description="Content section with visual separation."
            code={`<section className="mb-16">
  <div className="mb-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-2">
      Section Title
    </h2>
    <p className="text-lg text-gray-600">
      Section description explaining the content below.
    </p>
  </div>
  
  <div className="border-t border-gray-200 pt-8">
    {/* Section content goes here */}
  </div>
</section>`}
          >
            <section className="w-full">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Section Title
                </h2>
                <p className="text-lg text-gray-600">
                  Section description explaining the content below.
                </p>
              </div>
              
              <div className="border-t border-gray-200 pt-8">
                <p className="text-gray-600">Section content goes here...</p>
              </div>
            </section>
          </ComponentShowcase>
        </Section>
      </div>
    </div>
  );
}