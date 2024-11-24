import { type } from "@testing-library/user-event/dist/type";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
// Better way with async functions
// use jsonplaceholder website
const endPoint = "https://jsonplaceholder.typicode.com/posts/1";
const App = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(endPoint);
      console.log(response);

      const data = await response.json();

      setPost(data);
    };
    getPost();
  }, []);
  return (
    <>
      <h3>Better way with async functions </h3>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      {/* {console.log(post?.title)} */}
    </>
  );
};
let container = document.getElementById("root");
let root = createRoot(container);
root.render(<App />);
