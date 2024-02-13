import React from "react";
import BANNER from "../../../assets/logo/BANNER.png";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function HeaderBanner() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="w-full flex justify-between p-0 ">
      <div>
        <img src={BANNER} width="441px" height="20.92px" />
      </div>
      <div>
        <button
          onClick={handleLogin}
          className="text-primary px-5 pt-1.5 flex justify-between hover:text-hoverColor"
        >
          <FaUser className="w-[12px] mr-1" />
          Login
        </button>
      </div>
    </div>
  );
}
