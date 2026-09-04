import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const robotoSlabHeading = Roboto_Slab({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Oscilloscope Online  | Interactive Web Serial & Plotter Tool',
    template: '%s | Oscilloscope Online',
  },
  description:
    'An all-in-one online plotting tool featuring on-the-fly math expression evaluation and code execution, a classic serial plotter, and an advanced audio visualization module.',

  // General App Information
  applicationName: 'Oscilloscope Online',
  authors: [{ name: 'Muhammad Umar Shahbaz' }],
  keywords: [
    'Oscilloscope',
    'Serial Plotter',
    'Web Serial API',
    'Arduino Plotter',
    'ESP32 Telemetry',
    'Signal Processing',
    'Audio Visualizer',
    'Math Expression Plotter',
    'Next.js',
  ],

  // Icons (Ensure these files exist in your /public directory)
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oscilloscope-online-v3.vercel.app',
    siteName: 'Oscilloscope Online',
    title: 'Oscilloscope Online | Real-Time Web Serial & Signal Plotter',
    description:
      'An all-in-one online plotting tool featuring on-the-fly math expression evaluation, a classic serial plotter, and an advanced audio visualization module.',
    images: [
      {
        url: '/og-image.png', // Add a 1200x630 preview image inside your /public folder
        width: 1200,
        height: 630,
        alt: 'Oscilloscope Online Interface',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Oscilloscope Online',
    description:
      'Online plotting tool for Web Serial hardware streams, audio signals, and real-time math evaluation.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", notoSans.variable, robotoSlabHeading.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
