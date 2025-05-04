import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import bannerImage from "@/assets/banner-image.png";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="max-w-[1100px] mx-auto mt-28">
        <div className="flex flex-col items-center justify-between md:flex-row md:gap-20">
          <div className="max-w-[482px] space-y-6 py-10">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-[56px]">
              Build better with <br /> AI Co-Founder
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </p>
            <div>
              <button className="bg-[#FFB32C] text-[#6B3F2D] hover:bg-[#FDBA3C]/90 py-3 px-9 text-3xl rounded-2xl">
                Ask AI
              </button>
            </div>
          </div>
          <Image
            src={bannerImage}
            alt="Banner Image"
            height={526}
            width={434}
          />
        </div>
      </section>

      {/* About Us Section */}
      <section className="max-w-[1100px] mx-auto mt-[186px]">
        <div className="max-w-[740px] mx-auto mb-12 text-center">
          <h2 className="text-6xl font-bold mb-16">About Us</h2>
          <p className="mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
        </div>

        <div className="bg-[#ffb32c]">
          <h2>Why Us ?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
            <Card className="border-2 border-[#FDBA3C]/20 shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <h3 className="mb-2 text-xl font-semibold text-[#6B3F2D]">
                  Lorem Ipsum
                </h3>
                <p className="text-gray-600">
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#6B3F2D]">
              Internship Opportunities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Discover exciting internship opportunities at innovative startups
              and established companies.
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
                          <h3 className="font-semibold text-[#6B3F2D]">
                            Company {i}
                          </h3>
                          <p className="text-sm text-[#6B3F2D]/80">
                            Tech Startup
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#6B3F2D]">
                        Remote
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="mb-2 text-lg font-semibold">
                      Product Design Intern
                    </h4>
                    <p className="mb-4 text-sm text-gray-600">
                      3-6 months • Full-time • $1000/month
                    </p>
                    <Button className="w-full bg-[#6B3F2D] text-white hover:bg-[#6B3F2D]/90">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/internship"
              className="inline-flex items-center text-[#6B3F2D] hover:text-[#FDBA3C]"
            >
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
            <h2 className="text-3xl font-bold text-[#6B3F2D]">
              Upcoming Events
            </h2>
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
                    <span className="text-sm text-gray-500">
                      May {10 + i}, 2025
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#6B3F2D]">
                    Startup Funding Workshop {i}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Learn how to secure funding for your early-stage startup.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-[#6B3F2D] text-[#6B3F2D]"
                  >
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/events"
              className="inline-flex items-center text-[#6B3F2D] hover:text-[#FDBA3C]"
            >
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
            <h2 className="text-3xl font-bold text-[#6B3F2D]">
              Voices of Young Founders
            </h2>
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
                  <h3 className="mb-2 text-lg font-semibold text-[#6B3F2D]">
                    From Idea to IPO
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">With Founder {i}</p>
                  <Button
                    variant="outline"
                    className="w-full border-[#6B3F2D] text-[#6B3F2D]"
                  >
                    Listen Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/podcast"
              className="inline-flex items-center text-[#6B3F2D] hover:text-[#FDBA3C]"
            >
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
                Build better with an{" "}
                <span className="text-[#FDBA3C]">AI Co-Founder</span>
              </h2>
              <p className="text-lg text-gray-300">
                Work with an AI-powered Co-Founder to plan your startup journey,
                validate ideas, and accelerate your growth.
              </p>
              <Button className="bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#FDBA3C]/90">
                Build your Assistant
              </Button>
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
  );
}
