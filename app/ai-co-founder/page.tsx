import Image from "next/image";
import right from "@/assets/icons/right.svg";

export default function AiCoFounderPage() {
  return (
    <section className="max-w-[965px] mx-auto mt-[235px] mb-[178px]">
      <div className="text-center max-w-[770px] mx-auto mb-14">
        <h1 className="font-bold text-6xl mb-4">Lets build together</h1>
        <p className="text-[38px]">
          “Work with an AI Co-founder to Launch Your Startup Idea”
        </p>
      </div>
      <p className="bg-[#854836] text-center text-white rounded-3xl py-3 text-xl font-bold mb-14">
        From idea to impact—AI helps you plan, build, and pitch.
      </p>
      <form>
        <div className="w-full shadow-inner bg-[#FFEED3] flex py-3 pr-1 pl-8 rounded-3xl">
          <input
            type="text"
            className="flex-1 bg-[#FFEED3] border-none focus:outline-none text-4xl font-normal"
            placeholder="Tell us your ideas "
          />
          <button>
            <Image src={right} height={74} width={92} alt="Right Icon" />
          </button>
        </div>
      </form>
    </section>
  );
}
