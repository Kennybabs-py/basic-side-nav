import "./styles.css";
import "rsuite/dist/rsuite.min.css";
import { Steps } from "rsuite";

const stepsStyles = {
  display: "inline-table",
  verticalAlign: "top",
  color: "green",
};

const itemStyles = {
  height: "80px",
};

export default function ProgressBar(props) {
  const { step } = props;

  return (
    <div className="progressbar">
      <Steps current={step} vertical style={stepsStyles}>
        <Steps.Item style={itemStyles} title="Create an Account" />

        <Steps.Item style={itemStyles} title="In progress" />

        <Steps.Item style={itemStyles} title="Waiting" />

        <Steps.Item style={itemStyles} title="Waiting" />
      </Steps>
    </div>
  );
}
