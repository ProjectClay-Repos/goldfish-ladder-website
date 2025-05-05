import bannerImage from "@/assets/banner-image.png";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="max-w-[1100px] mx-auto mt-10 md:mt-28 px-2 md:px-0">
      <div className="flex flex-col-reverse items-center justify-between md:flex-row md:gap-20">
        <div className="max-w-[482px] space-y-6 py-10">
          <h1 className="text-3xl font-bold md:text-5xl lg:text-[56px]">
            Build better with <br /> AI Co-Founder
          </h1>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
          <div>
            <button className="bg-[#FFB32C] text-[#6B3F2D] hover:bg-[#FDBA3C]/90 py-1 px-4 md:py-3 md:px-9 text-xl md:text-3xl rounded-2xl">
              Ask AI
            </button>
          </div>
        </div>
        <Image src={bannerImage} alt="Banner Image" height={526} width={434} />
      </div>
    </section>
  );
};

export default Banner;
