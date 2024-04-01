import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Persons from "./components/Persons";
import Boxs from "./components/Boxs";

// html 태그를 리턴하는 파일을 jsx
// csr client side render
// ssr server side render
// 초기 속도(사이트 접속 시) csr은 느림 ssr 빠름
//
function App() {
  // [변수, set함수] = useState(초기값)
  console.log("App");

  return (
    <div className="App">
      <Counter />
      <Persons />
      <Boxs />
    </div>
  );
}

export default App;
