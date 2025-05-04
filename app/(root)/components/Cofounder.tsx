import Image from "next/image";
import chatgpt from "@/assets/chatgpt.png";

const Cofounder = () => {
  return (
    <section className="max-w-[1080px] mx-auto mt-28 mb-36">
      <div className="max-w-[482px] space-y-6 py-10">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-[56px]">
          AI Co-Founder
        </h1>
      </div>
      <figure>
        <Image
          src={chatgpt}
          alt="Chat GPT"
          height={714}
          width={1070}
          className="object-contain"
        />
      </figure>

      <div className="mt-14 text-center">
        <button className="bg-[#FFB32C] text-3xl font-bold py-7 px-8 rounded-md">
          Meet Your AI co-founder
        </button>
      </div>
    </section>
  );
};

export default Cofounder;
