import { type } from "@testing-library/user-event/dist/type";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
// Use Effect Explaination
// outside of local
// use effect is hook entended manage ||  to read data  from internet
const App = () => {

  const [developer, setDeveloper] = useState(
    {
      title: "",
      name: "",
      age: 0,
    });

    useEffect( () => {
      document.title = developer.title;
      console.log("changed")
// if use state written like this excutes every time changes state 
// [] add dependences to change ispacific time 
    }, [developer.title]);
  return (
    <>
      <h3>Use Effect Explaination </h3>
      <button onClick={() => setDeveloper({ ...developer, name: "Maryama"})}>
        Chage Name
      </button>
      <p>My Name is {developer.name}</p>
      <p>My age is {developer.age}</p>
      <input type="text" 
      placeholder="Enter Title Name"
       onChange={(event) => setDeveloper({
        ... developer, title: event.target.value
      })} />
    <br/>
    <br/>
      <input type="number" onChange={(event) => setDeveloper({...developer, age : event.target.value})} />
    </>
  );
};
let container = document.getElementById("root");
let root = createRoot(container);
root.render(<App />);
