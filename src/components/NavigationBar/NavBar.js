


function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="tags">
                    <a href="/movie/popular">
                        <button type="button" className="btn btn-primary mx-auto">Popular</button>
                    </a>
                    <a href="/movie/toprated">
                        <button type="button" className="btn btn-primary ml-2">Top Rated</button>
                    </a>
                    {/* <button type="button" className="btn btn-primary mx-auto">Upcoming</button> */}
                </div>

                <div className="container">
                    <div className="row mx-auto">

                        <form className="d-flex" action="/query" method="get">
                            <input id="search" className="form-control mr-2 col-md-6 col-lg-9 col-xl-12" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <div className="tags">                  
                    {/* <LoginLogout loggedIn={false}/> */}
                </div>

            </nav>
        </div>
    )
}

export default NavBar;

















// import React from 'react';
// import {
// Nav,
// NavLink,
// Bars,
// NavMenu,
// NavBtn,
// NavBtnLink,
// } from './components/NavbarElements';

// const Navbar = () => {
// return (
// 	<>
// 	<Nav>
// 		<Bars />

// 		<NavMenu>
// 		<NavLink to='/about' activeStyle>
// 			About
// 		</NavLink>
// 		<NavLink to='/events' activeStyle>
// 			Events
// 		</NavLink>
// 		<NavLink to='/annual' activeStyle>
// 			Annual Report
// 		</NavLink>
// 		<NavLink to='/team' activeStyle>
// 			Teams
// 		</NavLink>
// 		<NavLink to='/blogs' activeStyle>
// 			Blogs
// 		</NavLink>
// 		<NavLink to='/sign-up' activeStyle>
// 			Sign Up
// 		</NavLink>
// 		{/* Second Nav */}
// 		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
// 		</NavMenu>
// 		<NavBtn>
// 		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
// 		</NavBtn>
// 	</Nav>
// 	</>
// );
// };

// export default Navbar;








