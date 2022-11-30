import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { act } from "react-dom/test-utils";
import Skeleton from "react-loading-skeleton";
import { useAsyncError, useParams } from "react-router-dom";
import Error from "./error";
import "./css/actor.css"
import MovieListActor from "./ActorInMovie";

function Actor(props) {
    let actor = props.actor;
    let setActor = props.setActor;
    const [loading, setLoad] = useState(true);
    const { id } = useParams();

    let url = `https://moviebackend.onrender.com/cast/${id}`;
    useEffect(
        // console.log()
        () => {
            function fetchData() {
                axios.get(url).then(
                    (response) => {

                        setActor(response.data);

                        console.log(actor);
                    }
                ).catch(
                    console.log('Error')
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

    return (
        <div>
            {
                actor ?
                <div className="actor_details">
                    <div className="actor_image">
                      <img style={{borderRadius: "10px"}} src={actor[0].image}/>
                    </div>
                    <div className="actor_name">
                        <span>Name: {actor[0].name}</span>
                    </div>
                    <div className="actor_dob">
                        <span>BirthDate: {actor[0].dob}</span>
                    </div>
                    <div className="actor_description">
                        <span style={{fontSize:"1.3rem"}}>Description: </span>{actor[0].description}
                    </div>
                </div>
                :
            
                loading
                    ?
                    <Skeleton />
                    :
                    <Error />
            }
            {/* <MovieListActor id={id} name={actor[0].name}/> */}
        </div>
    )



}

export default Actor;