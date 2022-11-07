import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import Error from "./error";
import StarRating from './StarRating';
import "./css/movie.css";

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
                    <div className="movie">
                        <div className="movie_intro">
                        <iframe width="1200" height="560" className="movie_backdrop"
                            src={ 'https://www.youtube.com/embed/' + movie[0].trailer + '?autoplay=1&mute=1' }></iframe>
                        </div>
                        <div className="movie_detail">
                            <div className="movie_detailLeft">
                              <div className="posterBox">
                                <img className="movie_poster" src={(movie[0].poster)}/>
                              </div>
                            </div>
                            <div className="movie_detailRight">
                                <div className="movie_detailRightTop">
                                  <div className="movie_name">
                                    {movie[0].title}
                                  </div>
                                  <div className="movie_genres" style={{marginTop:"1rem",marginLeft:"15.5rem"}}>
                                    {
                                        movie[0].genre[0].event.map(
                                            (gen) => {
                                                return(
                                                <span className="movie_genre">{gen.value} </span>
                                                )
                                            }
                                        )
                                    }
                                  </div>
                                  <div className="movie_cast" style={{marginTop:"1.5rem", marginLeft:"16rem"}}>
                                    <span style={{color:"white", fontSize:"1.5rem"}}>Cast: </span>
                                    {
                                     movie[0].cast[0].event.map(
                                     (actor) => {
                                        let castUrl = '../cast/' + actor._id;    
                                        return (
                                            <a href={castUrl}>
                                                <span className="cast">{actor.name}, </span>
                                            </a>
                                        )
                                       }
                                      )
                                    }
                                  </div>
                                  <div className="movie_director" style={{marginTop:"1rem", marginLeft:"16rem"}}>
                                    <span style={{color:"white", fontSize:"1.5rem"}}>Director: </span>
                                    <span style={{color:"white", fontSize:"1.5rem"}}>{movie[0].director}</span>
                                  </div>
                                  <div className="movie_writer" style={{marginTop:"1rem", marginLeft:"16rem"}}>
                                    <span style={{color:"white", fontSize:"1.5rem"}}>Writer: </span>
                                    <span style={{color:"white", fontSize:"1.5rem"}}>{movie[0].writer}</span>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div className="description"><h2>Description: </h2>{movie[0].description}</div>

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