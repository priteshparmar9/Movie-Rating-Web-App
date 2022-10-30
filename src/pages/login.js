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
                    swal('Great!','Login Successful!!!','success');
                    setLogin(true);
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
        <div className="login-page">
            <h1>Login Page</h1>
            < input type="text" name="username" value={user.username} placeholder="Your Name" onChange={handler} /><br />
            < input type="password" placeholder="Your Password" name="password" value={user.password} onChange={handler} /><br />
            <button className="button" value='Login' onClick={try_login}>Login</button>
            {user.name}
            {isLoggedIn?<Navigate to='../addMovie'/>:<p></p>}
        </div>
    );
}
export default Login;