import { createRoot } from "react-dom/client";
// components is to make pice and pice  and have more  difrenet   areas in react
// example facebook and dugsiiye are used to react components
// component makes more types jus as function
// when you want to call a component you must use like this <header/>
// <><> are fregment
function Header() {
  return <h1>Hello From Component</h1>;
}
function Footer () {
    return <footer>All rights reserved</footer>
}
// also you can use greeting component with  arrow functions
//  const Header = () => {
//     return <h1>This is as arrow functon</h1>
// }
let container = document.getElementById("root");
let root = createRoot(container);
root.render(
  <>
    <Header />
    <Footer />
    {/* <footer>all rights reserved.2024</footer> */}
  </>
);