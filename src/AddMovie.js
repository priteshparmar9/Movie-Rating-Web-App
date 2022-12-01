import React from "react";
import { useState, useEffect } from "react";
import Select from 'react-select'
import axios from "axios";
import '../src/App.css';
import swal from "sweetalert";
import { Navigate } from "react-router-dom";



function AddMovie(props) {
    const [isAdmin, setAdmin] = useState(props.isAdmin);
    const [movie, setMovie] = useState(
        {
            title: "",
            genre: [],
            writer: "",
            director: "",
            cast: [],
            duration: "",
            poster: "",
            trailer: "",
            description: "",
            type: "",
        }
    );
    const [cast, setCast] = useState([]);
    const [ResponseStatus, setResponseStatus] = useState();
    // let cast = new Array();


    const genre = [
        { value: 'Drama', label: 'Drama' },
        { value: 'Action', label: 'Action' },
        { value: 'Horror', label: 'Horror' },
        { value: 'Thriller', label: 'Thriller' },
        { value: 'Adventure', label: 'Adventure' },
        { value: 'Fantasy', label: 'Fantasy' },
        { value: 'Comedy', label: 'Comedy' },
        { value: 'Romantic', label: 'Romantic' },
        { value: 'Sci-Fi', label: 'Sci-Fi' },
        { value: 'Mystery', label: 'Mystery' },
        { value: 'Romantic', label: 'Romantic' },
    ]

    const types = [
        { value: 'Movie', label: 'Movie' },
        { value: 'WebSeries', label: 'Web Series' },
    ]

    const customStyles = {
        option: provided => ({
            ...provided,
            color: 'black'
        }),
        control: provided => ({
            ...provided,
            color: 'black'
        }),
        singleValue: provided => ({
            ...provided,
            color: 'black'
        })
    }

    let url = 'https://moviebackend.onrender.com/cast/';
    useEffect(
        () => {
            let isMounted = true;
            function fetchData() {
                axios.get(url).then(
                    (response) => {
                        if (cast != response.data) {
                            setCast(response.data);
                            console.log("Till now not error");
                            console.log(cast);
                        }
                    }
                ).catch(
                    console.log('Error')
                )
            }
            fetchData();
            return () => { isMounted = false };
        }, []
    )

    let DisplayCast = () => {
        console.log(cast);
        let options = [];
        for (var actors in cast) {
            cast[actors].value = cast[actors].name;
            cast[actors].label = cast[actors].name;
        }

        let handleSelectChange = (event) => {
            let acts = Array();
            for(let a in event){
                acts.push({id:event[a]._id, name:event[a].name});
                // console.log(event[a]);
            }
            console.log(acts);
            setMovie(
                { ...movie, cast: acts  }
            )
            console.log(movie);
        }


        console.log(options);
        return (

            <Select
                options={cast}
                isMulti
                placeholder='Select Cast...'
                onChange={handleSelectChange}
                styles={customStyles}
            />
        )
    }


    let DisplayGenres = () => {
        let handleSelectChange1 = (event) => {
            let gen = Array();
            for(var g in event){
                gen.push(event[g].value);
            }
            setMovie(
                { ...movie, genre:  gen  }
            )
            console.log(movie);
        }
        return (
            <Select
                options={genre}
                isMulti
                placeholder='Select Genres...'
                onChange={handleSelectChange1}
                styles={customStyles}
            />
        )
    }

    let DisplayTypes = () => {
        let handleSelectChange1 = (event) => {
            let val = event.value;
            setMovie(
                { ...movie, type:  val  }
            )
            console.log(movie);
        }
        return (
            <Select
                options={types}
                placeholder='Select Type...'
                onChange={handleSelectChange1}
                styles={customStyles}
            />
        )
    }


    const handler = (e) => {
        const { name, value } = e.target;
        setMovie({
            ...movie,
            [name]: value
        })
        console.log(movie);
    }

    const addMovieToDatabase = async () => {
        const url = 'https://moviebackend.onrender.com/movie/addmovie';
        const { title, genre, writer, director, cast, poster, trailer, description } = movie
        await axios.post(url, movie).then(res => setResponseStatus(res.data));
        swal('Yay!!', 'Movie added to the database', 'success');
    }
    return (
            
            <div
                style={{
                    textAlign: 'center',
                    marginTop: "5rem"
                }}
            >
                {
                    isAdmin ? <></>:<Navigate to="/" />
                }
                <h1 style={{
                    color: "rgb(245, 166, 20)"
                }}>Add Movie</h1>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <input type='text' style={{ borderRadius: '10px', width: '100%',height:"3rem" ,fontSize:"1rem" }} id="title" name="title" placeholder="Movie/WebSeries Name" onChange={handler}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type='text' style={{ borderRadius: '10px', width: '100%', height:"3rem" ,fontSize:"1rem"}} placeholder="Writer Name" id="writer" name="writer" onChange={handler}/>
                        </div>
                        <div className="col">
                            <input type='text' style={{ borderRadius: '10px', width: '100%', height:"3rem" ,fontSize:"1rem"}} placeholder="Director Name" id="director" name="director" onChange={handler}/>
                        </div>
                        <div className="col">
                            {DisplayTypes()}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type='text' style={{ borderRadius: '10px', width: '100%', height:"3rem",fontSize:"1rem"}} id="poster" name="poster" onChange={handler} placeholder="Poster"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type='text' style={{ borderRadius: '10px', width: '100%', height:"3rem", fontSize:"1rem"  }} id="trailer" name="trailer" onChange={handler} placeholder="Trailer"/>
                        </div>
                        <div>
                            <input type='number' min='30' max='240' style={{ borderRadius: '10px', width: '400px',height:"3rem", marginRight:"1rem" ,fontSize:"1rem" }} id="duration" name="duration" onChange={handler} placeholder="Duration (in Minutes)"/>
                        </div>
                    </div>
                    <div className="row" style={{marginBottom: "1rem"}}>
                    <div className="col">
                            {DisplayGenres()}
                        </div>
                    </div>
                    <div className="row" style={{marginBottom: "1rem"}}>
                        <div className="col">
                            {DisplayCast()}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <textarea style={{ borderRadius: '10px', width: '100%',fontSize:"1rem" , paddingLeft:".5rem" }} placeholder="Description" id="description" name="description" onChange={handler}/>
                        </div>
                    </div>
                </div>
                <button className="button" value='Register' style={{ marginTop: "1rem", marginBottom: "1rem", width:"50%" }} onClick={addMovieToDatabase}>Add Movie</button>
            </div>

    )
}

export default AddMovie;