import React from "react";
import { useState } from "react";
function Movie(props) {
    const [movies, setMovies] = useState;
    var queryMovie = props.movie;
    const url = 'https://moviebackend.onrender.com/movie/' + queryMovie;
    useEffect(
        () => {
            let isMounted = true;
            function fetchData() {
                axios.get(url).then(
                    (response) => {
                        setMovies(response.data);
                        console.log(movies);
                    }
                ).catch(
                    console.log("Error")
                )
            }
            fetchData();
            return () => { isMounted = false };
        }, []
    )
    return (
        <div>

        </div>
    )
}
export default Movie;