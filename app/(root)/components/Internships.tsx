import InternshipCards from "./cards/InternshipCards";

const Internships = () => {
  return (
    <section className="max-w-[1200px] mx-auto mt-[272px] px-2 md:px-0 w-full">
      <div className="mb-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-7">
          Internships
        </h2>
        <p className="font-semibold text-lg md:text-3xl">
          lorem ipsum lorem ipsum
        </p>
      </div>

      <div className="md:overflow-hidden md:whitespace-nowrap py-2">
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
