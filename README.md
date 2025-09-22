# MTWS Design System & Style Guide

A living, interactive design system and style guide for **Masjid Tawheed Was-Sunnah** (MTWS). This is not a static document—it's a dynamic, always-up-to-date representation of our brand's digital identity, built using the same code components as our live website.

![MTWS Logo](public/assets/brand/logos/logo.png)

## 🌟 Overview

The MTWS Design System transforms our brand from a passive blueprint into an active, indispensable tool for our entire team. By building this style guide with the same React components used on our main website, it creates a "single source of truth" that can never be out of date.

### Key Benefits

- **🎯 Absolute Consistency**: Undeniable source of truth with no room for interpretation
- **⚡ Enhanced Efficiency**: Pre-built, pre-approved components accelerate development
- **🤝 Better Collaboration**: Shared universal language for designers and developers
- **🔄 Always Current**: Built with live components, automatically stays in sync

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mtwsnc/style-guide.git
cd style-guide
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3001](http://localhost:3001) to view the style guide.

### Available Scripts

- `npm run dev` - Start development server on port 3001
- `npm run build` - Build for production
- `npm start` - Start production server on port 3001
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── components/         # Components showcase page
│   ├── foundations/        # Design foundations page
│   ├── principles/         # Design principles page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── ui/               # Core UI components
│   │   ├── AudioPlayer.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   ├── CodeBlock.tsx      # Code syntax highlighting
│   ├── ColorSwatch.tsx    # Color palette display
│   ├── ComponentShowcase.tsx # Component demo wrapper
│   ├── Navigation.tsx     # Main navigation
│   └── ...
├── lib/
│   └── utils.ts          # Utility functions
public/
├── assets/
│   ├── brand/            # Brand assets (logos, etc.)
│   └── general/          # Media files
└── fonts/                # Custom fonts
```

## 🎨 Design System Components

### Foundations
- **Color Palette**: Brand colors including Deep Forest Green, Primary Green, Sandy Gold
- **Typography**: Custom fonts (DM Sans, Roboto, Arabic fonts)
- **Spacing**: Consistent spacing scale
- **Icons**: Lucide React icon system

### UI Components
- **Buttons**: Multiple variants (primary, outline, destructive, ghost, link)
- **Cards**: Flexible content containers
- **Forms**: Input fields, labels, validation states
- **Navigation**: Breadcrumbs, main navigation, mobile menu
- **Audio Player**: Custom media player for Islamic content
- **Status & Feedback**: Badges, alerts, loading states

### Brand Colors

```css
/* Primary Brand Colors */
--high-contrast-black: #000000
--deep-forest-green: #132a1a
--primary-green: #407550
--olive-green: #82894d
--sandy-gold: #e7d296
--warm-background: #fdfbf5
```

## 🛠 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Typography**: Google Fonts (DM Sans, Roboto) + Custom Arabic fonts
- **Code Highlighting**: Prism.js + React Syntax Highlighter
- **Language**: TypeScript

## 📖 Usage Guidelines

### For Developers

1. **Import Components**: All UI components are available in `@/components/ui/`
```tsx
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
```

2. **Use Brand Colors**: Access brand colors through Tailwind classes
```tsx
<div className="bg-primary-green text-white">
<div className="text-deep-forest-green">
```

3. **Follow Component Patterns**: Check the Components page for usage examples and copy-paste code

### For Designers

1. **Color Palette**: Use the exact hex values from the Foundations page
2. **Typography**: Follow the typography scale and font pairings
3. **Spacing**: Use the consistent spacing scale for layouts
4. **Components**: Reference live components for accurate specifications

## 🔗 Integration with Main Website

This style guide references components from the main MTWS website through:

- **Shared Components**: UI components are imported from the main project
- **Consistent Styling**: Uses the same Tailwind configuration
- **Live Examples**: Components render exactly as they appear on the live site

## 🌐 Brand Identity

### Mission
Providing authentic Islamic education and community building based on the Quran and Sunnah.

### Visual Identity
- **Primary Colors**: Deep forest green representing stability and growth
- **Accent Colors**: Sandy gold for warmth and illumination
- **Typography**: Clean, modern fonts with Arabic script support
- **Imagery**: Professional, welcoming, culturally appropriate

## 📱 Responsive Design

All components are built with mobile-first responsive design:
- **Mobile**: 320px and up
- **Tablet**: 768px and up  
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## ♿ Accessibility

- WCAG 2.1 AA compliance
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Color contrast standards met

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-component`
3. Make your changes
4. Test thoroughly across devices
5. Submit a pull request with detailed description

### Development Guidelines

- Follow TypeScript best practices
- Use semantic HTML elements
- Ensure mobile responsiveness
- Test with screen readers
- Maintain consistent code style

## 📄 License

This project is proprietary to Masjid Tawheed Was-Sunnah. All rights reserved.

## 📞 Support

For questions or support regarding the design system:

- **Website**: [mtwsnc.org](https://mtwsnc.org)
- **Email**: info@mtwsnc.org
- **Address**: 3714 S. Alston Ave, Durham, NC 27713

---

**Built with ❤️ for the MTWS community**

*This style guide is a living document that evolves with our brand and website. It serves as both documentation and a functional tool for maintaining consistency across all MTWS digital properties.*