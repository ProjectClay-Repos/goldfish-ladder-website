import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import AboutUsCard from "./cards/AboutUsCard";

const AboutUs = () => {
  return (
    <section className="max-w-[1100px] mx-auto mt-28 md:mt-44 px-2 md:px-0">
      <div className="max-w-[740px] mx-auto mb-12 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-16">About Us</h2>
        <p className="mx-auto text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </p>
      </div>

      <div className="bg-[#ffb32c] px-3 py-6 md:px-14 md:py-11 rounded-3xl">
        <h2 className="text-center text-white text-6xl font-bold mb-11">
          Why Us ?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
          <AboutUsCard />
          <AboutUsCard />
          <AboutUsCard />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
