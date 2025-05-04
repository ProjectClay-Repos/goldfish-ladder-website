import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Internships from "./components/Internships";
import Events from "./components/Events";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />

      {/* About Us Section */}
      <AboutUs />

      {/* Internship Section */}
      <Internships />

      {/* Events Section */}
      <Events />

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
