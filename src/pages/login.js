import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import  { Navigate } from 'react-router-dom';


function Login() {

    const [user, setUser] = useState({
        username: "",
        password: "",
    })

    const [isLoggedIn, setLogin] = useState(false);

    const handler = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
        console.log(user);
    }
    const try_login = async () => {
        if(user.username && user.password){
            const url = 'http://localhost:9000/user/login';
            var status;
            try{
                await axios.post(url, user).then(res=>status = res.data);
                if(status=="Login Successful!"){
                    setLogin(true);
                    window.localStorage.setItem('isLoggedIn', true);
                    window.localStorage.setItem('username', user.username);
                    swal('Great!','Login Successful!!!','success');
                }
                else{
                    swal('Opps', 'Invalid Credentials!!!', 'warning');
                }
            }
            catch(error){
                swal(error.message);
            }
            console.log('here');
        }
        else{
            swal('Opps!', 'Please enter all data!', 'warning');          
        }  
    }

    return (
        <>
        {
            (isLoggedIn) ?
            <Navigate to="../" />:<></>
        }
        <br/><br/><br/>
            <div className="card-body" style={{marginTop:"4rem"}}>
            <h3>Sign in</h3>
            <label for="username">Your Username</label><br/>
            <input type="text" id="username" name="username" value={user.username} placeholder="Enter Your Username" onChange={handler}/><br/>
            <label for="pwd">Password</label><br/>
            <input type="password"  id="pwd" name="password"  placeholder="Enter Your Password" value={user.password} onChange={handler} /><br/>
            <button className="button" value={"Login"} onClick={try_login}>Sign in</button>
            <br/><br/>
            <p>New to imdb?<a href="/signup"> Sign up</a></p>
            {user.name}
            </div>
         
        </>
    );
}
export default Login;