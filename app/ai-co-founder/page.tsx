import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AiCoFounderPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#6B3F2D] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Let's build <span className="text-[#FDBA3C]">together</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
            Work with an AI-powered Co-Founder to plan your startup journey, validate ideas, and accelerate your growth.
          </p>
          <Button className="bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#FDBA3C]/90">Build your Assistant</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#6B3F2D]">How it Works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Our AI Co-Founder is designed to help you at every stage of your startup journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Idea Validation",
                desc: "Test your business ideas with market research and feedback.",
                icon: "💡",
              },
              {
                title: "Business Planning",
                desc: "Create comprehensive business plans and financial models.",
                icon: "📊",
              },
              {
                title: "Growth Strategy",
                desc: "Develop marketing, sales, and scaling strategies.",
                icon: "📈",
              },
            ].map((feature, i) => (
              <Card key={i} className="border-2 border-[#FDBA3C]/20 shadow-md">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 text-4xl">{feature.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold text-[#6B3F2D]">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="flex-1">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="AI Co-Founder demo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-[#6B3F2D]">Your AI-powered business partner</h2>
              <p className="text-lg text-gray-600">
                Our AI Co-Founder combines the latest in artificial intelligence with startup expertise to provide you
                with personalized guidance and support.
              </p>
              <ul className="space-y-3">
                {[
                  "24/7 availability to answer your questions",
                  "Personalized advice based on your industry and goals",
                  "Access to templates, resources, and tools",
                  "Data-driven insights to inform your decisions",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[#FDBA3C]"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#6B3F2D]">What Founders Say</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Hear from entrepreneurs who have used our AI Co-Founder to build their startups.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Alex Johnson",
                role: "Founder, TechStart",
                quote:
                  "The AI Co-Founder helped me validate my idea and create a solid business plan in just a week. It saved me months of research and planning.",
              },
              {
                name: "Priya Sharma",
                role: "CEO, EduTech",
                quote:
                  "I was stuck on my go-to-market strategy until I started working with the AI Co-Founder. The insights and suggestions were incredibly valuable.",
              },
              {
                name: "David Kim",
                role: "Founder, HealthApp",
                quote:
                  "As a solo founder, having the AI Co-Founder was like having a business partner to bounce ideas off of and get feedback from. Highly recommended!",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl text-[#FDBA3C]">"</div>
                  <p className="mb-6 text-gray-600">{testimonial.quote}</p>
                  <div className="flex items-center space-x-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={`/placeholder.svg?height=48&width=48&text=${testimonial.name.charAt(0)}`}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#6B3F2D]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="bg-[#FDBA3C]/10 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-lg">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-[#6B3F2D]">Get Started Today</h2>
              <p className="mt-2 text-gray-600">
                Tell us about your startup idea and we'll match you with the perfect AI Co-Founder.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="startup" className="text-sm font-medium text-gray-700">
                  Startup Name (if you have one)
                </label>
                <Input id="startup" placeholder="My Awesome Startup" />
              </div>

              <div className="space-y-2">
                <label htmlFor="industry" className="text-sm font-medium text-gray-700">
                  Industry
                </label>
                <select
                  id="industry"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-700 focus:border-[#FDBA3C] focus:outline-none focus:ring-2 focus:ring-[#FDBA3C]/50"
                >
                  <option value="">Select an industry</option>
                  <option value="tech">Technology</option>
                  <option value="health">Healthcare</option>
                  <option value="edu">Education</option>
                  <option value="fin">Finance</option>
                  <option value="retail">Retail</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="idea" className="text-sm font-medium text-gray-700">
                  Tell us about your idea
                </label>
                <Textarea
                  id="idea"
                  placeholder="Describe your startup idea or the problem you're trying to solve..."
                  rows={5}
                />
              </div>

              <Button className="w-full bg-[#6B3F2D] text-white hover:bg-[#6B3F2D]/90">Build my AI Co-Founder</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
