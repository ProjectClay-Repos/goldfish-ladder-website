"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Internship", href: "/internship" },
  { name: "Events", href: "/events" },
  { name: "Podcast", href: "/podcast" },
  { name: "AI Co-Founder", href: "/ai-co-founder" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
  <div className="relative h-24 w-24">
    <Image src="/logo.png" alt="Logo" fill className="object-contain" />
  </div>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#FDBA3C]"
              >
                {link.name}
              </Link>
            ))}

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                className="rounded-full text-[#FDBA3C] hover:bg-[#FDBA3C] hover:text-white"
              >
                Login
              </Button>
              <Button
                className="rounded-full bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#6B3F2D] hover:text-white"
              >
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="mt-4 space-y-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-sm font-medium text-gray-700 transition-colors hover:text-[#FDBA3C]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2">
              <Button
                variant="ghost"
                className="rounded-full text-[#FDBA3C] hover:bg-[#FDBA3C] hover:text-white w-full"
              >
                Login
              </Button>
              <Button
                className="rounded-full bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#6B3F2D] hover:text-white w-full"
              >
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
