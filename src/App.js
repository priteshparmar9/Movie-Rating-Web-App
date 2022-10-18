import React from 'react';
import './App.css';
import {BrowserRouter as BrowserRouter, Routes, Route} from "react-router-dom";
import './components/header/header';
// import Header from './components/header/header';
import MovieCard from './MovieCard';
import Content  from './Content';
import Navbar from './components/NavigationBar/NavBar';
import Login from './pages/login';
import AddMovie from './AddMovie';


function App(){


  return(
    <div className="App">
      
      <Navbar />
      <Content />
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<h1>Hello World</h1>}></Route>
          <Route path="movie/:id" element={<h1>Movie details page</h1>}></Route>
          <Route path="movies/" element={MovieCard}></Route>
          <Route path="login/" element={Login}></Route>
          <Route path='/*' element={<h1>Error Page</h1>}></Route>
          <Route path="query?:q" element={<h1> Search Page</h1>} > </Route>
          {/* <Route path="/login" element={Login} > </Route> */}
        </Routes>
      </BrowserRouter>
      <Login />
      <MovieCard />
      <AddMovie />
    </div>
  );
}

export default App;