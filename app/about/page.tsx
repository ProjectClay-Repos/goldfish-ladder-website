import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FDBA3C]/20 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl font-bold text-[#6B3F2D]">About Us</h1>
              <p className="text-lg text-gray-600">
                Young Founders is a platform dedicated to supporting student entrepreneurs and early-stage startup
                enthusiasts in their journey.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative h-[300px] w-full">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Young Founders team"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#6B3F2D]">Why we exist?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              We believe in empowering the next generation of entrepreneurs to build innovative solutions for tomorrow's
              challenges.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FDBA3C]">
                <span className="text-lg font-bold text-[#6B3F2D]">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#6B3F2D]">Bridging the Knowledge Gap</h3>
                <p className="mt-2 text-gray-600">
                  We provide resources, mentorship, and practical knowledge that is often missing in traditional
                  education systems.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FDBA3C]">
                <span className="text-lg font-bold text-[#6B3F2D]">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#6B3F2D]">Building a Supportive Community</h3>
                <p className="mt-2 text-gray-600">
                  We connect young entrepreneurs with peers, mentors, and industry experts to foster collaboration and
                  growth.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FDBA3C]">
                <span className="text-lg font-bold text-[#6B3F2D]">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#6B3F2D]">Providing Opportunities</h3>
                <p className="mt-2 text-gray-600">
                  We create pathways to internships, funding, and partnerships that help turn ideas into successful
                  ventures.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#FDBA3C]/90">Join Now</Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#6B3F2D]">Our Team</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Meet the passionate individuals behind Young Founders.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {[
              { name: "Alex Johnson", role: "Founder & CEO" },
              { name: "Sarah Chen", role: "COO" },
              { name: "Michael Lee", role: "Head of Community" },
              { name: "Priya Sharma", role: "Tech Lead" },
              { name: "David Kim", role: "Marketing Director" },
              { name: "Emma Wilson", role: "Events Coordinator" },
              { name: "James Rodriguez", role: "Partnerships Manager" },
              { name: "Aisha Patel", role: "Content Creator" },
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={`/placeholder.svg?height=128&width=128&text=${member.name.charAt(0)}`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#6B3F2D]">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#6B3F2D] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to start your entrepreneurial journey?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            Join our community of young founders and get access to resources, mentorship, and opportunities.
          </p>
          <Button className="bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#FDBA3C]/90">Join Young Founders</Button>
        </div>
      </section>
    </div>
  )
}
