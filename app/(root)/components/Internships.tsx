import InternshipCards from "./cards/InternshipCards";

const Internships = () => {
  return (
    <section className="max-w-[1200px] mx-auto mt-[272px]">
      <div className="mb-12">
        <h2 className="text-6xl font-bold mb-7">Internships</h2>
        <p className="font-semibold text-3xl">lorem ipsum lorem ipsum</p>
      </div>

      <div className="overflow-hidden whitespace-nowrap py-2">
        <InternshipCards />
        <InternshipCards />
        <InternshipCards />
      </div>

      <div className="mt-8">
        <button className="bg-[#FFB32C] text-[#6B3F2D] hover:bg-[#FDBA3C]/90 py-3 px-9 text-3xl rounded-2xl font-semibold">
          View More
        </button>
      </div>
    </section>
  );
};

export default Internships;
