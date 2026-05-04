import { Geist_Mono, Figtree, MuseoModerno } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { cn } from "@/lib/utils"
import Navbar from "@/components/ui/navbar"
import Footer from "@/components/layout/footer"

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" })

const museoModerno = MuseoModerno({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-museo",
  display: "swap",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Notice Company",
  description:
    "We craft identities, packaging, and digital worlds that stop scrolls, turn heads, and linger long after.",
  openGraph: {
    title: "Notice Company",
    description:
      "We craft identities, packaging, and digital worlds that stop scrolls, turn heads, and linger long after.",
    url: "https://noticeco.vercel.app/",
    siteName: "Notice Company",
    images: [
      {
        url: "https://noticeco.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Notice Company",
    description:
      "We craft identities, packaging, and digital worlds that stop scrolls, turn heads, and linger long after.",
    images: ["https://noticeco.vercel.app/og-image.png"],
  },
  keywords: [
    "branding studio",
    "graphic design",
    "brand identity",
    "packaging design",
    "creative studio",
  ],
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        figtree.variable,
        fontMono.variable,
        museoModerno.variable
      )}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
