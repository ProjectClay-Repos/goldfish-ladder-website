"use client"

import { useState } from "react"
import Link from "next/link"
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
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10">
              <div className="absolute h-10 w-10 rounded-full bg-[#FDBA3C]"></div>
              <div className="absolute left-1 top-1 h-8 w-8 rounded-full bg-white"></div>
              <div className="absolute left-2 top-2 h-6 w-6 rounded-full bg-[#6B3F2D]"></div>
            </div>
            <span className="text-xl font-bold text-[#6B3F2D]">Young Founders</span>
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
            <Button className="bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#FDBA3C]/90">Join Now</Button>
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
            <Button className="w-full bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#FDBA3C]/90">Join Now</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
