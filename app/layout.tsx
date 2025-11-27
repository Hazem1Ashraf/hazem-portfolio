import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "@/components/providers"

import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hazem Ashraf - Senior Frontend Developer | React & Next.js",
  description:
    "Hazem Ashraf - Professional Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies. Check out my portfolio and projects.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "Egypt",
    "Portfolio",
  ],
  authors: [{ name: "Hazem Ashraf" }],
  creator: "Hazem Ashraf",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hazem-ashraf.vercel.app",
    siteName: "Hazem Ashraf Portfolio",
    title: "Hazem Ashraf - Senior Frontend Developer",
    description: "Professional portfolio showcasing React, Next.js, and modern web development projects",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hazem Ashraf Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hazem Ashraf - Frontend Developer",
    description: "Check out my portfolio and projects",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.jpg", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.jpg", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" }],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
