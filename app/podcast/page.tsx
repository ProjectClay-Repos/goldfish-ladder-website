import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Clock, Bookmark, Share2 } from "lucide-react"

export default function PodcastPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center max-w-[1074px] mx-auto">
  <div className="w-full h- px-4">
          <Image
          src="podcast/Screen.png"
          alt="internship hero"
          width={1000}      // bump this up
          height={1060}     // bump this up
          className="object-contain max-w-full mx-auto"
        />
        </div>
      </section>

      <section >
      <div className=" max-w-[1047px]  rounded-2xl px-14 py-[70px] bg-gradient-to-b from-[#ffb32c] to-[#b1662b] mt-[10px] mx-[50px]">
      <div className="flex flex-col items-center gap-10">
        <div className="w-full  max-w-[750px]">
          <h1 className="text-[70px] font-bold text-white text-center leading-tight">
          “Voices of Young Founders”
          </h1>
        </div>
        
        <div className="mt-[43px]">
          <p className="text-[26px] font-semibold text-white text-center leading-tight">
          Tune into candid conversations with high school and college founders as they share the ups, downs, and unexpected lessons from launching their first startups—with a little help from AI
          </p>
        </div>
      </div>
    </div>

      </section >

      {/* Featured Episode */}
      <section className="text-black">

        <div className="container mx-auto flex flex-col items-center justify-center">
          <h2 className="mt-[80px] mb-4 text-3xl font-black ">Gain startup experience</h2>
          <p className="mb-8 text-2xl  max-w-[600px] text-center">Discover AI startup ideas and connect with potential co-founders</p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 w-full max-w-5xl mx-auto px-4">
    {[
      { title: "Hear cutting-edge concepts ", image: "/Event/Rectangle 35.png"},
      { title: "Meet entrepreneurs and peer  ", image: "/Event/Rectangle 35.png"},
      { title: "Stay up-to-day on trends ", image: "/Event/Rectangle 35.png"},
      { title: "Make Progress", image: "/Event/Rectangle 35.png"},

    ].map((item, i) => (
      <div key={i} className="flex flex-col min-w-[380px] max-w-xs mx-auto shadow-md pb-[20px] rounded-lg mt-[50px] bg-[#FEB22C]">
      {/* Image container with explicit relative positioning and high z-index */}
      <div className="relative w-full">
  <Image
    src={item.image}
    alt="internship hero"
    width={900}
    height={500}
    className=" max-w-full max-h-[280px]"
  />
</div>

      
      <div className="w-full h-[40%] pl-[10px] pt-[10px] flex items-center">
  <div>
    <h1 className="text-[24px]  text-black mt-1">
      {item.title}
    </h1>
  </div>
</div>

    </div>

    ))}
  </div>




      </section>

     

      <section className="mt-[43px]  w-max-[1047px] ">
            <div className="flex flex-col  w-full mt-[40px]">
            <h1 className="text-5xl font-bold mb-4 text-black">Upcoming Events</h1>
            <p className="text-xl font-medium text-black">lorem ipsum lorem ipsum</p>
          </div>

          <div className="flex justify-center w-full">
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-4xl mx-auto px-4">
    {[
      { title: "Lorem ipsum", image: "/podcast/audio.png", desc: "Lorem ipsum", date: "22nd April"},
      { title: "Lorem ipsum", image: "/podcast/audio.png", desc: "Lorem ipsum", date: "22nd April"},
      { title: "Lorem ipsum", image: "/podcast/audio.png", desc: "Lorem ipsum", date: "22nd April"},
    ].map((item, i) => (
      <div key={i} className="flex flex-col w-full max-w-xs mx-auto shadow-md pb-[30px] rounded-b-md mt-[50px]">
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
            {/* <Calendar size={22} strokeWidth={1.4} /> */}
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
        

        
        <div className="flex flex-row items-center mt-4">


        </div>
      </div>
    </div>

    ))}
  </div>
</div>

      
      </section>



      <section className="mt-[43px]  w-max-[1047px] ">
            <div className="flex flex-col  w-full mt-[40px]">
            <h1 className="text-5xl font-bold mb-4 text-black">Upcoming Events</h1>
            <p className="text-xl font-medium text-black">lorem ipsum lorem ipsum</p>
          </div>

          <div className="flex justify-center w-full">
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-4xl mx-auto px-4">
    {[
      { title: "Lorem ipsum", image: "/podcast/tyrany.png", desc: "Lorem ipsum", date: "22nd April"},
      { title: "Lorem ipsum", image: "/podcast/cat.png", desc: "Lorem ipsum", date: "22nd April"},
      { title: "Lorem ipsum", image: "/podcast/s.png", desc: "Lorem ipsum", date: "22nd April"},
    ].map((item, i) => (
      <div key={i} className="flex flex-col w-full max-w-xs mx-auto shadow-md pb-[30px] rounded-b-md mt-[50px]">
      {/* Image container with explicit relative positioning and high z-index */}

      
      <div className="w-full pl-[10px] h-[40%]">
        <div className="flex flex-col mb-1">
          <h1 className="text-3xl font-bold text-black mt-1">
            {item.title}
          </h1>
          <p className="text-md font-medium text-black">
            {item.desc}
          </p>
        </div>
        

        <div className="flex flex-row items-center mt-4">

        </div>
      </div>
    </div>

    ))}
  </div>
</div>

      
      </section>

      {/* Recently Posted */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#6B3F2D]">Recently Posted</h2>

          <div className="space-y-4">

          </div>
        </div>
      </section>

      {/* Curated For You */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#6B3F2D]">Curated For You</h2>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">

          </div>
        </div>
      </section>

      {/* Popular Speakers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#6B3F2D]">Popular Speakers</h2>

          <div className="flex space-x-6 overflow-x-auto pb-4">
            {[
              "Alex Johnson",
              "Sarah Chen",
              "Michael Lee",
              "Priya Sharma",
              "David Kim",
              "Emma Wilson",
              "James Rodriguez",
              "Aisha Patel",
            ].map((name, i) => (
              <div key={i} className="flex flex-col items-center flex-shrink-0 w-32">
                <div className="relative h-24 w-24 overflow-hidden rounded-full mb-2">
                  <Image
                    src={`/placeholder.svg?height=96&width=96&text=${name.charAt(0)}`}
                    alt={name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-[#6B3F2D] text-center">{name}</h3>
                <p className="text-xs text-gray-500 text-center">
                  {i % 4 === 0 ? "Founder" : i % 4 === 1 ? "Investor" : i % 4 === 2 ? "Mentor" : "Advisor"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#6B3F2D] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Want to share your founder story?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            We're always looking for inspiring entrepreneurs to feature on our podcast.
          </p>
          <Button className="bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#FDBA3C]/90">Apply to be a Guest</Button>
        </div>
      </section>
    </div>
  )
}
