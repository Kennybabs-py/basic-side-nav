import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import "./styles.css";

export default function Onboarding() {
  return (
    <div className="onboard">
      <div className="nav">
        <SideBar />
      </div>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
