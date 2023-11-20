import "./App.css";
import { ClassTrafficLight } from "./ClassTrafficLight";
import { FunctionalTrafficLight } from "./FunctionalTrafficLight";
import { trafficLightColors } from "./light-color-data";

function App() {
  return (
    <>
      <main>
        <h1>Traffic light App</h1>
        <div className="container">
          <div className="left">
            <FunctionalTrafficLight colors={trafficLightColors} />
          </div>
          <div className="right">
            <ClassTrafficLight colors={trafficLightColors} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
