import React from "react";
import Cards from "./Card";
// import "./movieList.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './css/movieList.css';
import Error from "./error";

const MovieListFind = (props) => {
    const { query } = useParams();
    let setQuery = props.setQuery;
    const [movie, setMovie] = useState([]);
    // setQuery("");

    let url = 'https://moviebackend.onrender.com/movie/find/' + query;
    useEffect(
        () => {
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
            // window.location.reload();
        }
    )

    function DisplayMovies() {
        return (
            <>
                <p style={{
                    marginTop: "5rem",
                    color: "white",
                    marginLeft: "1rem",
                    marginBottom: "-1rem"
                }}>
                    Showing Results for : {query}
                </p>
                {
                    movie?
                    
                        movie.map(
                            (mov1, index) => {
                                let movUrl = '../movie/' + mov1._id;
                                // <li>{mov1.title}</li>
                                return (
                                    <>
                                        <Cards movie={mov1} />
                                        {/* {mov1.title} */}
                                    </>
                                )
                            }
                        ) :
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

export default MovieListFind;