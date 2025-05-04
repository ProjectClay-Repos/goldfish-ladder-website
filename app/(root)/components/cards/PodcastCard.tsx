import Image, { StaticImageData } from "next/image";
import React from "react";

const PodcastCard = ({ image }: { image: StaticImageData }) => {
  return (
    <div className="inline-block mr-7">
      <div className="shadow-md rounded-xl">
        <div className="relative">
          <Image
            src={image}
            height={215}
            width={380}
            alt="Event Image"
            className="h-[215px]"
          />
          <div className="absolute bottom-0 bg-black/50 w-full opacity-100 text-white p-4 flex gap-2 rounded-b-xl">
            22nd April 2025
          </div>
        </div>
        <div className="px-3 mt-2 space-y-1 pb-2">
          <h3 className="font-bold text-3xl">Lorem Ipsum</h3>
          <p>Lorem Ipsum</p>
          <div>
            <button className="bg-[#6B3F2D] text-white hover:bg-[#FDBA3C]/90 py-[10px] px-7 rounded-md font-semibold -mb-10">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;
