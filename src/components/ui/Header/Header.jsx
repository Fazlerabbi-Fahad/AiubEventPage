import React from "react";
import HeaderBanner from "./HeaderBanner";
import SecondHeader from "./SecondHeader";
import ThirdHeader from "./ThirdHeader";
import logo from "../../../assets/logo/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const handleEvents = () => {
    navigate("/event");
  };
  return (
    <div className="relative">
      <div className="absolute top-1 left-[45%] z-10">
        <img
          onClick={handleEvents}
          src={logo}
          width="101px"
          className="hidden md:flex"
        />
      </div>
      <HeaderBanner />
      <SecondHeader />
      <ThirdHeader />
    </div>
  );
}
