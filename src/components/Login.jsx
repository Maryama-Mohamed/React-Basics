import { useState } from "react";

const Login = (probs) => {

    const [username, setusername] = useState("");

    const handleSumit = (event) =>{
        // console.log(username);
        event.preventDefault();
        probs.setUser(username);

    }
    return (
        <div>
            <form 
            onSubmit={handleSumit}
            >
                <input type="text" placeholder="Enter your Name"
        onChange=
    {(event) => setusername(event.target.value)}
                />

                <button type="submit">Log In</button>
            </form>
        </div>
    )
};

export default Login;