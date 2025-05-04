import Image from "next/image";
import map from "@/assets/icons/map.svg";
import calendar from "@/assets/icons/calendar.svg";
import money from "@/assets/icons/money.svg";
import companyLogo from "@/assets/company-logo.svg";

const InternshipCards = () => {
  return (
    <div className="bg-[#ffb32c]/10 shadow-md flex py-9 px-7">
      <div>
        <h3>Lorem Ipsum</h3>
        <p>Lorem Ipsum</p>
        <div className="flex">
          <div className="flex">
            <Image src={map} height={20} width={20} alt="Map Pin" />
            <span>Remote</span>
          </div>
          <div className="flex">
            <Image src={calendar} height={20} width={20} alt="Duration" />
            <span>3 Months</span>
          </div>
          <div className="flex">
            <Image src={money} height={20} width={20} alt="Salary" />
            <span>Unpaid</span>
          </div>
        </div>
      </div>
      <Image src={companyLogo} width={216} height={52} alt="Company" />
    </div>
  );
};

export default InternshipCards;
