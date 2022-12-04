import React, { useEffect, useState } from "react";
import axios from "axios";
import SmallCard from "./SmallCard";
import Slider from "./Slider";
import Card from "./Card";
import Cards from "./Card";
import MovieList from "./MovieList";
import Loading from "./Loading";

function Content() {
  const [loading, setLoad] = useState(false);
  const [movie, setMovie] = useState([]);

  let url = 'https://moviebackend.onrender.com/movie/';
  useEffect(
    () => {
      function fetchData() {
        setLoad(true);
        axios.get(url).then(
          (response) => {

            setMovie(response.data);

            console.log(movie);
            setLoad(false);
          }
        ).catch(
          console.log('Error')
        )
      }
      fetchData();
    }, []
  )
  

  return (
    <>
      {
        loading?
        <>
          <Loading />
        </>
        :
        <div>
          <MovieList />
        </div>
        
        

      }
    </>

  )
}

export default Content;