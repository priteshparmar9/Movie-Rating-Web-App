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
                {...movie, cast: {event}}
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
                {...movie, genre: {event}}
            )
                console.log(movie);
            // console.log(selectedOptions);
        }
        return(
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
                const {title, genre, writer, director, cast, poster, trailer, description} = movie
                await axios.post(url, movie).then(res=>setResponseStatus(res.data));
                swal('Yay!!','Movie added to the database','success');
    }
    return (
        
        <div className="">
            <h1>Add Movie Page</h1>
            < input type="text" name="title" placeholder="title" onChange={handler} /><br />
            < input type="text" placeholder="writer" name="writer" onChange={handler} /><br />
            < input type="text" placeholder="director" name="director" onChange={handler} /><br />
            < input type="text" placeholder="poster" name="poster" onChange={handler} /><br />
            < input type="text" placeholder="trailer" name="trailer" onChange={handler} /><br />
            < input type="text" placeholder="description" name="description" onChange={handler} /><br />
            
            <div className="genres">
                {DisplayGenres()}
            </div>

            
            <div className="preview-values">
                {DisplayCast()}
            </div>

            <button className="button" value='Register' onClick={addMovieToDatabase}>Add Movie</button>

        </div>
    )
}

export default AddMovie;