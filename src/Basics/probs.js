import { createRoot } from "react-dom/client";
// probs are like parameters
// probs are read only you cant change props

const  Header = (probs) => {
    // probs.user = "anisa";
    // console.log(probs.user)
  return <h2 style={{padding:20, backgroundColor : "skyblue", fontFamily : 'sans-serif', letterSpacing : 2}}>Hello I'm {probs.user}</h2>;
}
function Footer (probs) {
    return <footer style={{padding:20, backgroundColor : "chocolate", color: 'white', fontFamily : 'sans-serif', letterSpacing : 2}}> &copy;All rights reserved!  {probs.year}</footer>
}

let container = document.getElementById("root");
let root = createRoot(container);
root.render(
  <>
    <Header  user = "Maryama"/>
    <Footer  year = '19.11.2024'/>
  </>
);