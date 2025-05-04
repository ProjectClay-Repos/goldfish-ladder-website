import Image from "next/image";
import { Button } from "@/components/ui/button";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Internships from "./components/Internships";
import Events from "./components/Events";
import Podcast from "./components/Podcast";

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
      <Podcast />

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
      <footer className="h-32 sm:h-40 bg-[#6B3F2D] w-full"></footer>
    </div>
  );
}
