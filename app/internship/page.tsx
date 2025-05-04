"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function InternshipPage() {
  return (
    <div className="flex flex-col bg-white font-sans text-black text-[20px] leading-[1.4]">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-10 py-12 md:py-20">
        <div className="p-4 md:p-6 rounded-xl">
          <Image
            src="/internship/internship_hero_01.png"
            alt="internship hero"
            width={500}
            height={500}
            className="object-contain max-w-full h-auto"
          />
        </div>
        <div className="mt-10 md:mt-0 md:ml-10 text-center md:text-left">
          <h2 className="text-[32px] md:text-[48px] font-bold">Gain Experience</h2>
          <p className="text-[20px] md:text-[28px] max-w-xl mt-4">
            Intern with an AI-powered startup and take your skills to the next level
          </p>
        </div>
      </div>

      {/* Yellow Section */}
      <div className="bg-[#FDBA3C] px-6 md:px-10 py-16 md:py-20 mx-20 text-black rounded-3xl">
  {/* Filter Buttons */}
  <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
    {["Filters", "Filters", "Filters", "Filters", "Filters"].map((label, i) => (
      <Button key={i} className="bg-white text-black rounded-md text-[18px] md:text-[24px] px-4 md:px-6 py-2 md:py-3">
        {label}
      </Button>
    ))}
    {/* Adding circular internship/filter.png block */}
    <Button className="bg-white text-black rounded-full p-3">
      <Image
        src="/internship/filter.png"
        alt="filter icon"
        width={20}
        height={20}
        className="object-contain"
      />
    </Button>
  </div>

  {/* Internship Cards */}
  <div className="space-y-12 md:space-y-16 max-w-6xl mx-auto">
    {[1, 2, 3].map((i) => (
      <Card
        key={i}
        className="bg-white flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-16 py-8 md:py-12
        rounded-none rounded-b-xl border-b-[15px] border-b-[#b17e11] text-black"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-10">
          <div>
            <h3 className="font-bold text-[24px] md:text-[36px]">Lorem ipsum</h3>
            <div className="flex flex-wrap gap-4 mt-4 text-[16px] md:text-[24px]">
              <div className="flex items-center gap-2 md:gap-3">
                <Image src="/internship/location.png" alt="location" width={24} height={24} />
                <span>Remote</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Image src="/internship/calendar.png" alt="calendar" width={24} height={24} />
                <span>3 Months</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Image src="/internship/stipend.png" alt="stipend" width={24} height={24} />
                <span>Unpaid</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-0 self-center md:self-auto">
          <Image
            src="/internship/ipsum.png"
            alt="logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
      </Card>
    ))}
  </div>

  {/* View More Button */}
  <div className="flex justify-center mt-12">
    <Button className="bg-[#6B3F2D] text-white px-8 md:px-10 py-3 md:py-4 text-[20px] md:text-[24px] rounded-xl">
      View more
    </Button>
  </div>
</div>



      {/* Emerging Startups Section */}
      <div className="bg-white py-16 md:py-20 px-6 md:px-10 text-black">
        <h2 className="text-[32px] md:text-[40px] font-extrabold mb-4">Emerging Startups</h2>
        <p className="text-[20px] md:text-[28px] mb-10">lorem ipsum lorem ipsum</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="p-0 shadow-lg rounded-xl overflow-hidden text-black">
              {/* White image container */}
              <div className="bg-white p-6 flex justify-center">
                <Image
                  src="/internship/ipsum.png"
                  alt="startup"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              {/* Yellow content box */}
              <div className="bg-[#FFF7EB] text-left p-6">
                <div className="text-[20px] md:text-[28px] font-semibold mb-2">Lorem ipsum</div>
                <div className="text-[16px] md:text-[24px] text-gray-700 mb-6">Lorem ipsum</div>
                <Button className="bg-[#FDBA3C] text-white w-full text-[18px] md:text-[24px] py-3 rounded-lg">
                  Apply
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
