import type { Metadata } from "next";
import { DM_Sans, Roboto } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "MTWS Design System & Style Guide",
  description: "Interactive style guide and design system for Masjid Tawheed Was-Sunnah",
  icons: {
    icon: "/assets/brand/logos/logo.png",
    shortcut: "/assets/brand/logos/logo.png",
    apple: "/assets/brand/logos/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${roboto.variable} antialiased min-h-screen`}
        style={{ backgroundColor: 'var(--warm-background)' }}
      >
        {children}
      </body>
    </html>
  );
}