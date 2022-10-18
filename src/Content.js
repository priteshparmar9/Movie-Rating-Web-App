import React, { useEffect, useState } from "react";

function Content() {
    const [movies, setMovies] = useState([]);
    const fetchData = () => {
        return fetch("http://localhost:9000/movie/")
              .then((response) => /*response.json()*/ setMovies(response))
            //   .then((data) => setMovies(data));
        }
      useEffect(() => {
        fetchData();
      },[])
    
      return (
        <main>
            {movies[0]}
          <h1>User List</h1>
          <ul>
            {/* {user && user.length > 0 && user.map((userObj, index) => (
                <li key={userObj.id}>{userObj.name}</li>
              ))} */}
          </ul>
        </main>
      );
}

export default Content;