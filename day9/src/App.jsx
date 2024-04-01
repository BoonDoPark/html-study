import { useState } from "react";
import "./App.css";
import { Button } from "reactstrap";
import { css } from "@emotion/css";

function App() {
  const [second, setSecond] = useState("0");
  const [deg, setDeg] = useState("300");
  const [color, setColor] = useState("red");
  return (
    <>
      <div className="box"></div>
      <div className="box"></div>

      {/* js in style */}
      <div
        className={css`
          width: 200px;
          height: 300px;
          background-color: ${color};
          &:hover {
            background-color: blue;
            transition: all ${second}s;
            transform: rotate(${deg}deg);
          }
        `}
      ></div>
      <input onChange={(e) => parseInt(setSecond(e.target.value))} />
      <input
        type="range"
        onChange={(e) => parseInt(setDeg(e.target.value) * 1000)}
      />
      <input type="color" onChange={(e) => setColor(e.target.value)} />
    </>
  );
}

export default App;
