import React from 'react';
import { Link } from 'react-router-dom';
import { Navigate, redirect, useLinkClickHandler } from "react-router-dom"
import Select from 'react-select';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";




function NavBar() {

    const [query, setQuery] = useState();

    const searchOptions = [
        {
            value: 'Movie', label: 'Movies'
        },
        {
            value: 'Actor', label: 'Actors'
        },
        {
            value: 'Director', label: 'Directors'
        },
    ]

    function ShowTags() {
        return (
            // <div className='userTag'>
            //     <a href="/login">
            //         <button className='btn btn-dark'>Login</button>
            //     </a>
            //     <a href="/signup">
            //         <button className='btn btn-dark'>Signup</button>
            //     </a>   
            // </div>
            <ol>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/webseries">Web-Series</Link></li>
                <li><Link to="/login">Sign In</Link></li>
            </ol>


        )
    }

    function ShowAdminTags() {
        return (
            <ol>
                <li><a href="/addmovie">AddMovie</a></li>
                <li><a href="/addcast">Add Cast</a></li>
            </ol>
        )
    }

    function ShowLogout() {
        function logout() {
            window.localStorage.removeItem('isLoggedIn')
            window.localStorage.removeItem('username')
            window.location.reload();
        }

        return (
            <ol>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/webseries">Web-Series</Link></li>
                <li>

                    <Link onClick={logout} style={{
                        marginLeft: '1px'
                    }}>Logout</Link>
                </li>
            </ol>
        )
    }

    function handler(event) {
        setQuery("/find/" + event.target.value);
    }

    console.log(window.localStorage.getItem('isLoggedIn'));
    function logout() {
        window.localStorage.removeItem('isLoggedIn');
        window.localStorage.removeItem('username')
        // console.log(window.localStorage.getItem('isLoggedIn'));
        window.location.reload();
    }



    return (
        <div>
            <nav className='fixed-top'>

                <a className="navbar-brand" href="/">
                    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" width="30" height="30" alt="" />
                </a>

                <div className='search_box'>
                    <input type="search" placeholder='Search...' onChange={handler}></input>
                    <Link to={query}>
                        <span className='fa fa-search'>Search</span>
                        {/* Search */}
                    </Link>
                </div>
                {

                    (window.localStorage.getItem('username') == 'admin') ? ShowAdminTags() : console.log('Do nothing')
                }
                {
                    window.localStorage.getItem('isLoggedIn') ? ShowLogout() : ShowTags()
                }

            </nav>

        </div>
    )
}




export default NavBar;