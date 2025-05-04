import Image from "next/image";
import { Button } from "@/components/ui/button";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Internships from "./components/Internships";
import Events from "./components/Events";
import Podcast from "./components/Podcast";
import Cofounder from "./components/Cofounder";

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
      <Cofounder />

      {/* Footer */}
      <footer className="h-32 sm:h-40 bg-[#6B3F2D] w-full mt-36"></footer>
    </div>
  );
}
