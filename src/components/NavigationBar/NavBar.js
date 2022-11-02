// import { useState } from "react";
// import { Navigate, redirect, useLinkClickHandler } from "react-router-dom"
// import Select from 'react-select';



// function NavBar() {

//     const [searchItem, setSearchItem] = useState();

//     const searchOptions = [
//         {
//             value:'Movie', label:'Movies'
//         },
//         {
//             value:'Actor', label:'Actors'
//         },
//     ]

//     function ShowTags() {
//         return (
//             <div>
//                 <a href="/login">
//                     <button type="button" className="btn btn-primary mx-auto">Login</button>
//                 </a>
//                 <a href="/signup">
//                     <button type="button" className="btn btn-primary ml-2">Signup</button>
//                 </a>
//             </div>
//         )
//     }

//     function ShowAdminTags() {
//         return (
//             <div>
//                 <a href="/addmovie">
//                     <button type="button" className="btn btn-primary ml-2">Add Movie</button>
//                 </a>
//                 <a href="/addcast">
//                     <button type="button" className="btn btn-primary ml-2">Add Cast</button>
//                 </a>
//             </div>
//         )
//     }

//     function ShowLogout() {
//         function logout() {
//             window.localStorage.removeItem('isLoggedIn')
//             window.localStorage.removeItem('username')
//             window.location.reload();
//         }

//         return (
//             <button type="button" className="btn btn-primary ml-2" onClick={logout}>Logout</button>
//         )
//     }

//     function handler(event){
//         setSearchItem(event.target.value);
//         console.log(searchItem);
//     }

//     function Search(event){
//         event.preventDefault();

//     }

//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg navbar-light bg-dark">
//                 <div className="tags">
//                     {
//                         window.localStorage.getItem('isLoggedIn') ? ShowLogout() : ShowTags()
//                     }
//                     {
//                         (window.localStorage.getItem('username') == 'admin') ? ShowAdminTags() : console.log('Do nothing')
//                     }
//                     {/* <button type="button" className="btn btn-primary mx-auto">Upcoming</button> */}
//                 </div>

//                 <div className="container">
//                     <div className="row mx-auto">

//                         <form className="d-flex" action="/query" method="get">
//                             <div className="col-md-2 col-lg-5 col-xl-5">
//                                 <Select
//                                     options={searchOptions}
//                                 />
//                             </div>
//                             <input id="search" className="form-control mr-2 col-md-6 col-lg-9 col-xl-12" value={searchItem} onChange={handler} type="search" placeholder="Search" aria-label="Search" />
//                             <button className="btn btn-outline-success" onClick={Search}>Search</button>
//                         </form>
//                     </div>
//                 </div>
//                 <div className="tags">
//                     {/* <LoginLogout loggedIn={false}/> */}
//                 </div>

//             </nav>
//         </div>
//     )
// }

// export default NavBar;

















// // import React from 'react';
// // import {
// // Nav,
// // NavLink,
// // Bars,
// // NavMenu,
// // NavBtn,
// // NavBtnLink,
// // } from './components/NavbarElements';

// // const Navbar = () => {
// // return (
// // 	<>
// // 	<Nav>
// // 		<Bars />

// // 		<NavMenu>
// // 		<NavLink to='/about' activeStyle>
// // 			About
// // 		</NavLink>
// // 		<NavLink to='/events' activeStyle>
// // 			Events
// // 		</NavLink>
// // 		<NavLink to='/annual' activeStyle>
// // 			Annual Report
// // 		</NavLink>
// // 		<NavLink to='/team' activeStyle>
// // 			Teams
// // 		</NavLink>
// // 		<NavLink to='/blogs' activeStyle>
// // 			Blogs
// // 		</NavLink>
// // 		<NavLink to='/sign-up' activeStyle>
// // 			Sign Up
// // 		</NavLink>
// // 		{/* Second Nav */}
// // 		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
// // 		</NavMenu>
// // 		<NavBtn>
// // 		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
// // 		</NavBtn>
// // 	</Nav>
// // 	</>
// // );
// // };

// // export default Navbar;








// import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useState } from "react";
import { Navigate, redirect, useLinkClickHandler } from "react-router-dom"
import Select from 'react-select';

function NavBar() {

        const [searchItem, setSearchItem] = useState();

    function Search(event) {
        event.preventDefault();
    }

    const searchOptions = [
        {
            value: 'Movie', label: 'Movies'
        },
        {
            value: 'Actor', label: 'Actors'
        },
    ]

    function handler(event) {
        setSearchItem(event.target.value);
        console.log(searchItem);
    }

    function ShowLogout() {
        function logout() {
            window.localStorage.removeItem('isLoggedIn')
            window.localStorage.removeItem('username')
            window.location.reload();
        }

        return (
            <button type="button" className="btn btn-primary ml-2" onClick={logout}>Logout</button>
        )
    }

    return (
        <>
            <Navbar fixed='top' bg="secondary" expand="lg">
                <Container>
                    <Navbar.Brand href="../">IMDB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {
                                window.localStorage.getItem('isLoggedIn') ?
                                    <>
                                        {
                                            ShowLogout()
                                        }
                                        {
                                            (window.localStorage.getItem('username') == 'admin') ?
                                                <>
                                                    <Nav.Link href="./addmovie" placement="bottom">Add Movie</Nav.Link>
                                                    <Nav.Link href="./addcast" placement="bottom">Add Cast</Nav.Link>
                                                </>
                                                :
                                                <>
                                                </>
                                        }
                                    </>
                                    :
                                    <>
                                        <Nav.Link href="./login">Login</Nav.Link>
                                        <Nav.Link href="./signup">Signup</Nav.Link>
                                    </>
                            }
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated Item</NavDropdown.Item>
                            </NavDropdown> */}
                            <form className="d-flex" action="/query" method="get">
                                <div className="col-md-2 col-lg-5 col-xl-5">
                                    <Select
                                        options={searchOptions}
                                    />
                                </div>
                                <input id="search" className="form-control mr-2 col-md-6 col-lg-9 col-xl-12" value={searchItem} onChange={handler} type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" onClick={Search}>Search</button>
                            </form>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <header className='bg-primary mt-5 p-2'>Header Component</header>
        </>
    );
}
export default NavBar;  