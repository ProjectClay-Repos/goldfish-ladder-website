import Image from "next/image";
import right from "@/assets/icons/right.svg";

export default function AiCoFounderPage() {
  return (
    <section className="max-w-[965px] mx-auto">
      <div className="text-center">
        <h1>Lets build together</h1>
        <p>“Work with an AI Co-founder to Launch Your Startup Idea”</p>
        <p>From idea to impact—AI helps you plan, build, and pitch.</p>
      </div>
      <form action="">
        <div>
          <input type="text" />
          <button>
            <Image src={right} height={74} width={92} alt="Right Icon" />
          </button>
        </div>
      </form>
    </section>
  );
}
