import React from "react";

export default function SecondHeader() {
  return (
    <div className="w-full h-[35px] bg-primary mt-2">
      <div className="max-w-screen-xl m-auto">
        <div className="flex justify-between">
          <div className="flex justify-evenly">
            <button className="text-white flex justify-between hover:bg-[#323b45] px-[50px] py-2">
              ABOUT
            </button>
            <button className="text-white flex justify-between hover:bg-[#323b45] px-[50px] py-2">
              ACADEMICS
            </button>
            <button className="text-white flex justify-between hover:bg-[#323b45] px-[50px] py-2">
              ADMISSION
            </button>
          </div>
          <div className="flex justify-evenly">
            <button className="text-white flex justify-between hover:bg-[#323b45] px-[50px] py-2">
              ABOUT
            </button>
            <button className="text-white flex justify-between hover:bg-[#323b45] px-[50px] py-2">
              ACADEMICS
            </button>
            <button className="text-white flex justify-between hover:bg-[#323b45] px-[50px] py-2">
              ADMISSION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
