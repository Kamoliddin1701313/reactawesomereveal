import React from "react";
import "./Layouts.css";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

function Layouts() {
  return (
    <div className="layouts">
      <Navbar />
      <div style={{ marginTop: "50px" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layouts;
