import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import InternshipCards from "./cards/InternshipCards";

const Internships = () => {
  return (
    <section className="max-w-[1200px] mx-auto mt-[272px]">
      <div className="mb-12">
        <h2 className="text-6xl font-bold mb-7">Internships</h2>
        <p className="">lorem ipsum lorem ipsum</p>
      </div>

      <div>
        <InternshipCards />
        <InternshipCards />
        <InternshipCards />
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/internship"
          className="inline-flex items-center text-[#6B3F2D] hover:text-[#FDBA3C]"
        >
          View all opportunities
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default Internships;
