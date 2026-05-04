import { Geist_Mono, Figtree, MuseoModerno } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

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
      <body>{children}</body>
    </html>
  )
}
