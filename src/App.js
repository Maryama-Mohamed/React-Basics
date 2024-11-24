import { useEffect, useState } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
const App = () => {

  const [user, setUser] = useState ("");
  const [posts, setPosts] = useState ([]);

useEffect(() => {

  document.title = user ? `${user}'s feed` : "please login";
},[user]);

  if(!user) return <Login setUser = {setUser}/>
    return (
   <>
    <Header user={user} setUser= {setUser}/>
    <CreatePost posts={posts} setPosts={setPosts}/>
    <PostList posts={posts}/>    
   </>
    );
  };
  export default App;