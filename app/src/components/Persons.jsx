import Person from "./Person";
import { useState } from "react";

const Persons = () => {
  const [age, setAge] = useState(12);
  return (
    <>
      <input type="number" onChange={(e) => setAge(e.target.value)}></input>
      <br></br>
      <Person age={age} />
      <Person age={age} />
      <Person age={age} />
    </>
  );
};
export default Persons;
