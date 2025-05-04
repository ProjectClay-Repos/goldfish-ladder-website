import React from "react";
import EventCard from "./cards/EventCard";
import event1 from "@/assets/events/event1.png";
import event2 from "@/assets/events/event2.png";
import event3 from "@/assets/events/event3.png";

const Events = () => {
  const events = [event1, event2, event3, event3];

  return (
    <section className="max-w-[1120px] mx-auto mt-[272px]">
      <div className="mb-12">
        <h2 className="text-6xl font-bold mb-7">Internships</h2>
        <p>lorem ipsum lorem ipsum</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {events.map((event, index) => (
          <EventCard key={index} image={event} />
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

export default Events;
