import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
// import { FaSearch } from 'react-icons/fa';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

function NavBar() {

    const [query, setQuery] = useState();

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

    const customStyles = {
        option: provided => ({
            ...provided,
            color: 'black'
        }),
        control: provided => ({
            ...provided,
            color: 'black'
        }),
        singleValue: provided => ({
            ...provided,
            color: 'black'
        })
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

    function ConditionalLinks() {
        if (window.localStorage.getItem('isLoggedIn')) {
            return (
                <NavBtn>
                    <NavBtnLink to="/" onClick={logout}>
                        Logout
                    </NavBtnLink>
                </NavBtn>
            )
        }
        return (

            <NavBtn>
                <NavBtnLink to="/login">
                    SignIn
                </NavBtnLink>
            </NavBtn>
        )
    }

    return (
        <div>
            <Nav>
                <a href="/">
                    <h1
                        style={
                            {
                                font: '2em Impact, HelveticaNeue-CondensedBold, sans-serif',
                                color: '#000',
                                textShadow: '0 0 0.15em #fff',
                                textDecoration: 'none',
                                display: 'inline-block',
                                verticalAlign: 'bottom',
                                padding: '0.10em 0.25em',
                                borderRadius: '0.15em',
                                background: 'radial-gradient(#ffffb8, #ce981d)',
                            }
                        }>MovieDB</h1>
                </a>
                <Bars />
                <NavMenu>
                    <input type="text" name="query" onChange={handler} />
                    <Link to={query}>
                        Search
                    </Link>
                    {
                        (window.localStorage.getItem("username") == "admin") ?
                            <>
                                <NavLink to="/addmovie" activeStyle>
                                    AddMovie
                                </NavLink>
                                <NavLink to="/addcast" activeStyle>
                                    AddCast
                                </NavLink>
                            </>
                            :
                            <>
                                <NavLink to="/catagory/Drama" activeStyle>
                                    Drama
                                </NavLink>
                                <NavLink to="/catagory/Action" activeStyle>
                                    Action
                                </NavLink>
                                <NavLink to="/catagory/Thriller" activeStyle>
                                    Thriller
                                </NavLink>
                                <NavLink to="/catagory/Romantic" activeStyle>
                                    Romantic
                                </NavLink>
                            </>
                    }

                    <Link to="/about" activeStyle>
                        About
                    </Link>
                    {
                        ConditionalLinks()
                    }

                </NavMenu>
            </Nav>
        </div>
    );
}




export default NavBar;