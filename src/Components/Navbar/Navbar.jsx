import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import navbarlogo from "./navbarlogo.png";
import { SlScreenDesktop } from "react-icons/sl";
import { HiMiniDeviceTablet } from "react-icons/hi2";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { FiSmartphone } from "react-icons/fi";

import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function Navbar() {
  const [activeIcon, setActiveIcon] = useState(1);

  let pagination = [
    { link: "/iPortfoliya", name: "iPortfolio" },
    { link: "/myRezyume", name: "MyResume" },
    { link: "/agriCulture", name: "AgriCulture" },
    { link: "/gp", name: "Gp" },
    { link: "/impact", name: "Impact" },
    { link: "/photoFolio", name: "PhotoFolio" },
  ];

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="navbar-container">
      <div className="navbar-icons">
        <Link to="/">
          <img className="navbarlogo" src={navbarlogo} alt="navbarlogo" />
        </Link>

        <Link to="/" onClick={() => setActiveIcon(1)}>
          <SlScreenDesktop
            className={` ${activeIcon == 1 ? "icons active" : "icons"}`}
          />
        </Link>

        <Link to="/" onClick={() => setActiveIcon(2)}>
          <HiMiniDeviceTablet
            className={` ${activeIcon == 2 ? "icons active" : "icons"}`}
          />
        </Link>

        <Link to="/" onClick={() => setActiveIcon(3)}>
          <FiSmartphone
            className={` ${activeIcon == 3 ? "icons active" : "icons"}`}
          />
        </Link>
      </div>

      <div className="pagination">
        <Slider {...settings}>
          {pagination?.map((value, index) => (
            <Link to={value.link} className="link" key={index}>
              <span> {value.name}</span>
            </Link>
          ))}
        </Slider>
      </div>

      <div className="action-icon">
        <FaExternalLinkAlt />
        <div className="action-icon-download">
          <BiDownload className="download" />
          <span>Download</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
