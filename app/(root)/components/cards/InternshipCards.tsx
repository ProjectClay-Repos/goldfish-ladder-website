import Image from "next/image";
import money from "@/assets/icons/money.svg";
import companyLogo from "@/assets/company-logo.svg";
import { Calendar, MapPin } from "lucide-react";

const InternshipCards = () => {
  return (
    <div className="md:inline-block mb-4 md:mr-7">
      <div className="bg-[#ffb32c]/15 shadow-md flex flex-col-reverse gap-4 md:gap-0 md:flex-row py-9 px-7 rounded-xl">
        <div>
          <div className="mb-6">
            <h3 className="font-bold text-4xl">Lorem Ipsum</h3>
            <p className="text-lg">Lorem Ipsum</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex items-center gap-1">
              <MapPin height={28} width={28} />
              <span>Remote</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar height={28} width={28} />
              <span>3 Months</span>
            </div>
            <div className="flex items-center gap-1">
              <Image src={money} height={28} width={28} alt="Salary" />
              <span>Unpaid</span>
            </div>
          </div>
        </div>
        <div>
          <Image src={companyLogo} width={216} height={52} alt="Company" />
        </div>
      </div>
    </div>
  );
};

export default InternshipCards;
