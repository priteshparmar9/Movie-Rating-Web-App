import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import Error from "./error";
import StarRating from './StarRating';

function Movie() {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [loading, setLoad] = useState(true);

    let url = `http://localhost:9000/movie/${id}`;
    useEffect(
        // console.log()
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
            console.log(window.localStorage.getItem('username'));
            fetchData();
        }, []
    )

    setTimeout(
        () => {
            setLoad(false);
            // console.log(movie);
        }, 5000
    )


    return (

        <>
            {
                movie
                    ?
                    <div>
                        <iframe width="1200" height="750"
                            src={ 'https://www.youtube.com/embed/' + movie[0].trailer + '?autoplay=1&mute=1' }>
                        </iframe>
                        <br />
                        <img src={(movie[0].poster)} />
                        <h3>
                            Genre:
                            {
                                movie[0].genre[0].event.map(
                                    (gen) => {
                                        return (
                                            <h3>
                                                {gen.value}
                                            </h3>
                                        )
                                    }
                                )
                            }
                        </h3>
                        <span>
                            <h1>Title : {movie[0].title}</h1>
                        </span>
                        <h1>
                            Cast :
                            {
                                movie[0].cast[0].event.map(
                                    (actor) => {
                                        let castUrl = '../cast/' + actor._id;    
                                        return (
                                            <a href={castUrl}>

                                            <h3>
                                                {actor.name}
                                            </h3>
                                            </a>
                                        )
                                    }
                                )
                            }
                        </h1>
                        <h1>
                            Writer :
                            {
                                ' ' + movie[0].writer
                            }
                        </h1>
                        <p>
                            Description : {
                                ' ' + movie[0].description
                            }
                        </p>
                        {
                            window.localStorage.getItem('isLoggedIn') ?
                            <StarRating movie={id}/>
                            :
                            <></>
                        }
                    </div>
                    :
                    <div>
                        {
                            loading
                                ?
                                <Skeleton />
                                :
                                <Error />
                        }
                    </div>
            }
        </>
    )
}

export default Movie;