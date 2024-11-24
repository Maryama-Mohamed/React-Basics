import { type } from "@testing-library/user-event/dist/type";
import { createRoot } from "react-dom/client";
import { useState } from "react";
// Desterecturnig Hooks in react
const App = () => {

  const [nationality, setNationality] = useState("kenya");

  const [age, setAge] = useState(0);

  return (
    <>
      <h3>Desterecturing Hooks in React </h3>

      <button onClick={() => setNationality("Somalia")}>
        Chage Nationality
      </button>
      <p>My Nationality is {nationality}</p>

      <input type="number" onChange={(event) => setAge(event.target.value)} />
      <p>My age is {age}</p>
    </>
  );
};
let container = document.getElementById("root");
let root = createRoot(container);
root.render(<App />);
