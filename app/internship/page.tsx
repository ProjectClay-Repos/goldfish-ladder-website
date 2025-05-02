import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"

export default function InternshipPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FDBA3C]/20 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl font-bold text-[#6B3F2D]">Internship Opportunities</h1>
              <p className="text-lg text-gray-600">
                Discover exciting internship opportunities at innovative startups and established companies.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative h-[300px] w-full">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Internship illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search internships..." className="pl-10" />
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
              <Button className="bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#FDBA3C]/90">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#6B3F2D]">Available Internships</h2>

          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Card key={i} className="overflow-hidden border-none shadow-md">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex items-center space-x-4 border-b border-gray-200 bg-[#FDBA3C]/10 p-4 md:w-1/3 md:border-b-0 md:border-r">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                        <div className="h-10 w-10 rounded-full bg-[#FDBA3C]"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#6B3F2D]">Company {i}</h3>
                        <p className="text-sm text-gray-600">Tech Startup</p>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-4">
                      <div>
                        <div className="mb-2 flex items-center justify-between">
                          <h4 className="text-lg font-semibold">Product Design Intern</h4>
                          <span className="rounded-full bg-[#FDBA3C]/10 px-3 py-1 text-xs font-medium text-[#FDBA3C]">
                            {i % 2 === 0 ? "Remote" : "On-site"}
                          </span>
                        </div>
                        <p className="mb-4 text-sm text-gray-600">3-6 months • Full-time • ${i * 500 + 500}/month</p>
                        <p className="text-sm text-gray-600">
                          Join our team to design innovative products that solve real-world problems. You'll work
                          closely with our product and engineering teams to create user-centered designs.
                        </p>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button className="bg-[#6B3F2D] text-white hover:bg-[#6B3F2D]/90">Apply Now</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Startups */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#6B3F2D]">Emerging Startups</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Card key={i} className="overflow-hidden border-none shadow-md">
                <CardContent className="p-4">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FDBA3C]/10">
                      <div className="h-10 w-10 rounded-full bg-[#FDBA3C]"></div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-center text-lg font-semibold text-[#6B3F2D]">Startup {i}</h3>
                  <p className="mb-4 text-center text-sm text-gray-600">
                    {i % 3 === 0 ? "FinTech" : i % 3 === 1 ? "HealthTech" : "EdTech"}
                  </p>
                  <Button variant="outline" className="w-full border-[#6B3F2D] text-[#6B3F2D]">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#6B3F2D] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Looking to hire interns?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            Post your internship opportunities and connect with talented young professionals.
          </p>
          <Button className="bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#FDBA3C]/90">Post an Internship</Button>
        </div>
      </section>
    </div>
  )
}
