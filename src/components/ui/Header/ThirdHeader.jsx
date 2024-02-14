import React from "react";

export default function ThirdHeader() {
  return (
    <div className="bg-primary md:bg-[#F0F0F0]">
      <div className="navbar p-0 min-h-0 max-w-screen-lg m-auto">
        <div className="navbar-start py-0">
          <ul className="menu menu-horizontal px-1 py-0 flex justify-center">
            <li>
              <button className="md:text-primary text-white flex justify-between hover:text-hoverColor px-[50px] py-1">
                Alumni
              </button>
            </li>
            <li>
              <button className="md:text-primary text-white flex justify-between hover:text-hoverColor px-[50px] py-1">
                Visitors
              </button>
            </li>
          </ul>
        </div>
        <div className="navbar-end py-0">
          <ul className="menu menu-horizontal px-1 py-0 flex justify-center">
            <li>
              <button className="md:text-primary text-white flex justify-between hover:text-hoverColor px-[50px] py-1">
                Future Students
              </button>
            </li>
            <li>
              <button className="md:text-primary text-white flex justify-between hover:text-hoverColor px-[50px] py-1">
                Convocation
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
