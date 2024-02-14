import React from "react";

export default function SecondHeader() {
  return (
    <div className="bg-primary hidden md:flex">
      <div className="navbar p-0 min-h-0 max-w-screen-lg m-auto">
        <div className="navbar-start py-0">
          <ul className="menu menu-horizontal px-1 py-0 flex justify-center">
            <li className="px-5">
              <button className="text-white hover:bg-[#323b45] rounded-none py-2">
                ABOUT
              </button>
            </li>
            <li className="px-5">
              <button className="text-white hover:bg-[#323b45] rounded-none py-2">
                ACADEMICS
              </button>
            </li>
            <li className="px-5">
              <button className="text-white hover:bg-[#323b45] rounded-none py-2">
                ADMISSION
              </button>
            </li>
          </ul>
        </div>
        <div className="navbar-end py-0">
          <ul className="menu menu-horizontal px-1 py-0 flex justify-center">
            <li className="px-5">
              <button className="text-white hover:bg-[#323b45] rounded-none py-2">
                ON CAMPUS
              </button>
            </li>
            <li className="px-5">
              <button className="text-white hover:bg-[#323b45] rounded-none py-2">
                ADMINISTRATION
              </button>
            </li>
            <li className="px-5">
              <button className="text-white hover:bg-[#323b45] rounded-none py-2">
                RESEARCH
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
