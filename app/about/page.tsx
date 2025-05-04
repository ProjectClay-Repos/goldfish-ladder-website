'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-white text-black">
      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            {/* Image on the left */}
            <div className="relative h-[400px] w-full md:w-[600px]">
              <Image
                src="/about/about_hero_01.png"
                alt="About illustration"
                fill
                className="object-contain"
              />
            </div>

            {/* Text on the right */}
            <div className="mt-10 md:mt-0 md:w-1/2 space-y-4 text-center md:text-left">
              <h2 className="text-5xl font-bold">About Us</h2>
              <p className="text-xl  text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.
                Ullamcorper ut leo et, donec tempor massa. Ultrices id nam vulputate, eu sociis.
                Eleifend ullamcorper lobortis nisl ut aliquet et eu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">

          {/* Wrapper to center the flex row */}
          <div className="mx-auto flex max-w-screen-lg flex-col md:flex-row md:items-center md:gap-12">
            {/* Image on the left */}
            <div className="relative h-[550px] w-[300px] mx-auto md:mx-0">
              <Image
                src="/about/about_hero_02.png"
                alt="Walking woman illustration"
                fill
                className="object-contain"
              />
            </div>

            {/* Text on the right */}
            <div className="mt-10 md:mt-0 space-y-10 max-w-xl text-center md:text-left mx-auto md:mx-0">
              <div className="text-center">
                <h2 className="text-5xl font-bold">Why we exist?</h2>
              </div>

              <div className="bg-[#FDBA3C] text-black rounded-xl px-6 py-4 text-base font-medium transform md:-translate-x-4">
                “I went from idea to launch, and learned so much along the way”<br />-- Student
              </div>

              <div className="bg-[#C0705A] text-white rounded-xl px-6 py-4 text-base font-medium transform md:translate-x-20">
                “AI HELP has been invaluable on my startup journey”<br />-- Student
              </div>

              <div className="bg-[#FBE9D2] text-black rounded-xl px-6 py-4 text-base font-medium transform md:-translate-x-4">
                Lorem ipsum dolor sit amet, consectetur<br />-- Student
              </div>
            </div>


          </div>
        </div>
      </section>


      {/* Our Team Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold">Our Team</h2>
            <p className="text-base text-gray-600">lorem ipsum lorem ipsum</p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center space-y-5 bg-white rounded-3xl shadow-[0px_0px_10px_rgba(0,0,0,0.2)] p-4 "
              >
                <div className="relative h-60 w-60 overflow-hidden rounded-full border">
                  <Image
                    src={`/about/about_people_0${i}.png`}
                    alt={`Team member ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold mt-2">Our team</h3>
                <p className="text-xs text-gray-500">lorem ipsum lorem ipsum</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Footer brown section */}
      <div className="h-40 bg-[#6B3F2D] w-full" />
    </div>
  )
}
