import { type } from "@testing-library/user-event/dist/type";
import { createRoot } from "react-dom/client";
import { useState } from "react";
// Objects In Usestate()
// object spreate  is not to change frist value
// sparate operator is ... name of usestate
const App = () => {

  const [developer, setDeveloper] = useState(
    {
      name: "",
      age: 0
    });
  return (
    <>
      <h3>Objects In Usestate </h3>
      <button onClick={() => setDeveloper({ ...developer, name: "Maryama"})}>
        Chage Name
      </button>
      <p>My Name is {developer.name}</p>
      
      <p>My age is {developer.age}</p>
      <input type="number" onChange={(event) => setDeveloper({...developer, age : event.target.value})} />
    </>
  );
};
let container = document.getElementById("root");
let root = createRoot(container);
root.render(<App />);
