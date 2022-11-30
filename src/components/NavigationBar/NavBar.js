import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigate, redirect, useLinkClickHandler } from "react-router-dom"
import Select from 'react-select';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import swal from 'sweetalert';




function NavBar(props) {

    var isLoggedIn = props.isLoggedIn;
    var isAdmin = props.isAdmin;
    var setLogin = props.setLogin;
    var setAdmin = props.setAdmin;
    var query = props.query;
    var setQuery = props.setQuery;
    
    useEffect(
        () => {
            if(window.localStorage.getItem('isLoggedIn')){
                console.log("Is Logged in : " + window.localStorage.getItem('isLoggedIn'));  
                setLogin(true);
                if(window.localStorage.getItem('isAdmin') == true){
                  setAdmin(true);
                }
              }
        }
    )


    function ShowTags() {
        return (
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
                <li><Link to="/addmovie">AddMovie</Link></li>
                <li><Link to="/addcast">Add Cast</Link></li>
            </ol>
        )
    }

    function ShowLogout() {
        function logout() {
            window.localStorage.removeItem('isLoggedIn')
            window.localStorage.removeItem('username')
            setLogin(false);
            setAdmin(false);
            swal(
                {
                    title: "Logout successful!",
                    icon: "success",
                  }
            )
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
        console.log(query);
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
                    </Link>
                </div>
                {
                    isAdmin ? ShowAdminTags() : console.log('Do nothing')
                }
                {
                    isLoggedIn ? ShowLogout() : ShowTags()
                }

            </nav>

        </div>
    )
}




export default NavBar;