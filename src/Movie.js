import React from "react";

function Movie(props) {

    return (
        <>
            <h1>
                {props.movie.title}
            </h1>
            {
                props.movie.cast.map(
                    (cast) =>
                        <p>{cast}</p>
                )}
        </>
    )
}

export default Movie;