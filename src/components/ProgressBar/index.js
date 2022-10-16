import "./styles.css";
import "rsuite/dist/rsuite.min.css";
import { Steps } from "rsuite";
import WechatIcon from "@rsuite/icons/Wechat";

const stepsStyles = {
  display: "inline-table",
  verticalAlign: "top",
};

const itemStyles = {
  height: "100px",
};

export default function ProgressBar(props) {
  const { step } = props;

  return (
    <div className="progressbar">
      <Steps current={step} vertical style={stepsStyles}>
        <Steps.Item style={itemStyles} title="Finished" icon={<WechatIcon />} />

        <Steps.Item
          style={itemStyles}
          title="In progress"
          icon={step > 1 && <WechatIcon />}
        />

        <Steps.Item
          style={itemStyles}
          title="Waiting"
          icon={step > 1 && <WechatIcon />}
        />

        <Steps.Item
          style={itemStyles}
          title="Waiting"
          icon={step > 1 && <WechatIcon />}
        />
      </Steps>
    </div>
  );
}
