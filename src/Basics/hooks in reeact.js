import { type } from "@testing-library/user-event/dist/type";
import { createRoot } from "react-dom/client";
import { useState } from "react";
// Hooks in react
// react is imparative not declarative
// frist hook is usestate()
// usestate tells the page the change state
// usestate must write intire component 
// usestate returs two state 
// 1. value of the state 
// 2. setter or changer of state value

const App = () => {

  const developerState = useState('Write Name');
  console.log(developerState[0]);

  let developerValue = developerState[0];
  let setDeveloperValue = developerState[1];

  const handleClick = (event) =>{
    // value = event.target.value;
    // console.log(value)
    setDeveloperValue(event.target.value);
  }
  return (
    <>
    <h3>Hooks in React </h3>

    <input type="text" placeholder="developerName" onChange={handleClick} />
    <p>{developerValue}</p>
    </>
  );
};
let container = document.getElementById("root");
let root = createRoot(container);
root.render(<App />);
