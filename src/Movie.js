import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Error from "./error";
import StarRating from './StarRating';
import "./css/movie.css";
import Footer1 from "./Footer";

function Movie() {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [rating, setRating] = useState(0.0);
    const [rev, setRev] = useState(true);
    const [loading, setLoad] = useState(true);


    let url = `https://moviebackend.onrender.com/movie/${id}`;
    useEffect(
        async () => {
            let Actors = new Array();
            let fetchData = async () => {
                await axios.get(url).then(
                    (response) => {
                        document.title = response.data[0].title;
                        console.log(response);
                        setMovie(response.data);
                        console.log(movie);
                    }
                ).catch(
                    console.log('Error')
                )

                url = `https://moviebackend.onrender.com/review/movId/${id}`;

                await axios.get(url).then(
                    (response) => {
                        setReviews(response.data.reviews);
                        setRating(response.data.rating);
                        console.log("Review is : " + reviews)
                        console.log("rating is " + rating);
                        console.log(rating);
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
        }, 5000
    )


    let ShowRating = () => {
        if (window.localStorage.getItem('isLoggedIn')) {
            return (
                <StarRating id={id} />
            )
        }
        return (
            <>
                <h4 style={{
                    color: "white",
                    marginTop: "1rem",
                    marginBottom: "1rem"
                }}>
                    Want to give review?


                    <a to="../login" style={{
                        color: "blue",

                        marginBottom: "1rem"

                    }}>Login</a>

                </h4>
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
                                                    let url = "../catagory/" + gen;
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
                                        {
                                            movie[0].cast.map(
                                                (c) => {
                                                    console.log(c);
                                                    var castUrl = '../cast/' + c.id;
                                                    return (
                                                        <a href={castUrl}>
                                                            <span className="cast">{c.name} </span>
                                                        </a>
                                                    )
                                                }
                                            )

                                        }
                                    </div>
                                    <div className="movie_director" style={{ marginTop: "1rem", marginLeft: "16rem" }}>
                                        <span style={{ color: "white", fontSize: "1.5rem" }}>Director: </span>
                                        <span style={{ color: "white", fontSize: "1.5rem" }}>{movie[0].director}</span>
                                    </div>
                                    <div className="movie_writer" style={{ marginTop: "1rem", marginLeft: "16rem" }}>
                                        <span style={{ color: "white", fontSize: "1.5rem" }}>Writer: </span>
                                        <span style={{ color: "white", fontSize: "1.5rem" }}>{movie[0].writer}</span>
                                    </div>
                                    <div className="rating" style={{ marginTop: "1rem", marginLeft: "16rem" }}>
                                        <span style={{ color: "white", fontSize: "1.5rem" }}>Rating: </span>
                                        <span style={{ color: "white", fontSize: "1.5rem" }}>
                                            
                                            
                                            {
                                                (rating)?
                                                <>
                                                    {rating.toFixed(1)} ⭐ / 10 
                                                </>:
                                                <>
                                                    Be the first to review
                                                </>
                                            }    
                                        </span>
                                    </div>
                                    <div className="duration" style={{ marginTop: "1rem", marginLeft: "16rem" }}>
                                        <span style={{ color: "white", fontSize: "1.5rem" }}>{
                                            (movie[0].type == "Movie") ?
                                                <>
                                                    Duration:
                                                </> :
                                                <>
                                                    No of Episodes:
                                                </>
                                        } </span>
                                        <span style={{ color: "white", fontSize: "1.5rem" }}>{movie[0].duration} {
                                            (movie[0].type == "Movie") ?
                                                <>
                                                    mins
                                                </> :
                                                <>
                                                </>
                                        }</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="description"><h2>Description: </h2>{movie[0].description}</div>

                        <div>
                            {
                                reviews ?
                                    <>
                                        <h2 style={{
                                            // marginLeft: "16rem",
                                            textAlign: "center",
                                            marginTop: "5rem",
                                            color: "white",
                                        }}
                                        >Reviews</h2>
                                        {
                                            reviews.map(
                                                (review) => {
                                                    return (
                                                        <div style={{ marginTop: "1rem", marginLeft: "16rem", fontSize: "1rem", backgroundColor: "white", marginRight: '16rem', padding: "5rem", borderRadius: "2rem" }}>
                                                            <span style={{ color: "black", fontSize: "1.5rem" }}>
                                                                Username : {review.username}
                                                            </span>
                                                            <br />
                                                            <span style={{ color: "black", fontSize: "1.5rem" }}>
                                                                Rating :  ⭐{review.rating}/10
                                                            </span>
                                                            <hr />
                                                            <span style={{ color: "black", fontSize: "1rem" }}>
                                                                Review : {review.review}
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