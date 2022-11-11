import React from "react";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";


function AddCast() {
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
        const { name, dob, description, image } = cast
        await axios.post(url, cast).then(res => setResponseStatus(res.data));
        swal('Yay!!', 'Actor/Actress added to the database', 'success');
        setCast( {
            name: "",
            dob: "",
            description: "",
            image: "",
        });
    }
    return (
        <div className="add_Actordetails" style={{ marginLeft: "2.5rem", marginTop: "6rem", color: "white" }}>
            <h1>Add Cast</h1>
            <label for="name">Name: </label><br />
            < input type="text" value={cast.name} id="name" name="name" placeholder="Actor's Name" onChange={handler} /><br />
            <label for="dob">BirthDate: </label><br />
            < input type="date" value={cast.dob} placeholder="dob" id="dob" name="dob" onChange={handler} style={{ marginTop: "1rem", marginBottom: "1rem" }} /><br />
            <label for="description">Description: </label><br />
            < input type="text" value={cast.description} id="description" placeholder="Actor's Description" name="description" onChange={handler} /><br />
            <label for="image">Image: </label><br />
            < input type="text" value={cast.image} id="image" placeholder="Image Link" name="image" onChange={handler} /><br />
            <button className="button" value='Register' onClick={addCastToDatabase}>Add</button>
            {/* {movie.name} */}
        </div>
    )
}

export default AddCast;