import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";

export default function FirstFooter() {
  return (
    <div className="w-full h-[35px] bg-[#202020] mt-2">
      <div className="max-w-screen-lg m-auto">
        <div className="flex justify-between">
          <div>
            <div>
              <p className="text-[#646260] text-[5.59px] inline mr-1">
                2000-2019 ©
              </p>
              <p className="text-white text-[5.59px] inline mr-1">
                AMERICAN INTERNATIONAL UNIVERSITY-BANGLADESH
              </p>
              <p className="text-[#646260] text-[5.59px] inline">
                UNDER REGISTRATION 9988-COPR
              </p>
            </div>
            <div className="mt-[-10px]">
              <p className="text-[#646260] text-[5.59px] inline mr-1">
                POWERED BY
              </p>
              <p className="text-white text-[5.59px] inline mr-1">
                AIUB SOFTWARE DEVELOPMENT DEPARTMENT
              </p>
            </div>
          </div>
          <div className="flex justify-evenly text-white py-2">
            <FaFacebookF className="mr-2" />
            <FaLinkedinIn className="mr-2" />
            <FaTwitter className="mr-2" />
            <FaInstagram className="mr-2" />
            <TfiYoutube className="mr-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
