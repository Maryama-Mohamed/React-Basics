import { createRoot } from "react-dom/client";
// layout 

const Layout = (probs) => {
    return <div style={{padding:20, backgroundColor : "blue", color: 'white', fontFamily : 'sans-serif', letterSpacing : 2}}>
        {probs.children}
    </div>
}
const Header = (props) => {
    return <h2>Welcome to Learning layout {props.user}</h2>
}
function Footer (probs) {
    return <footer> &copy;All rights reserved!  {probs.year}</footer>
}

let container = document.getElementById("root");
let root = createRoot(container);
root.render(
<Layout>
    <Header  user = "Maryama"/>
    <h3>Maria</h3>
    <Footer  year = '19.11.2024'/>
    <footer>Another one</footer>
    </Layout>
);