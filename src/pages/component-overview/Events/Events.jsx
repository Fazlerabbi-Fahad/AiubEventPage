import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Tab from "../../../components/ui/Tab/Tab";
import { useNavigate, Link } from "react-router-dom";

export default function Events() {
  const navigate = useNavigate();

  const handleAddEvent = () => {
    navigate("/addEvent");
  };
  return (
    <div className="max-w-screen-lg m-auto">
      <div className="text-[11px] hidden md:flex my-10 ">
        <p className="text-primary mr-1">
          <Link to="/">Home</Link>
        </p>
        <p className="mr-1 text-[#8392A1]">&gt;</p>
        <p className="text-[#8392A1] mt-0">News & Events</p>
      </div>
      <div>
        <h4 className="font-bold text-[#004EA8] text-[16px] text-center">
          News & Events
        </h4>
      </div>
      <div className="flex justify-between mt-8 mb-2">
        <button
          onClick={handleAddEvent}
          className="btn btn-outline btn-xs rounded-[3.27px] text-[#034EA1] border-[#034EA1] hover:bg-primary text-[8.91px] flex "
        >
          <FaPlus className="mr-[-5px]" />
          Add Event
        </button>
        <div className="relative">
          {/* <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-xs w-[132.23px] border-[#034EA1] rounded-[3.27px] max-w-xs pr-8"
          />
          <span className="absolute right-2 top-3 transform -translate-y-1/2 text-[#034EA1]">
            <FaSearch />
          </span> */}
        </div>
      </div>
      <div className="bg-[#EEEEEE] w-full rounded-[7.49px] mt-5 p-2 md:p-4">
        <Tab />
      </div>
    </div>
  );
}
