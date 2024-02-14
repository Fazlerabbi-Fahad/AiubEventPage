import React from "react";
import BANNER from "../../../assets/logo/BANNER.png";
import logo from "../../../assets/logo/logo.svg";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function HeaderBanner() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const handleEvents = () => {
    navigate("/event");
  };
  return (
    <div className="navbar p-0 min-h-0">
      <div className="navbar-start p-1 md:p-0">
        <img
          onClick={handleEvents}
          src={BANNER}
          width="441px"
          height="20.92px"
          className="hidden md:flex"
        />
        <div className="flex justify-start md:hidden  items-center">
          <img
            onClick={handleEvents}
            src={logo}
            width="90px"
            className="mr-2"
          />
          <div>
            <h5 className="text-primary font-bold text-sm">
              AMERICAN INTERNATIONAL UNIVERSITY-BANGLADESH
            </h5>
            <p className="text-xs">where leaders are created</p>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-sm text-primary w-52 relative right-[30px]"
          >
            <li>
              <a>ABOUT</a>
            </li>
            <li>
              <a>ACADEMICS</a>
            </li>
            <li>
              <a>ADMISSION</a>
            </li>
            <li>
              <a>ON CAMPUS</a>
            </li>
            <li>
              <a>ADMINISTRATION</a>
            </li>
            <li>
              <a>RESEARCH</a>
            </li>
            <li>
              <a
                onClick={handleLogin}
                className="text-primary hidden md:flex px-5 pt-1.5 justify-between hover:text-hoverColor"
              >
                <FaUser className="w-[12px] mr-1" />
                Login
              </a>
            </li>
          </ul>
        </div>
        <a
          onClick={handleLogin}
          className="text-primary hidden md:flex px-5 pt-1.5 justify-between hover:text-hoverColor"
        >
          <FaUser className="w-[12px] mr-1" />
          Login
        </a>
      </div>
    </div>
  );
}
