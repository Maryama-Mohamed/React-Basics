import { type } from "@testing-library/user-event/dist/type";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
// Read data from an external API
// use jsonplaceholder website
const endPoint = "https://jsonplaceholder.typicode.com/posts/1";
const App = () => {

  const [post, setPost] = useState(null);

    useEffect( () => {

      fetch(endPoint)
      .then(response => response.json())
      .then(data => setPost(data));
      
    }, []);
  return (
    <>
      <h3>Read data from an external API </h3>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      {/* {console.log(post?.title)} */}
      
    </>
  );
};
let container = document.getElementById("root");
let root = createRoot(container);
root.render(<App />);
