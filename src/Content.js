import React, { useEffect, useState } from "react";
import axios from "axios";
import SmallCard from "./SmallCard";

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
            // <li>{mov1.title}</li>
            <h1>{<SmallCard movie={mov1} />}</h1>
          )

        }
      </>
    )
  }

  return (
    <h1>
      Content
      {DisplayMovies()}
    </h1>
  )
}

export default Content;