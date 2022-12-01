import React from "react";
import Cards from "./Card";
// import "./movieList.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './css/movieList.css';
import Slider from "./Slider";

const MovieList = () => {
  const [movie, setMovie] = useState([]);

  let url = 'https://moviebackend.onrender.com/movie/';
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

  function DisplayMovies() {
    return (
      <>
        {
          movie.map(
            (mov1, index) => {
              let movUrl = '../movie/' + mov1._id;
              return (
                <>
                
                  <Cards movie={mov1} />
                
                </>
              )
            }
          )
        }
      </>
    );
  }


  return (
    <div style={{marginTop:"5rem"}}>
      <Slider />
      <div style={{marginLeft:"5rem"}}>
      {DisplayMovies()}
      </div>

    </div>
  );
}

export default MovieList;