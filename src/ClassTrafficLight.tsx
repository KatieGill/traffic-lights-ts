import { Component } from "react";

type ClassProp = {
  colors: string[];
};

type TrafficLightState = {
  lightColorIndex: number;
};

export class ClassTrafficLight extends Component<ClassProp> {
  state: TrafficLightState = {
    lightColorIndex: 0,
  };

  setTrafficLightColor = () => {
    return this.state.lightColorIndex === this.props.colors.length - 1
      ? this.setState({ lightColorIndex: 0 })
      : this.setState({ lightColorIndex: this.state.lightColorIndex + 1 });
  };

  render() {
    const currentLightColor: string =
      this.props.colors[this.state.lightColorIndex];
    const trafficLightColor = (color: string) => {
      return currentLightColor === color ? currentLightColor : "black";
    };
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <div className={`circle ${trafficLightColor("red")}`}></div>
          <div className={`circle ${trafficLightColor("yellow")}`}></div>
          <div className={`circle ${trafficLightColor("green")}`}></div>
        </div>
        <button
          className="next-state-button"
          onClick={this.setTrafficLightColor}
        >
          Next State
        </button>
      </div>
    );
  }
}
