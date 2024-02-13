import React from "react";
import logo from "../../../assets/logo/logo.svg";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";

export default function SecondFooter() {
  return (
    <div className="w-full bg-[#181818] h-[173.51px]">
      <div className="max-w-screen-lg m-auto py-5">
        <div className="flex justify-evenly">
          <div>
            <div>
              <img src={logo} width="58.31px" height="58.31px" />
            </div>
            <div>
              <h4 className="text-[#ABABAB] text-[9px] font-bold mt-1">
                American International <br />
                University-Bangladesh (AIUB)
              </h4>
              <p className="text-[#ABABAB] text-[8px] flex justify-start mt-1">
                <MdLocationOn className="mr-1" />
                408/1 (Old KA 66/1), Kuratoli, <br />
                Khilkhet,Dhaka 1229, Bangladesh
              </p>
              <p className="text-[#ABABAB] text-[8px] flex justify-start mt-1">
                <MdEmail className="mr-1" />
                info@aiub.edu
              </p>
            </div>
          </div>
          <div>
            <p className="text-white text-[8.53px]">Become AIUBian</p>
            <div className="divider w-[144.36px] divider-neutral p-0 m-0"></div>
            <p className="text-[#ABABAB] text-[8.53px]">Future Students</p>
            <p className="text-[#ABABAB] text-[8.53px]">On Campus</p>
            <p className="text-[#ABABAB] text-[8.53px]">Admission</p>
            <p className="text-[#ABABAB] text-[8.53px]">Tuition Fees</p>
            <p className="text-[#ABABAB] text-[8.53px]">Scholarships</p>
            <p className="text-[#ABABAB] text-[8.53px]">Apply Now</p>
          </div>
          <div>
            <p className="text-white text-[8.53px]">Academics</p>
            <div className="divider w-[144.36px] divider-neutral p-0 m-0"></div>
            <p className="text-[#ABABAB] text-[8.53px]">Academic Calender</p>
            <p className="text-[#ABABAB] text-[8.53px]">Academic Regulations</p>
            <p className="text-[#ABABAB] text-[8.53px]">
              Faculty of Arts & Social Sciences
            </p>
            <p className="text-[#ABABAB] text-[8.53px]">
              Faculty of Business Administration
            </p>
            <p className="text-[#ABABAB] text-[8.53px]">
              Faculty of Engineering
            </p>
            <p className="text-[#ABABAB] text-[8.53px]">
              Faculty of Science & Technology
            </p>
          </div>
          <div>
            <p className="text-white text-[8.53px]">Research</p>
            <div className="divider w-[144.36px] divider-neutral p-0 m-0"></div>
            <p className="text-[#ABABAB] text-[8.53px]">AJBE</p>
            <p className="text-[#ABABAB] text-[8.53px]">AJSE</p>
            <p className="text-[#ABABAB] text-[8.53px]">Past Conferences</p>
            <p className="text-[#ABABAB] text-[8.53px]">Upcoming Conferences</p>
            <p className="text-[#ABABAB] text-[8.53px]">
              Collaborating Institues
            </p>
            <p className="text-[#ABABAB] text-[8.53px]">Innovations</p>
          </div>
        </div>
      </div>
    </div>
  );
}
