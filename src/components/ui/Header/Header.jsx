import React from "react";
import HeaderBanner from "./HeaderBanner";
import SecondHeader from "./SecondHeader";
import ThirdHeader from "./ThirdHeader";
import logo from "../../../assets/logo/logo.svg";

export default function Header() {
  return (
    <div className="relative">
      <div className="absolute top-1 left-[48%]">
        <img src={logo} width="101px" />
      </div>
      <HeaderBanner />
      <SecondHeader />
      <ThirdHeader />
    </div>
  );
}
