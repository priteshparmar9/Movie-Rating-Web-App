import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/header/header';
// import Header from './components/header/header';
import MovieCard from './MovieCard';
import Signup from './pages/signup';
import Navbar from './components/NavigationBar/NavBar';
import Login from './pages/login';
import AddMovie from './AddMovie';
import Movie from './Movie';
import Error from './error';


function App(){


  return(
    <div className="App">
      
      <Navbar />
      <BrowserRouter>
      <Routes>

      
          {/* <Route index element={<Home />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;