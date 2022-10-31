import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './SmallCard.css';

function SmallCard(props) {
    const movie = props.movie;
    // document.getElementsByClassName("img1").style.background-image = url()
    const url = "https://www.youtube.com/embed/" + movie.trailer;
    return (

        <div>
            <Skeleton />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous" />

            <div class="card">
                <a href="#">
                    <div class="img1"></div>
                    <div class="img2"></div>
                    <div class="title">{movie.title}</div>
                    <div class="text">{movie.title}</div>
                    <a href="#"><div class="catagory">Series <i class="fas fa-film"></i></div></a>
                    <a href="#"><div class="views">20211  <i class="far fa-eye"></i> </div></a>
                </a>
                <div>
                    <iframe width="420" height="315"
                        src={url}>
                    </iframe>
                </div>
            </div>
            <div>
                <img src={movie.poster}/>
            </div>
            <div>
                <iframe width="420" height="315"
                    src={url}>
                </iframe>
            </div>
        </div>
    )
}

export default SmallCard;