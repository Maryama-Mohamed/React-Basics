import { createRoot } from "react-dom/client";
// conditional rendering is to know if user is login or not
// lofin is compulsory
// thernery
// condition  if yes ? true statement if no : false statemennt
const Login = () => {
  return (
    <>
      <h3>Please Log In </h3>
      <input type="text" placeholder="please Log In" />
    </>
  );
};
const SignOut = () => {
  return <button type="submit">SignOut</button>;
};
const Layout = (probs) => {
  return (
    <div
      style={{
        padding: 20,
        backgroundColor: "blue",
        color: "white",
        fontFamily: "sans-serif",
        letterSpacing: 2,
      }}
    >
      {probs.children}
    </div>
  );
};
const Header = (props) => {
  return <h4>Welcome to Learning conditional rendering {props.user}</h4>;
};
function Footer(probs) {
  return <footer> &copy;All rights reserved!{probs.year}</footer>;
}

// const isAunticated = false;
const isAunticated = true;

let container = document.getElementById("root");
let root = createRoot(container);
root.render(
  <Layout>
    {/* {isAunticated ?
    <Header  user = "Maryama"/>  :  <Login /> }
    {isAunticated && <SignOut />} */}
    {/* or */}
    {isAunticated ? (
      <>
        <Header user="Maryama" />
        <SignOut />
      </>
    ) : (
      <Login />
    )}
    {/* <h3>Maria</h3> */}
    <Footer  year = '19.11.2024'/>
    {/* <footer>Another one</footer> */}
  </Layout>
);
