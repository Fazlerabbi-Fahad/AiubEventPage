import React from "react";
import FirstFooter from "./FirstFooter";
import SecondFooter from "./SecondFooter";

export default function Footer() {
  return (
    <div>
      <div className="flex">
        <div className="divider mb-[-7px] h-4 divider-primary w-[350px]"></div>
        <div className="divider mb-[-7px] h-4 divider-success w-[350px]"></div>
        <div className="divider mb-[-7px] h-4 divider-warning w-[350px]"></div>
        <div className="divider mb-[-7px] h-4 divider-error w-[350px]"></div>
      </div>
      <div>
        <SecondFooter />
      </div>
      <div className="mt-[-8px]">
        <FirstFooter />
      </div>
    </div>
  );
}
