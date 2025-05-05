"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
          <h2 className="text-[32px] md:text-[48px] font-bold">
            Gain Experience
          </h2>
          <p className="text-[20px] md:text-[28px] max-w-xl mt-4">
            Intern with an AI-powered startup and take your skills to the next
            level
          </p>
        </div>
      </div>

      {/* Yellow Section */}
      <div className="bg-[#FDBA3C] px-6 md:px-10 py-16 md:py-20 mx-2 md:mx-20 text-black rounded-3xl">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {["Filters", "Filters", "Filters", "Filters", "Filters"].map(
            (label, i) => (
              <Button
                key={i}
                className="bg-white text-black rounded-md text-[18px] md:text-[24px] px-4 md:px-6 py-2 md:py-3"
              >
                {label}
              </Button>
            )
          )}
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

        <div className="space-y-12 md:space-y-16 max-w-6xl mx-auto">
          {[
            {
              title: "Wave",
              description:
                "Wave is a mental health tech startup dedicated to making emotional well-being more accessible through personalised, AI-driven support tools. By combining cutting-edge technology with evidence-based therapy techniques, Waves offers users daily mental health check-ins, guided self-care, and access to licensed professionals, all in one seamless platform.",
              image: "/internship/wave.avif",
            },
            {
              title: "Project Clay",
              description:
                "Project Clay is a mentorship platform that connects high school students with near-peer mentors, current students at top global universities, to guide them through college admissions, career exploration, and personal projects. Founded in 2020 by Dyumna Madan and Shivom Sood, the startup gained national attention after securing a ₹15 lakh investment from Namita Thapar on Shark Tank India Season 4.",
              image: "/internship/project-clay.png",
            },
            {
              title: "Junior Economics Club",
              description:
                "The Junior Economic Club (JEC) is a student-led organisation dedicated to expanding high school students’ knowledge of economics, finance, and business. Through workshops, competitions, guest speaker events, and hands-on projects, JEC provides members with real-world insights and practical skills.",
              image: "/internship/je.avif",
            },
            {
              title: "Finomic",
              description:
                "Finomic is a youth-led organization specializing in increasing financial literacy among the youth. Our articles, written by students from around the world, explain crucial financial knowledge easily and understandably. We additionally provide opportunities for publishing papers on finance-related topics.",
              image: "/internship/fin.avif",
            },
            {
              title: "EconUnited",
              description:
                "EconUnited helps high school students worldwide learn about economics, finance, and business through online lessons, videos, slideshows, and workshops. Members can apply their knowledge in fun online competitions and even start their own ventures.",
              image: "/internship/eco.avif",
            },
            {
              title: "Cognify Wealth",
              description:
                "Cognify Wealth is an international nonprofit focused on bringing financial literacy to neurodivergent individuals. We create free finance guides and host workshops to empower individuals with practical financial knowledge and decision-making skills.",
              image: "/internship/cog.avif",
            },
            {
              title: "HumaraPundit",
              description:
                "Humara Pandit is a Bengaluru-based faith-tech startup that offers a range of services including booking pandits, providing puja samagri, and delivering sacred items like Gangajal. The platform blends tradition with technology to make spiritual practices more accessible.",
              image: "/internship/ham.avif",
            },
            {
              title: "TeeMeUp",
              description:
                "Teemeup is a student-led custom T-shirt brand that blends creativity, youth-driven design, and quality apparel. They provide personalized clothing for college events, clubs, startups, and campaigns, driven by affordability and customization.",
              image: "/internship/tec.avif",
            },
            {
              title: "WomenUp",
              description:
                "WomenUp is dedicated to supporting and empowering women in business. They aim to build a strong community of women helping each other succeed. They are currently looking for Chapter Presidents, Content Writers, and Social Media Directors.",
              image: "/internship/wom.avif",
            },
            {
              title: "Pinkface",
              description:
                "Pinkface is a youth-led organisation focused on teenage mental health. Their initiative, Pinkvent, connects struggling teens with peers to provide a safe space for emotional support. They are looking for short-form content creators, designers, and researchers.",
              image: "/internship/tee.avif",
            },
          ].map(({ title, description, image }, i) => (
            <Card
              key={i}
              className="bg-white flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-16 py-8 md:py-12 rounded-none rounded-b-xl border-b-[15px] border-b-[#b17e11] text-black"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-10">
                <div>
                  <h3 className="font-bold text-[24px] md:text-[36px]">{title}</h3>
                  <p className="mt-4 text-[16px] md:text-[20px] max-w-3xl">{description}</p>
                </div>
              </div>
              <div className="mt-6 md:mt-0 self-center md:self-auto">
                <Image
                  src={image}
                  alt={title}
                  width={220}
                  height={220}
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
        <h2 className="text-[32px] md:text-[40px] font-extrabold mb-4">
          Emerging Startups
        </h2>
        <p className="text-[20px] md:text-[28px] mb-10">
          lorem ipsum lorem ipsum
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {[...Array(4)].map((_, i) => (
            <Card
              key={i}
              className="p-0 shadow-lg rounded-xl overflow-hidden text-black"
            >
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
                <div className="text-[20px] md:text-[28px] font-semibold mb-2">
                  Lorem ipsum
                </div>
                <div className="text-[16px] md:text-[24px] text-gray-700 mb-6">
                  Lorem ipsum
                </div>
                <Button className="bg-[#FDBA3C] text-white w-full text-[18px] md:text-[24px] py-3 rounded-lg">
                  Apply
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
