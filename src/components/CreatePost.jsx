import { useRef, useState } from "react";

const CreatePost = ({posts,setPosts}) => {
    // console.log(setPosts)
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);

    const imageRef = useRef();
    const contentRef = useRef();

    const handleSumit = (event) => {
        event.preventDefault();
        // console.log(content);
     const newPost = { content, image }
        setPosts([newPost, ...posts]); 
        setContent("");
        setImage("");
        imageRef.current.value = "";
        contentRef.current.focus();
               
    };

    return (
        <div>
            <h1>Create New Post </h1>
            <form
            onSubmit={handleSumit}
            >
                <input type="text"
                 placeholder="post content"
                onChange={(event) => setContent(event.target.value)  
                }
                value={content}
                ref={contentRef}
                style={{
                    outline: '2px solid blue',
                    padding: '2px',
                    marginRight: '30px'
                }}
                />

                <input type="file"
                onChange={(event) => setImage(event.target.files[0])}
                ref={imageRef}
                 />
                <button type="submit">Submit</button>
            </form>
            {/* <p>{content}</p>
            {image &&<img src={URL.createObjectURL(image)} 
            style={{width: '100', height: '60'}}
            />} */}
        </div>
    )
}
export default CreatePost;