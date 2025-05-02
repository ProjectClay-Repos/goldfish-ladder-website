import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-[#6B3F2D] py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Young Founders</h3>
            <p className="text-sm text-gray-300">
              Empowering student entrepreneurs and early-stage startup enthusiasts.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#FDBA3C]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FDBA3C]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/internship" className="hover:text-[#FDBA3C]">
                  Internship
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#FDBA3C]">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="hover:text-[#FDBA3C]">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/ai-co-founder" className="hover:text-[#FDBA3C]">
                  AI Co-Founder
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: info@youngfounders.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Startup Street, Innovation City</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Subscribe to our newsletter</h4>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#FDBA3C]/90">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Young Founders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
