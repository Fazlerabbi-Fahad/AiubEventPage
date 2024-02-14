import React from "react";
import logo from "../../../assets/logo/logo.svg";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function SecondFooter() {
  const navigate = useNavigate();
  const handleEvents = () => {
    navigate("/event");
  };
  return (
    <div className="bg-[#181818]">
      <footer className="footer py-10 bg-[#181818] max-w-screen-lg m-auto">
        <aside>
          <div>
            <div>
              <img
                onClick={handleEvents}
                src={logo}
                width="58.31px"
                height="58.31px"
              />
            </div>
            <div>
              <h4 className="text-[#ABABAB] text-md font-bold mt-1">
                American International <br />
                University-Bangladesh (AIUB)
              </h4>
              <p className="text-[#ABABAB] text-xs flex justify-start mt-2">
                <MdLocationOn className="mr-1 mt-[3px]" />
                408/1 (Old KA 66/1), Kuratoli, <br />
                Khilkhet,Dhaka 1229, Bangladesh
              </p>
              <p className="text-[#ABABAB] text-xs flex justify-start mt-1">
                <MdEmail className="mr-1 mt-[3px]" />
                info@aiub.edu
              </p>
            </div>
          </div>
        </aside>
        <nav>
          <p className="text-white text-md">Become AIUBian</p>
          <div className="divider w-[144.36px] divider-neutral p-0 m-0"></div>
          <p className="text-[#ABABAB] text-sm">Future Students</p>
          <p className="text-[#ABABAB] text-sm">On Campus</p>
          <p className="text-[#ABABAB] text-sm">Admission</p>
          <p className="text-[#ABABAB] text-sm">Tuition Fees</p>
          <p className="text-[#ABABAB] text-sm">Scholarships</p>
          <p className="text-[#ABABAB] text-sm">Apply Now</p>
        </nav>
        <nav>
          <p className="text-white text-md">Academics</p>
          <div className="divider w-[144.36px] divider-neutral p-0 m-0"></div>
          <p className="text-[#ABABAB] text-sm">Academic Calender</p>
          <p className="text-[#ABABAB] text-sm">Academic Regulations</p>
          <p className="text-[#ABABAB] text-sm">
            Faculty of Arts & Social Sciences
          </p>
          <p className="text-[#ABABAB] text-sm">
            Faculty of Business Administration
          </p>
          <p className="text-[#ABABAB] text-sm">Faculty of Engineering</p>
          <p className="text-[#ABABAB] text-sm">
            Faculty of Science & Technology
          </p>
        </nav>
        <nav>
          <p className="text-white text-md">Research</p>
          <div className="divider w-[144.36px] divider-neutral p-0 m-0"></div>
          <p className="text-[#ABABAB] text-sm">AJBE</p>
          <p className="text-[#ABABAB] text-sm">AJSE</p>
          <p className="text-[#ABABAB] text-sm">Past Conferences</p>
          <p className="text-[#ABABAB] text-sm">Upcoming Conferences</p>
          <p className="text-[#ABABAB] text-sm">Collaborating Institues</p>
          <p className="text-[#ABABAB] text-sm">Innovations</p>
        </nav>
      </footer>
    </div>
  );
}
