import { useState } from "react";
import Box from "./Box";

const Boxs = () => {
  const [height, setHeight] = useState("500");
  const [width, setWidth] = useState("500");
  return (
    <>
      <input type="range" onChange={(e) => setWidth(e.target.value)}></input>
      <input type="range" onChange={(e) => setHeight(e.target.value)}></input>
      <Box width={width} height={height} />
      <Box width={width} height={height} />
      <Box width={width} height={height} />
    </>
  );
};
export default Boxs;
