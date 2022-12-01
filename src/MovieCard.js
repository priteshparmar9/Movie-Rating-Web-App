import React, { useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { Route, Router, Routes } from "react-router-dom";

function MovieCard() {
    const [movies, setMovies] = new useState([]);
    const try_load_movie = () => {
        // if(user.name && user.email && user.password && user.re_password){
        //     alert("Proceeding")
        // }
        // else{
        //     alert("Some fields are missing")
        // }
        // const fetch = require('node-fetch');

        const url = 'https://moviebackend.onrender.com/movie';
        axios.get(url).then(res => { setMovies(res.data); console.log(movies) });
        // fetch(url)
        //     .then(res => res.json())
        //     .then(json => console.log(json))
        //     .catch(err => console.error('error:' + err));
    }
    var i = 0;
    return (
        <>
            <button className="button" value='Get Movie' onClick={try_load_movie} >Get Movie</button>
            {
                movies.map(
                    (m) =>
                        // <h1>{m.title}</h1>
                        <Movie movie={m} />
                )
            }
        </>
    )


}


export default MovieCard;