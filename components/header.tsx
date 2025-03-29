"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import SportsDropdown from "./sport-dropdown"
import { Wallet, Menu, X } from "lucide-react"

export default function Header() {
  const [sportsMenuOpen, setSportsMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // Mock balance - in a real app, this would come from your authentication/user context
  const balance = "$250.00"

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav className="flex items-center space-x-6 relative">
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
              <Link href="/contests" className="hover:text-[#ff5722] text-sm font-medium">
                Contests
              </Link>

              <SportsDropdown isOpen={sportsMenuOpen} onClose={() => setSportsMenuOpen(false)} />
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Account Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/wallet" className="flex items-center bg-[#263545] hover:bg-[#2e3e50] px-3 py-2 rounded-md">
              <Wallet className="h-4 w-4 mr-2 text-[#ff5722]" />
              <span className="text-sm font-medium">{balance}</span>
            </Link>
            
            <Button className="bg-[#ff5722] hover:bg-[#e64a19] text-white">
              <Link href="/login"> Log in </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-xs bg-[#1c2a38] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5">
          <div className="flex justify-end mb-5">
            <button 
              className="text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/sports"
              className="text-white hover:text-[#ff5722] text-lg font-medium py-2 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sports
            </Link>
            <Link 
              href="/odds"
              className="text-white hover:text-[#ff5722] text-lg font-medium py-2 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Odds
            </Link>
            <Link 
              href="/picks"
              className="text-white hover:text-[#ff5722] text-lg font-medium py-2 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Picks
            </Link>
            <Link 
              href="/betting"
              className="text-white hover:text-[#ff5722] text-lg font-medium py-2 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Betting
            </Link>
            <Link 
              href="/contests"
              className="text-white hover:text-[#ff5722] text-lg font-medium py-2 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contests
            </Link>
          </nav>
          
          <div className="mt-8 flex flex-col space-y-4">
            <Link 
              href="/wallet" 
              className="flex items-center justify-center bg-[#263545] hover:bg-[#2e3e50] py-3 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Wallet className="h-4 w-4 mr-2 text-[#ff5722]" />
              <span className="text-sm font-medium text-white">{balance}</span>
            </Link>
            
            <Button 
              className="bg-[#ff5722] hover:bg-[#e64a19] text-white w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/login">Log in</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

