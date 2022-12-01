import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "../css/signup.css";
import { Link, Navigate } from "react-router-dom";

function Signup() {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        re_password: "",
        dob: "",
    })
    const [ResponseStatus, setResponseStatus] = useState();
    const [signedUp, setSignup] = useState(false);

    const handler = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
        console.log(user);
    }
    const try_login = async () => {
        if(user.username && user.password === user.re_password && user.password && user.email){
            
                const url = 'https://moviebackend.onrender.com/user/signup';
                const {username, email, dob, password} = user
                await axios.post(url, user).then(res=>setResponseStatus(res.data));
                swal('Great!', 'Account Created Successfully!', 'success');
                setSignup(true);
          
        }
        else if(user.re_password != user.password){
            swal('Opps!', 'Both passwords are not matching!', 'warning');
        }
        else{
            swal('Opps!', 'Please enter all data!', 'warning');          
        }  
    }

    return (
        <>
        {
            signedUp ? <Navigate to="../login" />:<></>
        }
        <br/><br/><br/>
            <div className="card-body">
            <h3 className="signup">Create Account</h3>
            <label for="username">Your Name</label><br/>
            <input type="text" id="username" name="username"  placeholder="First and Last Name" onChange={handler}/><br/>
            <label for="email">Email</label><br/>
            <input type="text" id="email" name="email"  placeholder="Your Email" onChange={handler}/>
            <label for="pwd">Password</label><br/>
            <input type="password" id="password" name="password"  placeholder="Your Password" onChange={handler} /><br/>
            <label for="rpwd">Re-Enter Password</label><br/>
            <input type="password" id="re_password" name="re_password"  placeholder="Re-enter Your Password" onChange={handler}/><br/>
            <button className="button" value={"Create Your Account"} onClick={try_login}>Create Your Account</button>
            <br/><br/>
            <p>Already have account?<Link to="/login"> Sign in</Link></p>
            </div>
         
        </>
    );
}
export default Signup;