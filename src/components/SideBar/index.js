import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <h1>SIDEBAR</h1>
      <Link to="/onboard">Sign up</Link>
      <br />

      <Link to="/onboard/auth">Auth</Link>
    </div>
  );
}
