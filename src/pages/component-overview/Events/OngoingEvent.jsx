import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaLink } from "react-icons/fa";

export default function OngoingEvent({ notice }) {
  console.log(notice);
  const navigate = useNavigate();
  const handleEvent = (id) => {
    navigate(`/event/${id}`);
  };
  return (
    <button
      onClick={() => handleEvent(notice.id)}
      className="text-start hover:shadow-md hover:shadow-primary hover:rounded-lg my-2"
    >
      <div className="card md:card-side h-[200px] md:h-[100px] bg-base-100 shadow-xl rounded-md">
        <figure className="md:w-[20%]">
          <img src={notice.images.img1} alt="Album" />
        </figure>
        <div className="card-body w-[100%] md:w-[80%] p-0 ml-0  px-2 md:px-0 md:ml-3 my-1">
          <h4 className="text-primary font-bold text-xs">{notice.title}</h4>
          <p className="truncate overflow-hidden text-xs">{notice.desc}</p>
          <div className="flex justify-start">
            <div className="text-primary flex justify-start text-xs mb:0 md:mb-3">
              <FaCalendarAlt className="mr-1" />
              <p>{notice.postedAt}</p>
            </div>
            {notice?.register && (
              <div className="text-primary flex justify-start text-xs mb:0 md:mb-3 ml-2">
                <FaLink className="mr-1" />
                <p>{notice.register}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}
