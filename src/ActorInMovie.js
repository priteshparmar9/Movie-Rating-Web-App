import React from "react";
import Cards from "./Card";
// import "./movieList.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './css/movieList.css';

const MovieListActor = (props) => {
    let name = props.name;
    let id = props.id;
    console.log(id);
    const [movie, setMovie] = useState([]);

    let url = 'https://moviebackend.onrender.com/movie/castInMovie/';
    useEffect(
        () => {
            function fetchData() {
                let act = {
                    id: id,
                    name: name
                }
                axios.post(url, act).then(
                    (response) => {

                        setMovie(response.data);

                        console.log(movie);

                    }
                ).catch(
                    console.log('Error')
                )
            }
            fetchData();
        }, []
    )

    function DisplayMovies() {
        return (
            <>
                {
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
                    )
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

export default MovieListActor;