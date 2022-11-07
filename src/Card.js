import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import './css/card.css';
import { Link } from "react-router-dom";


const Cards = ({ movie }) => {
    const [isLoading, setIsLoading] = useState(true);
    let url = '../movie/' + movie._id;

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return (
        <>

            {
                isLoading ?
                    <div className="cards">
                        <SkeletonTheme color="#202020" highlightColor="#444">
                            <Skeleton height={300} duration={2} />
                        </SkeletonTheme>
                    </div>
                    :
                    <Link to={url} style={{ textDecoration: "none", color: "white" }}>
                        <div className="cards">
                            <img className="cards_img" src={movie.poster} />
                            <div className="cards_overlay">
                                <div className="card_title"></div>
                                <div className="card_runtime"></div>
                                <div className="description">
                                </div>
                            </div>
                        </div>
                    </Link>
            }
        </>
    )
}

export default Cards