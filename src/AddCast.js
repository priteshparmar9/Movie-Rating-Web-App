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
        console.log(cast);
    }
    
    const addCastToDatabase = async () => {
        const url = 'http://localhost:9000/cast/addCast';
                const {name, dob, description, image} = cast
                await axios.post(url, cast).then(res=>setResponseStatus(res.data));
                swal('Yay!!','Actor/Actress added to the database','success');
                setCast({
                    name: "",
                    dob: "",
                    description: "",
                    image: "",
              })
    }
    return(
        <div className="add_Actordetails" style={{marginLeft: "2.5rem", marginTop: "6rem", color:"white", textAlign:"center" }}>
            <h1>Add Cast</h1>
            <label for="name" style={{marginRight:"17rem"}}>Name: </label><br/>
            < input type="text" id="name" name="name" value={cast.name}placeholder="Actor's Name" onChange={handler} style={{height:"2.5rem"}}/><br />
            <label for="dob" style={{marginRight:"15rem"}}>BirthDate: </label><br/>
            < input type="date" placeholder="dob" id="dob" name="dob" value={cast.dob} onChange={handler} style={{ marginBottom:"1rem", width:"20rem",height:"2.5rem"}} /><br />
            <label for="description" style={{marginRight:"14rem"}}>Description: </label><br/>
            < input type="text"  id="description" placeholder="Actor's Description" value={cast.description} name="description" style={{height:"2.5rem"}}  onChange={handler} /><br />
            <label for="image" style={{marginRight:"16.7rem"}}>Image: </label><br/>
            < input type="text" id="image" placeholder="Image Link" name="image" style={{height:"2.5rem"}} value={cast.image} onChange={handler} /><br />
            <button className="button" value='Register' onClick={addCastToDatabase}>Add</button>
            {/* {movie.name} */}
        </div>
    )
}

export default AddCast;