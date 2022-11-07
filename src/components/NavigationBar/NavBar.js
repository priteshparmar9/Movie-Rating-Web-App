import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

function NavBar() {

    function logout() {
        window.localStorage.setItem('isLoggedIn', false);
        window.localStorage.removeItem('username')
        console.log(window.localStorage.getItem('isLoggedIn'));
        // window.location.reload();
    }


    return (
        <div>
            <Nav>
                <NavLink to="/">
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
                        }>IMDb</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/addmovie" activeStyle>
                        AddMovie
                    </NavLink>
                    <NavLink to="/addcast" activeStyle>
                        AddCast
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    {
                        (window.localStorage.getItem('isLoggedIn') == true) ?
                            <NavBtn>
                                <NavBtnLink to="/login">
                                    SignIn
                                </NavBtnLink>
                            </NavBtn>
                            :
                            <NavBtn>
                                <NavBtnLink to="/" onClick={logout}>
                                    Logout
                                </NavBtnLink>
                            </NavBtn>
                    }
                </NavMenu>
            </Nav>
        </div>
    );
}




export default NavBar;