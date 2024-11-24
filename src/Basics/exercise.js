import { type } from "@testing-library/user-event/dist/type";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
// Exersice of the course
// use jsonplaceholder website
const endPoint = "https://jsonplaceholder.typicode.com/posts/20";
const App = () => {

  const [post, setPost] = useState(null);

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getPost = async () => {

      setLoader(true);
      const response = await fetch(endPoint);
      // console.log(response);
      const data = await response.json();
      setPost(data);
      // console.log(data)
      setLoader(false);
    };
    getPost();
  }, []);

  if(loader) return <h1>Loading.....</h1>;
  return (
    <>
      <h3>adding loader to the hoook </h3>
      <h4>{post?.userId}</h4>
      <h4>{post?.id}</h4>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      {console.log(post)}
    </>
  );
};
let container = document.getElementById("root");
let root = createRoot(container);
root.render(<App />);
