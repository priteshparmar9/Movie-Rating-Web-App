import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Error from "./error";
import StarRating from './StarRating';
import "./css/movie.css";

function Movie() {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [newActors, setActors] = useState([]);
    const [rev, setRev] = useState(true);
    const [loading, setLoad] = useState(true);

    let url = `http://localhost:9000/movie/${id}`;
    useEffect(
        // console.log()
        async () => {
            let Actors = new Array();
            let fetchData = async () => {
                await axios.get(url).then(
                    (response) => {
                        console.log(response);
                        setMovie(response.data);
                        console.log(movie);
                    }
                ).catch(
                    console.log('Error')
                )

                url = `http://localhost:9000/review/movId/${id}`;

                await axios.get(url).then(
                    (response) => {
                        setReviews(response.data);
                        console.log("Review is : " + reviews)
                        console.log(reviews);
                    }
                ).catch(
                    console.log("Error")
                )
            }

            fetchData();
        }, []
    )

    setTimeout(
        () => {
            setLoad(false);
            // console.log(movie);
        }, 5000
    )


    let ShowRating = () => {
        console.log("Show Ratting Called!!!!!!!!!!!!1111");
        setTimeout(() => {
            console.log(reviews);
            // console.log(newActors);
        }, 2000);

        if (window.localStorage.getItem('isLoggedIn')) {
            return (
                <StarRating id={id} />
            )
        }
        return (
            <>
                Not Logged IN
            </>
        )
    }
    return (

        <>
            {
                movie
                    ?
                    <div className="movie">
                        <div className="movie_intro">
                            <iframe width="1200" height="620" className="movie_backdrop" style={{
                                borderRadius: "20px",
                                border: "1px",
                            }}
                                src={'https://www.youtube.com/embed/' + movie[0].trailer + '?&mute=1'}></iframe>
                        </div>
                        <div className="movie_detail">
                            <div className="movie_detailLeft">
                                <div className="posterBox">
                                    <img className="movie_poster" src={(movie[0].poster)} />
                                </div>
                            </div>
                            <div className="movie_detailRight">
                                <div className="movie_detailRightTop">
                                    <div className="movie_name">
                                        {movie[0].title}
                                    </div>
                                    <div className="movie_genres" style={{ marginTop: "1rem", marginLeft: "15.5rem" }}>
                                        {
                                            movie[0].genre.map(
                                                (gen) => {
                                                    let url = "../catagory/"+ gen; 
                                                    return (
                                
                                                        <a href={url}>

                                                            <span className="movie_genre">{gen} </span>
                                                        </a>
                                                    )
                                                }
                                            )
                                        }
                                    </div>
                                    <div className="movie_cast" style={{ marginTop: "1.5rem", marginLeft: "16rem" }}>
                                        <span style={{ color: "white", fontSize: "1.5rem" }}>Cast: </span>
                                        {/* {
                                            newActors?
                                            newActors.map(
                                                (actor) => {
                                                    // DisplayName()
                                                    let castUrl = '../cast/' + actor;
                                                    return (
                                                        <a href={castUrl}>
                                                            <span className="cast">{actor} </span>
                                                        </a>
                                                    )
                                                }
                                            ):
                                            <></>
                                        } */}
                                    </div>
                                    <div className="movie_director" style={{ marginTop: "1rem", marginLeft: "16rem" }}>
                                        <span style={{ color: "white", fontSize: "1.5rem" }}>Director: </span>
                                        <span style={{ color: "white", fontSize: "1.5rem" }}>{movie[0].director}</span>
                                    </div>
                                    <div className="movie_writer" style={{ marginTop: "1rem", marginLeft: "16rem" }}>
                                        <span style={{ color: "white", fontSize: "1.5rem" }}>Writer: </span>
                                        <span style={{ color: "white", fontSize: "1.5rem" }}>{movie[0].writer}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="description"><h2>Description: </h2>{movie[0].description}</div>
                        <div>
                            {
                                reviews ?
                                    <>
                                        <h2>Reviews</h2>
                                        {
                                            reviews.map(
                                                (review) => {
                                                    return (
                                                        <div style={{ marginTop: "1rem", marginLeft: "16rem" }}>
                                                            <span style={{ color: "white", fontSize: "1.5rem" }}>
                                                                {review.username} :
                                                            </span>
                                                            <span style={{ color: "white", fontSize: "1.5rem" }}>
                                                                {review.rating}
                                                            </span>
                                                            <span style={{ color: "white", fontSize: "1.5rem" }}>
                                                                {review.review}
                                                            </span>
                                                        </div>
                                                    )
                                                }
                                            )
                                        }
                                    </> :
                                    <>
                                    </>
                            }
                        </div>

                        {
                            rev ?
                                ShowRating() :
                                {}
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