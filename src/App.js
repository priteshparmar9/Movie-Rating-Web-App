import React from 'react';
import './App.css';
import './css/StarRating.css';
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


function App(){


  return(
    <div className="App">
      
      <Navbar />
      <StarRating />
      <BrowserRouter>
       <Routes>

          <Route index element={<Content />}></Route>
          {/* <Route index element={<Home />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="addMovie" element={<AddMovie />} />
          <Route path="addCast" element={<AddCast />} />
          <Route path="*" element={<Error />} />
      
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;