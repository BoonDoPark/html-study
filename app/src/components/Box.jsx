import { useState } from "react";

const Box = ({ width, height }) => {
  const [color, setColor] = useState("skyblue");
  return (
    <>
      <input type="color" onChange={(e) => setColor(e.target.value)}></input>
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: color,
        }}
      ></div>
    </>
  );
};

export default Box;
