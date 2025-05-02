import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FDBA3C]/20 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl font-bold text-[#6B3F2D] md:text-5xl lg:text-6xl">
                Build better with an <span className="text-[#FDBA3C]">AI Co-Founder</span>
              </h1>
              <p className="text-lg text-gray-600">
                Empowering student entrepreneurs to turn their ideas into successful startups.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#FDBA3C]/90">Get Started</Button>
                <Button variant="outline" className="border-[#6B3F2D] text-[#6B3F2D]">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative h-[300px] w-full md:h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Young entrepreneurs working with AI"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#6B3F2D]">About Us</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Young Founders is a platform dedicated to supporting student entrepreneurs and early-stage startup
              enthusiasts in their journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-2 border-[#FDBA3C]/20 shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-[#FDBA3C]/10 p-4">
                  <svg className="h-8 w-8 text-[#FDBA3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#6B3F2D]">Mentorship</h3>
                <p className="text-gray-600">Connect with experienced entrepreneurs and industry experts.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FDBA3C]/20 shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-[#FDBA3C]/10 p-4">
                  <svg className="h-8 w-8 text-[#FDBA3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#6B3F2D]">Community</h3>
                <p className="text-gray-600">Join a vibrant community of like-minded student entrepreneurs.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FDBA3C]/20 shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-[#FDBA3C]/10 p-4">
                  <svg className="h-8 w-8 text-[#FDBA3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#6B3F2D]">Resources</h3>
                <p className="text-gray-600">Access tools, funding opportunities, and educational content.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#6B3F2D]">Internship Opportunities</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Discover exciting internship opportunities at innovative startups and established companies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden border-none shadow-md">
                <CardContent className="p-0">
                  <div className="border-b border-gray-200 bg-[#FDBA3C] p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-full bg-white"></div>
                        <div>
                          <h3 className="font-semibold text-[#6B3F2D]">Company {i}</h3>
                          <p className="text-sm text-[#6B3F2D]/80">Tech Startup</p>
                        </div>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#6B3F2D]">Remote</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="mb-2 text-lg font-semibold">Product Design Intern</h4>
                    <p className="mb-4 text-sm text-gray-600">3-6 months • Full-time • $1000/month</p>
                    <Button className="w-full bg-[#6B3F2D] text-white hover:bg-[#6B3F2D]/90">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/internship" className="inline-flex items-center text-[#6B3F2D] hover:text-[#FDBA3C]">
              View all opportunities
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#6B3F2D]">Upcoming Events</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Join our events to learn, network, and grow your startup.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden border-none shadow-md">
                <div className="relative h-48 w-full">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Event ${i}`}
                    alt={`Event ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-[#FDBA3C]/10 px-3 py-1 text-xs font-medium text-[#FDBA3C]">
                      Workshop
                    </span>
                    <span className="text-sm text-gray-500">May {10 + i}, 2025</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#6B3F2D]">Startup Funding Workshop {i}</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Learn how to secure funding for your early-stage startup.
                  </p>
                  <Button variant="outline" className="w-full border-[#6B3F2D] text-[#6B3F2D]">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/events" className="inline-flex items-center text-[#6B3F2D] hover:text-[#FDBA3C]">
              View all events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#6B3F2D]">Voices of Young Founders</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Listen to inspiring stories from successful young entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden border-none shadow-md">
                <div className="relative h-48 w-full">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=Podcast ${i}`}
                    alt={`Podcast ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-[#6B3F2D]">From Idea to IPO</h3>
                  <p className="mb-4 text-sm text-gray-600">With Founder {i}</p>
                  <Button variant="outline" className="w-full border-[#6B3F2D] text-[#6B3F2D]">
                    Listen Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/podcast" className="inline-flex items-center text-[#6B3F2D] hover:text-[#FDBA3C]">
              Explore all episodes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* AI Co-Founder Section */}
      <section className="bg-[#6B3F2D] py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                Build better with an <span className="text-[#FDBA3C]">AI Co-Founder</span>
              </h2>
              <p className="text-lg text-gray-300">
                Work with an AI-powered Co-Founder to plan your startup journey, validate ideas, and accelerate your
                growth.
              </p>
              <Button className="bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#FDBA3C]/90">Build your Assistant</Button>
            </div>
            <div className="flex-1">
              <div className="relative h-[300px] w-full">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="AI Co-Founder illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
