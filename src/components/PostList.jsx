import Post from "./Post";
const PostList = ({posts}) =>{

    return posts.map((post) => (
    // <Post content={post.content} image={post.image}
    <Post{...post} 
    />
  
        
    ));

}
export default PostList;