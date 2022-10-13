import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import "./styles.css";

export default function Onboarding() {
  return (
    <div className="onboard">
      <SideBar />

      <Outlet />
    </div>
  );
}
