import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vighnesh Nilajakar | Embedded Systems & Edge AI Engineer",
  description:
    "Portfolio of Vighnesh Nilajakar - Electronics & Communication student specializing in embedded systems, edge-AI, and firmware development.",
  generator: "v0.app",
  openGraph: {
    title: "Vighnesh Nilajakar | Embedded Systems Engineer",
    description: "Explore my projects in embedded systems, edge-AI, and IoT solutions.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0D9488" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
