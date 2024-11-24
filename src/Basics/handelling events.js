import { type } from "@testing-library/user-event/dist/type";
import { createRoot } from "react-dom/client";
// Handelling events in react

const App = () => {
  // const developer = "Maryama";
  const developers = ["Maryama", "Adna", "Laila", "Najma"];

  const handleClick = (event) =>{
    console.log(event.target.value)
  }

  return (
    <>
    <h3>Handle click </h3>
      {/* {developers.map((developer, index) => (
        <Developer developer={developer} key={index} />
      ))} */}

      <input type="text" placeholder="developer" onChange={handleClick} />
    </>
  );
};

const Developer = (probs) => {
  const handleClick = () => {
    console.log(probs.developer);
  };
  // console.log(probs)
  return <li onClick={handleClick}>{probs.developer} </li>;
};

let container = document.getElementById("root");
let root = createRoot(container);
root.render(<App />);
