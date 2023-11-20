import { useState } from "react";

type FunctionalProp = {
  colors: string[];
};

export const FunctionalTrafficLight = ({ colors }: FunctionalProp) => {
  const [lightColorIndex, setLightColorIndex] = useState(0);
  const currentLightColor = colors[lightColorIndex];

  const trafficLightColor = (color: string) => {
    return currentLightColor === color ? currentLightColor : "black";
  };

  const setTrafficLightColor = () => {
    return lightColorIndex === colors.length - 1
      ? setLightColorIndex(0)
      : setLightColorIndex(lightColorIndex + 1);
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div className={`circle ${trafficLightColor("red")}`}></div>
        <div className={`circle ${trafficLightColor("yellow")}`}></div>
        <div className={`circle ${trafficLightColor("green")}`}></div>
      </div>
      <button
        className="next-state-button"
        onClick={() => setTrafficLightColor()}
      >
        Next State
      </button>
    </div>
  );
};
