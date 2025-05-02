import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#FDBA3C] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold text-[#6B3F2D]">Events to Think, Learn, and Connect</h1>
          <p className="mx-auto mb-8 max-w-2xl text-[#6B3F2D]/80">
            Join our community events to learn from industry experts, connect with fellow entrepreneurs, and grow your
            startup.
          </p>
          <Button className="bg-[#6B3F2D] text-white hover:bg-[#6B3F2D]/90">Browse Events</Button>
        </div>
      </section>

      {/* Currently Active Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#6B3F2D]">Currently Active</h2>

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
                      {i === 1 ? "Workshop" : i === 2 ? "Conference" : "Hackathon"}
                    </span>
                    <span className="text-sm text-gray-500">May {10 + i}, 2025</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#6B3F2D]">
                    {i === 1
                      ? "Startup Funding Workshop"
                      : i === 2
                        ? "Young Founders Conference"
                        : "Innovation Hackathon"}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    {i === 1
                      ? "Learn how to secure funding for your early-stage startup."
                      : i === 2
                        ? "Connect with successful entrepreneurs and investors."
                        : "Build innovative solutions to real-world problems."}
                  </p>
                  <div className="mb-4 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-[#FDBA3C]" />
                      <span>May {10 + i}, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-[#FDBA3C]" />
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-[#FDBA3C]" />
                      <span>{i === 2 ? "Virtual" : "Innovation Hub, San Francisco"}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-[#6B3F2D] text-white hover:bg-[#6B3F2D]/90">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#6B3F2D]">Upcoming Events</h2>

          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden border-none shadow-md">
                <CardContent className="p-4">
                  <div className="flex flex-col items-start space-y-4 md:flex-row md:items-center md:space-x-6 md:space-y-0">
                    <div className="flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-[#FDBA3C] text-[#6B3F2D]">
                      <span className="text-2xl font-bold">{15 + i}</span>
                      <span className="text-sm">May</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#6B3F2D]">
                        {i === 1
                          ? "Pitch Perfect: Mastering Your Startup Pitch"
                          : i === 2
                            ? "Product Market Fit Workshop"
                            : i === 3
                              ? "Networking Mixer"
                              : "Founder Fireside Chat"}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4 text-[#FDBA3C]" />
                          <span>6:00 PM - 8:00 PM</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-4 w-4 text-[#FDBA3C]" />
                          <span>{i % 2 === 0 ? "Virtual" : "Innovation Hub, San Francisco"}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-1 h-4 w-4 text-[#FDBA3C]" />
                          <span>{30 + i * 10} attendees</span>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-[#6B3F2D] text-white hover:bg-[#6B3F2D]/90">Register</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Students */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#6B3F2D]">For Students</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: "Workshops", icon: "🔧", desc: "Hands-on learning experiences to develop essential skills." },
              { title: "Networking", icon: "🤝", desc: "Connect with peers, mentors, and industry professionals." },
              { title: "Competitions", icon: "🏆", desc: "Showcase your ideas and win prizes and recognition." },
            ].map((item, i) => (
              <Card key={i} className="border-2 border-[#FDBA3C]/20 shadow-md">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 text-4xl">{item.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold text-[#6B3F2D]">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#6B3F2D] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Want to host an event?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            Partner with Young Founders to host workshops, talks, or networking events.
          </p>
          <Button className="bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#FDBA3C]/90">Become a Host</Button>
        </div>
      </section>
    </div>
  )
}
