import { Link } from "react-router-dom";
import "./styles.css";
import ProgressBar from "../ProgressBar";

export default function SideBar({ step }) {
  return (
    <div className="sidebar">
      <h1>SIDEBAR</h1>
      <Link to="/">Sign up</Link>
      <br />

      <Link to="/auth">Auth</Link>

      <ProgressBar step={step} />
    </div>
  );
}
