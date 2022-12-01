import React from "react";
import Cards from "./Card";
// import "./movieList.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './css/movieList.css';
import Error from "./error";

const MovieListCat = (props) => {
    const catagory = props.catagory;
    const [movie, setMovie] = useState([]);

    let url = 'https://moviebackend.onrender.com/movie/genreMovie/'+catagory;
    useEffect(
        () => {
            document.title = catagory + ' Movies | MovieDB';
            function fetchData() {
                axios.get(url).then(
                    (response) => {
                        setMovie(response.data);
                        console.log(movie);
                    }
                ).catch(
                    console.log('Error')
                )
            }
            fetchData();
        }
    )

    function DisplayMovies() {
        return (
            <>
                <br />
                <br />
                <br />

                {
                    movie ?
                    movie.map(
                        (mov1) => {
                            // <li>{mov1.title}</li>
                            return (
                                <>
                                    <Cards movie={mov1} />
                                    {/* {mov1.title} */}
                                </>
                            )
                        }
                    ):
                    <>
                        <Error />
                    </>
                }
            </>
        );
    }


    return (
        <>
            {DisplayMovies()}

        </>
    );
}

export default MovieListCat;