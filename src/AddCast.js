import React from "react";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";


function AddCast(){
    const [cast, setCast] = useState(
        {
              name: "",
              dob: "",
              description: "",
              image: "",
        }
    );
    const [ResponseStatus, setResponseStatus] = useState();

    const handler = (e) => {
        const { name, value } = e.target;
        setCast({
            ...cast,
            [name]: value
        })
        // console.log(cast);
    }
    
    const addCastToDatabase = async () => {
        const url = 'http://localhost:9000/cast/addCast';
                const {name, dob, description, image} = cast
                await axios.post(url, cast).then(res=>setResponseStatus(res.data));
                swal('Yay!!','Actor/Actress added to the database','success');
    }
    return(
        <div className="login-page">
            <h1>Add Cast Page</h1>
            < input type="text" name="name" placeholder="name" onChange={handler} /><br />
            < input type="date" placeholder="dob" name="dob"  onChange={handler} /><br />
            < input type="text" placeholder="description" name="description"  onChange={handler} /><br />
            < input type="text" placeholder="image" name="image" onChange={handler} /><br />
            <button className="button" value='Register' onClick={addCastToDatabase}>Register</button>
            {/* {movie.name} */}
        </div>
    )
}

export default AddCast;