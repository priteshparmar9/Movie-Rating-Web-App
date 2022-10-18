import React from "react";
import { useState } from "react";


function AddMovie(){
    const [movie, setMovie] = useState();
    
    const handler = () => {
    
    }
    
    const try_login = () => {
    
    }
    return(
        <div className="login-page">
            <h1>Add Movie Page</h1>
            < input type="text" name="title" placeholder="Your Name" onChange={handler} /><br />
            < input type="text" placeholder="Your Email" name="email"  onChange={handler} /><br />
            < input type="password" placeholder="Your Password" name="password"  onChange={handler} /><br />
            < input type="password" placeholder="Re-enter Password" name="re_password" onChange={handler} /><br />
            <button className="button" value='Register' onClick={try_login}>Register</button>
            {/* {movie.name} */}
        </div>
    )
}

export default AddMovie;