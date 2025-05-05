import Image from "next/image";
import right from "@/assets/icons/right.svg";

export default function AiCoFounderPage() {
  return (
    <section className="max-w-[965px] mx-auto mt-20 md:mt-60 mb-20 md:mb-44 px-2">
      <div className="text-center max-w-[770px] mx-auto mb-5 md:mb-14">
        <h1 className="font-bold text-4xl md:text-6xl mb-4">
          Lets build together
        </h1>
        <p className="text-xl md:text-4xl">
          “Work with an AI Co-founder to Launch Your Startup Idea”
        </p>
      </div>
      <p className="bg-[#854836] text-center text-white rounded-3xl py-3 text-sm px-2 md:text-xl font-bold mb-5 md:mb-14">
        From idea to impact—AI helps you plan, build, and pitch.
      </p>
      <form>
        <div className="w-full shadow-inner bg-[#FFEED3] flex md:py-3 p-2 md:pl-8 rounded-3xl">
          <input
            type="text"
            className="flex-1 bg-[#FFEED3] border-none focus:outline-none text-lg md:text-4xl font-normal"
            placeholder="Tell us your ideas "
          />
          <button type="submit" className="h-10 w-10 md:w-full md:h-full">
            <Image src={right} height={74} width={92} alt="Right Icon" />
          </button>
        </div>
      </form>
    </section>
  );
}
