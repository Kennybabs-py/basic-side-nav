import { useState } from "react";
import { Outlet } from "react-router-dom";

import SideBar from "../../components/SideBar";
import SignUp from "../signup";
import Auth from "../auth";
import "./styles.css";

export default function Onboarding() {
  const [step, setStep] = useState(0);

  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };

  const onNext = () => onChange(step + 1);

  return (
    <div className="onboard">
      <div className="nav">
        <SideBar step={step} />
      </div>

      <div className="content">
        {(() => {
          switch (step) {
            case 0:
              return <SignUp onNext={onNext} />;
            case 1:
              return <Auth onNext={onNext} />;

            default:
              break;
          }
        })()}
      </div>
    </div>
  );
}
