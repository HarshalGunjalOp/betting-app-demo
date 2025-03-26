"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import SportsDropdown from "./sports-dropdown"

export default function Header() {
  const [sportsMenuOpen, setSportsMenuOpen] = useState(false)

  return (
    <header className="w-full">
      <div className="bg-[#1c2a38] text-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center">
              <div className="relative h-8 w-48">
                <div className="flex items-center">
                  <div className="text-[#ff5722] mr-1">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                    </svg>
                  </div>
                  <span className="font-bold text-white text-lg">DEMO APP</span>
                </div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-6 relative">
              <button
                className="hover:text-[#ff5722] text-sm font-medium flex items-center"
                onClick={() => setSportsMenuOpen(!sportsMenuOpen)}
              >
                Sports
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <Link href="/odds" className="hover:text-[#ff5722] text-sm font-medium">
                Odds
              </Link>
              <Link href="/picks" className="hover:text-[#ff5722] text-sm font-medium">
                Picks
              </Link>
              <Link href="/betting" className="hover:text-[#ff5722] text-sm font-medium">
                Betting
              </Link>
              <Link href="/promos" className="hover:text-[#ff5722] text-sm font-medium">
                Promos
              </Link>
              <Link href="/contests" className="hover:text-[#ff5722] text-sm font-medium">
                Contests
              </Link>
              <Link href="/forum" className="hover:text-[#ff5722] text-sm font-medium">
                Forum
              </Link>
              <Link href="/march-madness" className="hover:text-[#ff5722] text-sm font-medium">
                March Madness
              </Link>

              <SportsDropdown isOpen={sportsMenuOpen} onClose={() => setSportsMenuOpen(false)} />
            </nav>
          </div>

          <Button className="bg-[#ff5722] hover:bg-[#e64a19] text-white">Log in</Button>
        </div>
      </div>
    </header>
  )
}

