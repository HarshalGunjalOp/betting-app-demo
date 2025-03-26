import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Covers - Sports Betting Odds & Lines",
  description: "Get the latest sports betting odds and lines for all major sports.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
          {children}
      </body>
    </html>
  )
}

