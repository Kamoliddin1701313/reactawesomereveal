import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { ImSkype } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { BsHouse } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsImages } from "react-icons/bs";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { HiServerStack } from "react-icons/hi2";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import sidebaruser from "./sidebar-user.jpg";
import "./Sidebar.css";

function Sidebar() {
  const sidebar = [
    { id: 1, icon: <BsHouse />, name: "Home" },
    { id: 2, icon: <BsPerson />, name: "About" },
    { id: 3, icon: <BsFillFileEarmarkTextFill />, name: "Resume" },
    { id: 4, icon: <BsImages />, name: "Portfolio" },
    { id: 5, icon: <HiServerStack />, name: "Services" },
    { id: 6, icon: <BsFillMenuButtonFill />, name: "Dropdown" },
    { id: 7, icon: <BsEnvelope />, name: "Contact" },
  ];

  const [activeClass, setActiveClass] = useState(0);

  const activeBtn = (id) => {
    setActiveClass(id);
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-user">
          <img src={sidebaruser} alt="sidebaruser" />
        </div>

        <h1>Alex Smith</h1>

        <div className="sidebar-icons">
          <span>
            <BsTwitterX />
          </span>

          <span>
            <FaFacebookF />
          </span>

          <span>
            <SiInstagram />
          </span>

          <span>
            <ImSkype />
          </span>

          <span>
            <SiLinkedin />
          </span>
        </div>

        <div className="sidebar-link">
          {sidebar.map((value) => (
            <div
              key={value.id}
              onClick={() => activeBtn(value.id)}
              className="links"
            >
              <span
                style={{
                  color: value.id === activeClass ? "#149ddd" : "",
                }}
              >
                {value.icon}
              </span>
              <span
                style={{
                  color: value.id === activeClass ? "#149ddd" : "",
                }}
              >
                {value.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
