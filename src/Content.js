import React, { useEffect, useState } from "react";
import axios from "axios";
import SmallCard from "./SmallCard";
import Slider from "./Slider";
import Card from "./Card";
import Cards from "./Card";
import MovieList from "./MovieList";

function Content() {
  const [movie, setMovie] = useState([]);

  let url = 'http://localhost:9000/movie/';
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
  let DisplayMovies = () => {
    return (
      <>
        {
          movie.map((mov1) =>
            <h1>{<SmallCard movie={mov1} />}</h1>
          )
        }
      </>
    )
  }

  return (
    <div>
    
      <MovieList />
      {/* {DisplayMovies()} */}
    </div>

  )
}

export default Content;