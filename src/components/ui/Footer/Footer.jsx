import React from "react";
import FirstFooter from "./FirstFooter";
import SecondFooter from "./SecondFooter";

export default function Footer() {
  return (
    <div className="mt-0">
      <div className="flex">
        <div className="divider mb-[-7px] h-4 divider-primary w-[25%]"></div>
        <div className="divider mb-[-7px] h-4 divider-success w-[25%]"></div>
        <div className="divider mb-[-7px] h-4 divider-warning w-[25%]"></div>
        <div className="divider mb-[-7px] h-4 divider-error w-[25%]"></div>
      </div>
      <div>
        <SecondFooter />
      </div>
      <div>
        <FirstFooter />
      </div>
    </div>
  );
}
