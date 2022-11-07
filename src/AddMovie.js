import React from "react";
import { useState, useEffect } from "react";
import Select from 'react-select'
import axios from "axios";
import '../src/App.css';
import swal from "sweetalert";



function AddMovie() {
    const [movie, setMovie] = useState(
        {
            title: "",
            genre: [],
            writer: "",
            director: "",
            cast: [],
            poster: "",
            trailer: "",
            description: "",
        }
    );
    const [cast, setCast] = useState([]);
    const [ResponseStatus, setResponseStatus] = useState();
    // let cast = new Array();


    const genre = [
        { value: 'Drama', label: 'Drama' },
        { value: 'Action', label: 'Action' },
        { value: 'Horror', label: 'Horror' },
        { value: 'Thriller', label: 'Thriller' },
        { value: 'Adventure', label: 'Adventure' },
        { value: 'Fantacy', label: 'Fantacy' },
        { value: 'Comedy', label: 'Comedy' },
        { value: 'Romantic', label: 'Romantic' },
        { value: 'Sci-Fi', label: 'Sci-Fi' },
        { value: 'Mystery', label: 'Mystery' },
        { value: 'Romantic', label: 'Romantic' },
    ]

    let url = 'http://localhost:9000/cast/';
    useEffect(
        () => {
            let isMounted = true;
            function fetchData() {
                axios.get(url).then(
                    (response) => {
                        if (cast != response.data) {
                            setCast(response.data);
                            console.log("Till now not error");
                            console.log(cast);
                        }
                    }
                ).catch(
                    console.log('Error')
                )
            }
            fetchData();
            return () => { isMounted = false };
        }, []
    )

    let DisplayCast = () => {
        console.log(cast);
        let options = [];
        for (var actors in cast) {
            cast[actors].value = cast[actors].name;
            cast[actors].label = cast[actors].name;
        }

        let handleSelectChange = (event) => {
            setMovie(
                { ...movie, cast: { event } }
            )
            console.log(movie);
        }


        console.log(options);
        return (

            <Select
                options={cast}
                isMulti
                placeholder='Select Cast...'
                onChange={handleSelectChange}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 5,
                    colors: {
                        ...theme.colors,
                        text: 'orangered',
                        primary25: 'lightblue',
                        primary: 'black',
                        neutral10: 'yellow',
                    },
                })}
            />
        )
    }


    let DisplayGenres = () => {
        let handleSelectChange1 = (event) => {
            setMovie(
                { ...movie, genre: { event } }
            )
            console.log(movie);
            // console.log(selectedOptions);
        }
        return (
            <Select
                options={genre}
                isMulti
                placeholder='Select Genres...'
                onChange={handleSelectChange1}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 5,
                    colors: {
                        ...theme.colors,
                        text: 'orangered',
                        primary25: 'lightblue',
                        primary: 'black',
                        neutral10: 'yellow',
                    },
                })}
            />
        )
    }


    const handler = (e) => {
        const { name, value } = e.target;
        setMovie({
            ...movie,
            [name]: value
        })
        console.log(movie);
    }

    const addMovieToDatabase = async () => {
        const url = 'http://localhost:9000/movie/addmovie';
        const { title, genre, writer, director, cast, poster, trailer, description } = movie
        await axios.post(url, movie).then(res => setResponseStatus(res.data));
        swal('Yay!!', 'Movie added to the database', 'success');
    }
    return (

        <div className="add_movieDetails" style={{ marginLeft: "2.5rem", marginTop: "6rem", color: "white" }}>
            <h1 >Add Movie</h1>
            <label for="title">Title: </label><br />
            < input style={{width: '90rem'}}type="text" id="title" name="title" placeholder="Movie/WebSeries Name" onChange={handler} /><br />
            <label for="writer">Writer: </label><br />
            < input style={{width: '90rem'}} type="text" placeholder="Writer Name" id="writer" name="writer" onChange={handler} /><br />
            <label for="director">Director: </label><br />
            < input style={{width: '90rem'}} type="text" placeholder="Director Name" id="director" name="director" onChange={handler} /><br />
            <label for="type">Select Type: </label><br />
            <select style={{width: '90rem'}} name="type" id="type" style={{ width: "20rem", marginBottom: "1rem", height: "2em" }}>
                <option>Movie</option>
                <option>Web-Series</option>
            </select><br></br>
            <label for="poster">Poster Link: </label><br />
            < input style={{width: '90rem'}} type="text" id="poster" name="poster" onChange={handler} /><br />
            <label for="trailer">Trailer Link: </label><br />
            < input style={{width: '90rem'}} type="text" id="trailer" name="trailer" onChange={handler} /><br />
            <label for="description">Description: </label><br />
            < input style={{width: '90rem'}} type="text" placeholder="Description" id="description" name="description" onChange={handler} /><br />


            <div className="genres" style={{ width: "90rem" }}>

                {DisplayGenres()}
            </div>
            <br />
            <div className="preview-values" style={{ width: "90rem" }} >
                {DisplayCast()}
            </div>

            <button className="button" value='Register' style={{ marginTop: "1rem", marginBottom: "2rem" }} onClick={addMovieToDatabase}>Add Movie</button>

        </div>

    )
}

export default AddMovie;