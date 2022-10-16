import "./styles.css";
import ProgressBar from "../ProgressBar";

export default function SideBar({ step }) {
  return (
    <div className="sidebar">
      <h1>SIDEBAR</h1>

      <ProgressBar step={step} />
    </div>
  );
}
