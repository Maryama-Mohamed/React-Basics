import { createRoot } from "react-dom/client";

// jsx is converter of html 
// jsx is unique to capitalized names eg "className", "backgroundColor", "backgroundImage", fontFamily", "fontSize", "fontweight", "textAlign", "textTransform"
let year =  11.2024;
let welcoming =
<div>
<p style={ { backgroundColor : "blue ", padding : 20, color: "white", fontSize : 50}}>JSX Explanation year {year} </p>

<input type="text" placeholder="Enter your name" style={{padding : 10, borderRadius: 10, }}/>

</div> 
let container = document.getElementById('root');
let root = createRoot (container);

root.render(welcoming);