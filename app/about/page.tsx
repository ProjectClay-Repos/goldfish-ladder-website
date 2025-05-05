"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-white text-black">
      {/* About Us Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            {/* Image */}
            <div className="relative w-full h-64 sm:h-80 md:h-[400px] md:w-1/2">
              <Image
                src="/about/about_hero_01.png"
                alt="About illustration"
                fill
                className="object-contain"
              />
            </div>

            {/* Text */}
            <div className="mt-10 md:mt-0 md:w-1/2 space-y-4 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                About Us
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                High School students are the next generation of founders. Start
                climbing the goldfish ladder to reach your goals today!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12 max-w-screen-xl mx-auto">
            {/* Image */}
            <div className="relative h-64 sm:h-[400px] md:h-[550px] w-full md:w-[300px] mx-auto md:mx-0">
              <Image
                src="/about/about_hero_02.png"
                alt="Walking woman illustration"
                fill
                className="object-contain"
              />
            </div>

            {/* Text & Quotes */}
            <div className="mt-10 md:mt-0 space-y-8 text-center md:text-left w-full md:w-2/3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Why we exist?
              </h2>

              <div className="space-y-6">
                <div className="bg-[#FDBA3C] text-black rounded-xl px-6 py-4 text-sm sm:text-base font-medium mx-auto md:mx-0 md:-translate-x-4 max-w-md">
                  “I went from idea to launch, and learned so much along the
                  way”
                  <br />
                  -- Student
                </div>

                <div className="bg-[#C0705A] text-white rounded-xl px-6 py-4 text-sm sm:text-base font-medium mx-auto md:mx-0 md:translate-x-20 max-w-md">
                  “AI HELP has been invaluable on my startup journey”
                  <br />
                  -- Student
                </div>

                <div className="bg-[#FBE9D2] text-black rounded-xl px-6 py-4 text-sm sm:text-base font-medium mx-auto md:mx-0 md:-translate-x-4 max-w-md">
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  -- Student
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Our Team
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Meet the people behind the mission
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex flex-col items-start text-left space-y-4 bg-white rounded-3xl shadow-[0px_0px_10px_rgba(0,0,0,0.2)] p-6"
              >
                <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 overflow-hidden rounded-full border self-center">
                  <Image
                    src={`/about/about_people_0${i}.png`}
                    alt={`Team member ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-base font-semibold">Team Member {i}</h3>
                <p className="text-sm font-medium text-gray-600">
                  Role or short bio goes here
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
