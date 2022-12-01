import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { act } from "react-dom/test-utils";
import Skeleton from "react-loading-skeleton";
import { useAsyncError, useParams } from "react-router-dom";
import Error from "./error";

function Actor() {
    const [actor, setActor] = useState(null);
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
                    fetchData()
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
        <div style={{
            marginTop: "8rem",
            display: "block",
            marginLeft: "10rem",
            fontSize: "1rem",
            color: "white",
            marginRight: "10rem",
        }}>
            {
                actor ?
                    <div>
                        {actor[0].name}
                        < br />
                        <img src={actor[0].image} />
                        <br />
                        {actor[0].dob}
                        <br />
                        {actor[0].description}
                    </div >
                    :

                    loading
                        ?
                        <Skeleton />
                        :
                        <Error />
            }
        </div >
    )



}

export default Actor;