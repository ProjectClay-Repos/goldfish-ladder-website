import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Clock, Bookmark, Share2 } from "lucide-react"

export default function PodcastPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center max-w-[1074px] mx-auto">
  <div className="w-full h- px-4">
          <Image
          src="podcast/Screen.png"
          alt="internship hero"
          width={1000}      // bump this up
          height={1060}     // bump this up
          className="object-contain max-w-full mx-auto"
        />
        </div>
      </section>

      <section >
      <div className=" max-w-[1047px]  rounded-2xl px-14 py-[70px] bg-gradient-to-b from-[#ffb32c] to-[#b1662b] mt-[10px]">
      <div className="flex flex-col items-center gap-10">
        <div className="w-full  max-w-[750px]">
          <h1 className="text-[70px] font-bold text-white text-center leading-tight">
          “Voices of Young Founders”
          </h1>
        </div>
        
        <div className="mt-[43px]">
          <p className="text-[26px] font-semibold text-white text-center leading-tight">
          Tune into candid conversations with high school and college founders as they share the ups, downs, and unexpected lessons from launching their first startups—with a little help from AI
          </p>
        </div>
      </div>
    </div>

      </section >

      {/* Featured Episode */}
      <section className="text-black">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h2 className="mt-[80px] mb-4 text-3xl font-bold ">Gain startup experience</h2>
          <p className="mb-8 text-2xl font-bold max-w-[600px] text-center">Discover AI startup ideas and connect with potential co-founders</p>


        </div>
      </section>

      {/* Startup Stories */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#6B3F2D]">Startup Stories</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          </div>
        </div>
      </section>

      {/* Recently Posted */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#6B3F2D]">Recently Posted</h2>

          <div className="space-y-4">

          </div>
        </div>
      </section>

      {/* Curated For You */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#6B3F2D]">Curated For You</h2>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">

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
