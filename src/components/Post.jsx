const Post = ({content, image}) =>{
    return(
        <>
        <p>{content}</p>
             {image && <img src={URL.createObjectURL(image)} 
                 style={{width: '500px', height: '10'}}
                 />}
                 
        </>
    )
}
export default Post;