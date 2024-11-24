import { createRoot } from "react-dom/client";
// rendering  in  COde refactor

const App = () => {

    // const developer = "Maryama";
    const developers = [ 'Maryama','Adna', 'Laila', 'Najma', 'Sumaya', 'Saabrin']

    return (
        developers.map((developer,index) =>(

            <Developer developer={developer} key = {index} />
        ))
    );
}

const Developer = (probs) => {
    // console.log(probs)
    return  <li>{probs.developer} </li>
}

let container = document.getElementById("root");
let root = createRoot(container);
root.render(
    <App />
);