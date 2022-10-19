import "./styles.css";

const progressData = [
  { id: 0, image: "activeIcon", status: "active" },
  { id: 1, image: "activeIcon", status: "active" },
  { id: 2, image: "activeIcon", status: "active" },
  { id: 3, image: "activeIcon", status: "active" },
];

export default function ProgressBar(props) {
  const { step } = props;

  return (
    <div className="progressbar">
      {progressData.map((item) => {
        return (
          <div key={item.id} className="progress-step">
            {/* image */}
            <div
              className="image"
              style={{
                backgroundColor:
                  step === item.id ? "blue" : step > item.id ? "green" : "red",
                scale: step === item.id && "1.06",
                zIndex: step === item.id && "5",
              }}
            ></div>
            {/* line */}
            <div
              className="line"
              style={{ display: item.id === 3 ? "none" : "" }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
