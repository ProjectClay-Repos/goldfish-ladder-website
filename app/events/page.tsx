import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="flex flex-col items-center mx-2 md:mx-9 my-9">
      {/* Hero Section */}
      <section>
        <div className=" max-w-[1047px]  rounded-2xl px-2 md:px-14 py-[70px] bg-gradient-to-b from-[#ffb32c] to-[#b1662b] mt-[10px]">
          <div className="flex flex-col items-center gap-10">
            <div className="w-full">
              <h1 className="text-2xl md:text-7xl font-bold text-white text-center leading-tight">
                "Events to Pitch, Learn, and Connect "
              </h1>
            </div>

            <div className="mt-4 md:mt-11">
              <p className="md:text-2xl font-semibold text-white text-center leading-tight">
                Join pitch nights, startup jams, hackathons, and virtual
                meetups—all designed for young founders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Currently Active Events */}
      <section className="mt-9  max-w-[1047px]">
        <div className="flex flex-col  w-full mt-[40px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Currently Active
          </h1>
          <p className="text-xl font-medium text-black">
            lorem ipsum lorem ipsum
          </p>
        </div>
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-4xl mx-auto px-4">
            {[
              {
                title: "Lorem ipsum",
                image: "/Event/Rectangle 35.png",
                desc: "Lorem ipsum",
                date: "22nd April",
                location: "New Delhi",
                money: "46$",
              },
              {
                title: "Lorem ipsum",
                image: "/Event/Rectangle 35.png",
                desc: "Lorem ipsum",
                date: "22nd April",
                location: "New Delhi",
                money: "46$",
              },
              {
                title: "Lorem ipsum",
                image: "/Event/Rectangle 35.png",
                desc: "Lorem ipsum",
                date: "22nd April",
                location: "New Delhi",
                money: "46$",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col w-full max-w-xs mx-auto shadow-md pb-[30px] rounded-md mt-[50px]"
              >
                {/* Image container with explicit relative positioning and high z-index */}
                <div className="relative w-full">
                  <Image
                    src={item.image}
                    alt="internship hero"
                    width={500}
                    height={600}
                    className="object-contain max-w-full h-auto"
                  />

                  <div
                    className="absolute bottom-0 left-0 right-0 bg-black  bg-opacity-30 h-[40px] rounded-b-lg pl-[10px]"
                    // Using inline style for z-index as backup
                  >
                    <div className="flex flex-row items-center opacity-80 mt-2 text-white">
                      <div className="mr-2 ">
                        <Calendar size={22} strokeWidth={1.4} />
                      </div>
                      <span className="font-medium text-sm capitalize">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full pl-[10px] h-[40%]">
                  <div className="flex flex-col mb-1">
                    <h1 className="text-3xl font-bold text-black mt-1">
                      {item.title}
                    </h1>
                    <p className="text-md font-medium text-black">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex flex-row items-center opacity-80 mt-2">
                    <div className="mr-3">
                      <MapPin size={22} strokeWidth={1.4} />
                    </div>
                    <span className="font-medium text-sm capitalize">
                      {item.location}
                    </span>
                  </div>

                  <div className="flex flex-row items-center mt-4">
                    <div className="mr-3">
                      <Image
                        src="Event/MoneyWavy (1).png"
                        alt="internship hero"
                        width={22}
                        height={22}
                        className="object-contain max-w-full h-auto"
                      />
                    </div>
                    <span className="font-medium text-sm">{item.money}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mt-9  max-w-[1047px] ">
        <div className="flex flex-col w-full mt-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Upcoming Events
          </h1>
          <p className="text-lg font-medium">lorem ipsum lorem ipsum</p>
        </div>

        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-4xl mx-auto px-4">
            {[
              {
                title: "Lorem ipsum",
                image: "/Event/Rectangle 35t.png",
                desc: "Lorem ipsum",
                date: "22nd April",
                location: "New Delhi",
                money: "46$",
              },
              {
                title: "Lorem ipsum",
                image: "/Event/Rectangle 35s.png",
                desc: "Lorem ipsum",
                date: "22nd April",
                location: "New Delhi",
                money: "46$",
              },
              {
                title: "Lorem ipsum",
                image: "/Event/Rectangle 35c.png",
                desc: "Lorem ipsum",
                date: "22nd April",
                location: "New Delhi",
                money: "46$",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col w-full max-w-xs mx-auto shadow-md pb-[30px] rounded-b-md mt-[50px]"
              >
                {/* Image container with explicit relative positioning and high z-index */}
                <div className="relative w-full">
                  <Image
                    src={item.image}
                    alt="internship hero"
                    width={500}
                    height={600}
                    className="object-contain max-w-full h-auto"
                  />

                  <div
                    className="absolute bottom-0 left-0 right-0 bg-black  bg-opacity-30 h-[40px] rounded-b-lg pl-[10px]"
                    // Using inline style for z-index as backup
                  >
                    <div className="flex flex-row items-center opacity-80 mt-2 text-white">
                      <div className="mr-2 ">
                        <Calendar size={22} strokeWidth={1.4} />
                      </div>
                      <span className="font-medium text-sm capitalize">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full pl-[10px] h-[40%]">
                  <div className="flex flex-col mb-1">
                    <h1 className="text-3xl font-bold text-black mt-1">
                      {item.title}
                    </h1>
                    <p className="text-md font-medium text-black">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex flex-row items-center opacity-80 mt-2">
                    <div className="mr-3">
                      <MapPin size={22} strokeWidth={1.4} />
                    </div>
                    <span className="font-medium text-sm capitalize">
                      {item.location}
                    </span>
                  </div>

                  <div className="flex flex-row items-center mt-4">
                    <div className="mr-3">
                      <Image
                        src="Event/MoneyWavy (1).png"
                        alt="internship hero"
                        width={22}
                        height={22}
                        className="object-contain max-w-full h-auto"
                      />
                    </div>
                    <span className="font-medium text-sm">{item.money}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#FFB32C] px-2 py-20 text-white max-w-[1047px] rounded-xl mt-24 md:px-12">
        <div className="flex flex-col w-full w-max-[1047px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            For Students
          </h1>
          <p className="text-xl font-medium text-black">
            lorem ipsum lorem ipsum
          </p>
        </div>
        <div className="flex flex-col justify-center w-full">
          <div className="flex flex-wrap justify-center sm:justify-between gap-2 w-full mt-8 md:px-4">
            <button className="flex-1 min-w-[120px] px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100">
              Filters
            </button>
            <button className="flex-1 min-w-[120px] px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100">
              Filters
            </button>
            <button className="flex-1 min-w-[120px] px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100">
              Filters
            </button>
            <button className="flex-1 min-w-[120px] px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100">
              Filters
            </button>
            <button className="px-2 py-2 bg-white text-black rounded-full hover:bg-gray-100 w-[40px]">
              <Image
                src="/Event/tune.png"
                alt="tune icon"
                width={24}
                height={24}
                className="object-contain"
              />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-4xl mx-auto px-4">
            {[
              {
                title: "Lorem ipsum",
                image: "/Event/Rectangle 35t.png",
                desc: "Lorem ipsum",
                date: "22nd April",
                location: "New Delhi",
                money: "46$",
              },
              {
                title: "Lorem ipsum",
                image: "/Event/Rectangle 35s.png",
                desc: "Lorem ipsum",
                date: "22nd April",
                location: "New Delhi",
                money: "46$",
              },
              {
                title: "Lorem ipsum",
                image: "/Event/Rectangle 35c.png",
                desc: "Lorem ipsum",
                date: "22nd April",
                location: "New Delhi",
                money: "46$",
              },
              {
                title: "Lorem ipsum",
                image: "/Event/Rectangle 35t.png",
                desc: "Lorem ipsum",
                date: "22nd April",
                location: "New Delhi",
                money: "46$",
              },
              {
                title: "Lorem ipsum",
                image: "/Event/Rectangle 35s.png",
                desc: "Lorem ipsum",
                date: "22nd April",
                location: "New Delhi",
                money: "46$",
              },
              {
                title: "Lorem ipsum",
                image: "/Event/Rectangle 35c.png",
                desc: "Lorem ipsum",
                date: "22nd April",
                location: "New Delhi",
                money: "46$",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col w-full max-w-xs min-w-[200px] mx-auto shadow-md pb-[30px] rounded-lg mt-[50px] bg-white"
              >
                {/* Image container with explicit relative positioning and high z-index */}
                <div className="relative w-full">
                  <Image
                    src={item.image}
                    alt="internship hero"
                    width={500}
                    height={600}
                    className="object-contain max-w-full h-auto"
                  />

                  <div
                    className="absolute bottom-0 left-0 right-0 bg-black  bg-opacity-30 h-[40px] rounded-b-lg pl-[10px]"
                    // Using inline style for z-index as backup
                  >
                    <div className="flex flex-row items-center opacity-80 mt-2 text-white">
                      <div className="mr-2 ">
                        <Calendar size={22} strokeWidth={1.4} />
                      </div>
                      <span className="font-medium text-sm capitalize">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full pl-[10px] h-[40%]">
                  <div className="flex flex-col mb-1">
                    <h1 className="text-3xl font-bold text-black mt-1">
                      {item.title}
                    </h1>
                    <p className="text-md font-medium text-black">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex flex-row items-center opacity-80 mt-2 text-black">
                    <div className="mr-3">
                      <MapPin size={22} strokeWidth={1.4} />
                    </div>
                    <span className="font-medium text-sm capitalize">
                      {item.location}
                    </span>
                  </div>

                  <div className="flex flex-row items-center mt-4 text-black">
                    <div className="mr-3">
                      <Image
                        src="Event/MoneyWavy (1).png"
                        alt="internship hero"
                        width={22}
                        height={22}
                        className="object-contain max-w-full h-auto"
                      />
                    </div>
                    <span className="font-medium text-sm">{item.money}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 text-center mt-[70px]">
          <Button className="bg-[#854836] h-[57px] text-white hover:bg-[#FDBA3C]/90  w-[316px]">
            View more
          </Button>
        </div>
      </section>
    </div>
  );
}
