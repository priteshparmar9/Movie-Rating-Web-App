import React from "react";
import Cards from "./Card";
// import "./movieList.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './css/movieList.css';
import Slider from "./Slider";

const MovieListMovies =() =>{
   const [movie, setMovie] = useState([]);

  let url = 'http://localhost:9000/movie/allmovies';
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
    }, []
  )

  function DisplayMovies(){
    return(
    <>
    {
        movie.map(
          (mov1, index) => {
            let movUrl = '../movie/' + mov1._id;
            // <li>{mov1.title}</li>
            return (
              <>
                <Cards movie={mov1}/>
                {/* {mov1.title} */}
              </>
            )
          }
        )
   }
  </>
);
}

  
    return(
       <>
       <Slider />
        {DisplayMovies()}
        
       </>
    );
  }

 export default MovieListMovies;