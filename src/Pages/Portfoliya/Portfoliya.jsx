import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Home from "./Home/Home";
import "./Portfoliya.css";
import About from "./About/About";

function Portfoliya() {
  return (
    <div className="portfoliya-container">
      <Sidebar />
      <Home />
    </div>
  );
}

export default Portfoliya;
