const Header = ({user, setUser}) => {
    // console.log(user)
    return (
        <div>
            <span >Welcome {user}!</span> 
            
            <button type="submit" 
            onClick={()=>setUser("")}
            >Logout</button>
        </div>
    )
};

export default Header;