import React from 'react';
import './App.css';
import './css/StarRating.css';
import './css/Navbar.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/header/header';
import Header from './components/header/header';
import MovieCard from './MovieCard';
import Signup from './pages/signup';
import Navbar from './components/NavigationBar/NavBar';
import Login from './pages/login';
import AddMovie from './AddMovie';
import Movie from './Movie';
import Error from './error';
import AddCast from './AddCast';
import Content from './Content';
import StarRating from './StarRating';
import Slider from './Slider';
import MovieList from './MovieList';
import Actor from './Actor';
import MovieListCaT from './MovieListCatagory';
import MovieListFind from './findMovie';
import MovieListMovies from './OnlyMovie';
import MovieListWeb from './OnlyWebSeries';


function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route index element={<Content />}></Route>
          {/* <Route index element={<Home />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="addMovie" element={<AddMovie />} />
          <Route path="addCast" element={<AddCast />} />
          <Route path="*" element={<Error />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="cast/:id" element={<Actor />} />
          <Route path="movies" element={<MovieListMovies />} />
          <Route path="webseries" element={<MovieListWeb />} />
          <Route path="catagory/Drama" element={<MovieListCaT catagory="Drama"/>}/>
          <Route path="catagory/Romantic" element={<MovieListCaT catagory="Romantic"/>}/>
          <Route path="catagory/Thriller" element={<MovieListCaT catagory="Thriller"/>}/>
          <Route path="catagory/Fantacy" element={<MovieListCaT catagory="Fantacy"/>}/>
          <Route path="catagory/Adventure" element={<MovieListCaT catagory="Adventure"/>}/>
          <Route path="catagory/Action" element={<MovieListCaT catagory="Action"/>}/>
          <Route path="find/:query" element={<MovieListFind />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;