import React from "react";

export default function ThirdHeader() {
  return (
    <div className="w-full h-[26px] bg-[#F0F0F0]">
      <div className="max-w-screen-lg m-auto">
        <div className="flex justify-between">
          <div className="flex justify-evenly">
            <button className="text-primary flex justify-between hover:text-hoverColor px-[50px] py-1">
              Alumni
            </button>
            <button className="text-primary flex justify-between hover:text-hoverColor px-[50px] py-1">
              Visitors
            </button>
          </div>
          <div className="flex justify-evenly">
            <button className="text-primary flex justify-between hover:text-hoverColor px-[50px] py-1">
              Future Students
            </button>
            <button className="text-primary flex justify-between hover:text-hoverColor px-[50px] py-1">
              Convocation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
