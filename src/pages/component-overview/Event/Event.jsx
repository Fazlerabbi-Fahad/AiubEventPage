import React from "react";
import { useParams } from "react-router-dom";
import aiub8thjecl24001 from "../../../assets/images/aiub8thjecl24001.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Event() {
  const { id } = useParams();

  return (
    <div className="max-w-screen-lg m-auto">
      <div className="text-[11px] my-10 hidden md:flex ">
        <p className="text-primary mr-1">
          <Link to="/">Home</Link>
        </p>
        <p className="mr-1 text-[#8392A1]">&gt;</p>
        <p className="text-[#8392A1]">News & Events</p>
      </div>
      <div className="bg-[#EEEEEE] w-full rounded-[7.49px] mt-0 md:mt-5 p-0  md:p-5">
        <div className="card rounded-none p-0 md:p-3">
          <figure>
            <img src={aiub8thjecl24001} className="rounded-none" alt="car!" />
          </figure>
          <div className="card-body p-2 md:p-3">
            <h2 className="card-title text-primary">
              7th Death Anniversary of Mrs. Hasna Abedin, Founder and Former
              Chairperson, AIUB
            </h2>
            <div className="text-primary flex justify-start text-md mb-0 md:mb-3">
              <FaCalendarAlt className="mr-1" />
              <p>MONDAY, FEBRUARY 12,2024</p>
            </div>
            <p className="leading-normal text-justify">
              The 7th death anniversary of Mrs. Hasna Abedin, the Founder and
              Former Chairperson of the American International
              University-Bangladesh (AIUB), was observed on Sunday, February
              11th. A Dua, Holy Quran recitation, and Milad Mahfil were
              organized by the AIUB family. The AIUB family remembered her
              contribution to the spread of higher education and sought
              blessings and forgiveness for her departed soul.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
