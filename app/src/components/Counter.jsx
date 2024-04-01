import { useState } from "react";
const Counter = () => {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [logs, setLogs] = useState([]);

  const onClickAdd = () => {
    setI(i + j);
    setLogs([...logs, `${i} + ${j} = ${i + j}`]);
  };

  const onClickMin = () => {
    setI(i - j);
    setLogs([...logs, `${i} - ${j} = ${i - j}`]);
  };

  const onClickMul = () => {
    setI(i * j);
    setLogs([...logs, `${i} * ${j} = ${i * j}`]);
  };

  const oneClickDiv = () => {
    if (Number(j) !== 0) {
      setI(i / j);
      setLogs([...logs, `${i} / ${j} = ${i / j}`]);
    } else alert("0이 아닌걸 넣어주세요.");
  };

  return (
    <div>
      <h1>{i}</h1>
      <input onChange={(e) => setJ(Number(e.target.value))}></input>
      <button onClick={() => onClickAdd()}>+</button>
      <button onClick={() => onClickMin()}>-</button>
      <button onClick={() => onClickMul()}>*</button>
      {j != 0 && <button onClick={oneClickDiv}>/</button>}
      {logs.map((str, i) => (
        <p key={i}>{str}</p>
      ))}
    </div>
  );
};

export default Counter;
