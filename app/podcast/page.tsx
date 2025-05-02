import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Clock, Bookmark, Share2 } from "lucide-react"

export default function PodcastPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#FDBA3C]/10 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl font-bold text-[#6B3F2D]">Voices of Young Founders</h1>
              <p className="text-lg text-gray-600">
                Listen to inspiring stories from successful young entrepreneurs and learn from their experiences.
              </p>
              <Button className="bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#FDBA3C]/90">Subscribe Now</Button>
            </div>
            <div className="flex-1">
              <div className="relative h-[300px] w-full">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Podcast illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#6B3F2D]">Featured Episode</h2>

          <Card className="overflow-hidden border-none shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-64 w-full md:h-auto md:w-1/3">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Featured episode"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="flex-1 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-[#FDBA3C]/10 px-3 py-1 text-xs font-medium text-[#FDBA3C]">
                    Featured
                  </span>
                  <span className="flex items-center text-sm text-gray-500">
                    <Clock className="mr-1 h-4 w-4" />
                    45 min
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-[#6B3F2D]">From College Dorm to Billion Dollar Startup</h3>
                <p className="mb-4 text-gray-600">
                  In this episode, we talk with Sarah Chen, founder of TechNova, about her journey from a college
                  project to building a billion-dollar tech company. She shares insights on raising capital, building a
                  team, and overcoming challenges.
                </p>
                <div className="mb-6 flex items-center space-x-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image src="/placeholder.svg?height=48&width=48" alt="Sarah Chen" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Chen</h4>
                    <p className="text-sm text-gray-500">Founder & CEO, TechNova</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button className="flex items-center space-x-2 bg-[#6B3F2D] text-white hover:bg-[#6B3F2D]/90">
                    <Play className="h-4 w-4" />
                    <span>Listen Now</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2 border-[#6B3F2D] text-[#6B3F2D]">
                    <Bookmark className="h-4 w-4" />
                    <span>Save</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2 border-[#6B3F2D] text-[#6B3F2D]">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Startup Stories */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#6B3F2D]">Startup Stories</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden border-none shadow-md">
                <div className="relative h-48 w-full">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&text=Episode ${i}`}
                    alt={`Episode ${i}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Button className="rounded-full bg-white/90 p-3 text-[#6B3F2D] hover:bg-white">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Episode {10 + i}</span>
                    <span className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-1 h-4 w-4" />
                      {30 + i * 5} min
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#6B3F2D]">
                    {i === 1
                      ? "Building in Public"
                      : i === 2
                        ? "Bootstrapping vs VC Funding"
                        : i === 3
                          ? "Finding Product Market Fit"
                          : i === 4
                            ? "Scaling Your Team"
                            : i === 5
                              ? "International Expansion"
                              : "Exit Strategies"}
                  </h3>
                  <div className="mb-4 flex items-center space-x-2">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full">
                      <Image
                        src={`/placeholder.svg?height=32&width=32&text=${i}`}
                        alt={`Speaker ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-600">
                      {i === 1
                        ? "Alex Johnson"
                        : i === 2
                          ? "Priya Sharma"
                          : i === 3
                            ? "David Kim"
                            : i === 4
                              ? "Emma Wilson"
                              : i === 5
                                ? "James Rodriguez"
                                : "Aisha Patel"}
                    </span>
                  </div>
                  <Button variant="outline" className="w-full border-[#6B3F2D] text-[#6B3F2D]">
                    Listen Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Posted */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#6B3F2D]">Recently Posted</h2>

          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden border-none shadow-md">
                <CardContent className="p-4">
                  <div className="flex flex-col items-start space-y-4 md:flex-row md:items-center md:space-x-6 md:space-y-0">
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={`/placeholder.svg?height=96&width=96&text=${i}`}
                        alt={`Episode ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center space-x-2">
                        <span className="text-sm text-gray-500">Episode {20 + i}</span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="flex items-center text-sm text-gray-500">
                          <Clock className="mr-1 h-4 w-4" />
                          {25 + i * 5} min
                        </span>
                      </div>
                      <h3 className="mb-1 text-lg font-semibold text-[#6B3F2D]">
                        {i === 1
                          ? "Marketing on a Budget"
                          : i === 2
                            ? "Building a Remote Team"
                            : i === 3
                              ? "Fundraising Strategies"
                              : "Customer Acquisition"}
                      </h3>
                      <p className="mb-2 text-sm text-gray-600">
                        {i === 1
                          ? "Learn effective marketing strategies that don't break the bank."
                          : i === 2
                            ? "Tips for building and managing a successful remote team."
                            : i === 3
                              ? "Expert advice on raising capital for your startup."
                              : "Strategies to acquire and retain customers for your business."}
                      </p>
                    </div>
                    <Button className="flex items-center space-x-2 bg-[#6B3F2D] text-white hover:bg-[#6B3F2D]/90">
                      <Play className="h-4 w-4" />
                      <span>Play</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curated For You */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#6B3F2D]">Curated For You</h2>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Card key={i} className="overflow-hidden border-none shadow-md">
                <div className="relative h-40 w-full">
                  <Image
                    src={`/placeholder.svg?height=160&width=160&text=${i}`}
                    alt={`Podcast ${i}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity hover:opacity-100">
                    <Button className="rounded-full bg-white/90 p-2 text-[#6B3F2D] hover:bg-white">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-3">
                  <h3 className="mb-1 text-sm font-semibold text-[#6B3F2D] line-clamp-1">
                    {i === 1
                      ? "Startup Legal Essentials"
                      : i === 2
                        ? "Pitch Deck Masterclass"
                        : i === 3
                          ? "Founder Mental Health"
                          : i === 4
                            ? "Tech Stack Decisions"
                            : i === 5
                              ? "Hiring Your First Employee"
                              : i === 6
                                ? "Customer Discovery"
                                : i === 7
                                  ? "Financial Modeling"
                                  : "Investor Relations"}
                  </h3>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span>{20 + i * 3} min</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Speakers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#6B3F2D]">Popular Speakers</h2>

          <div className="flex space-x-6 overflow-x-auto pb-4">
            {[
              "Alex Johnson",
              "Sarah Chen",
              "Michael Lee",
              "Priya Sharma",
              "David Kim",
              "Emma Wilson",
              "James Rodriguez",
              "Aisha Patel",
            ].map((name, i) => (
              <div key={i} className="flex flex-col items-center flex-shrink-0 w-32">
                <div className="relative h-24 w-24 overflow-hidden rounded-full mb-2">
                  <Image
                    src={`/placeholder.svg?height=96&width=96&text=${name.charAt(0)}`}
                    alt={name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-[#6B3F2D] text-center">{name}</h3>
                <p className="text-xs text-gray-500 text-center">
                  {i % 4 === 0 ? "Founder" : i % 4 === 1 ? "Investor" : i % 4 === 2 ? "Mentor" : "Advisor"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#6B3F2D] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Want to share your founder story?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            We're always looking for inspiring entrepreneurs to feature on our podcast.
          </p>
          <Button className="bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#FDBA3C]/90">Apply to be a Guest</Button>
        </div>
      </section>
    </div>
  )
}
