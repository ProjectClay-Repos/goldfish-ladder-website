import PodcastCard from "./cards/PodcastCard";
import podcast1 from "@/assets/podcasts/podcast1.png";
import podcast2 from "@/assets/podcasts/podcast2.png";
import podcast3 from "@/assets/podcasts/podcast3.png";

const Podcast = () => {
  const podcasts = [podcast1, podcast2, podcast3];

  return (
    <section className="max-w-[1210px] mx-auto mt-[272px] px-12 py-7 rounded-2xl bg-[#fff1db]">
      <div className="mb-12">
        <h2 className="text-6xl font-bold mb-7">Podcast</h2>
        <p className="font-semibold text-3xl">lorem ipsum lorem ipsum</p>
      </div>

      <div className="overflow-hidden whitespace-nowrap py-2">
        {podcasts.map((podcast, index) => (
          <PodcastCard key={index} image={podcast} />
        ))}
      </div>

      <div className="mt-8">
        <button className="bg-[#FFB32C] text-[#6B3F2D] hover:bg-[#FDBA3C]/90 py-3 px-9 text-3xl rounded-2xl font-semibold">
          View More
        </button>
      </div>
    </section>
  );
};

export default Podcast;
