"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Internships", href: "/internship" },
  { name: "Events", href: "/events" },
  { name: "Podcasts", href: "/podcast" },
  { name: "AI Cofounder", href: "/ai-co-founder" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="md:container md:mx-auto">
        <div className="px-2 md:px-0 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="h-1/2 w-1/2 md:h-full md:w-full">
            <Image src="/logo.png" alt="Logo" height={130} width={306} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl text-gray-700 transition-colors hover:text-[#FDBA3C]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex md:items-center md:gap-2">
            <Button
              variant="ghost"
              className="rounded-full text-[#FDBA3C] hover:bg-[#FDBA3C] hover:text-white text-xl font-medium py-[6px] px-[16px]"
            >
              Login
            </Button>
            <Button className="rounded-full bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#6B3F2D] hover:text-white py-[6px] px-[16px] text-xl font-medium">
              Sign Up
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="mt-4 space-y-4 md:hidden px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-sm font-medium text-gray-700 transition-colors hover:text-[#FDBA3C] border-b"
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
              <Button className="rounded-full bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#6B3F2D] hover:text-white w-full">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
