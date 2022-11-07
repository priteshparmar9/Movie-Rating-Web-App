import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "../css/signup.css";
import userEvent from "@testing-library/user-event";

function Signup() {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        re_password: "",
        dob: "",
    })
    const [ResponseStatus, setResponseStatus] = useState();

    const handler = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
        console.log(user);
    }
    const try_login = async () => {
        if(user.username && user.dob && user.password === user.re_password && user.password && user.email){
            
            // const user_check_url = `http://localhost:9000/user/${user.username.toString()}`;
            // console.log(user_check_url);
            // await axios.get(user_check_url).then(res=>setResponseStatus(res.data));
            // console.log(ResponseStatus);
            // if(ResponseStatus=='fail'||!ResponseStatus){
                const url = 'http://localhost:9000/user/signup';
                const {username, email, dob, password} = user
                await axios.post(url, user).then(res=>setResponseStatus(res.data));
                swal('Great!', ResponseStatus, 'success');
                // if(ResponseStatus=="success"){
                //     swal('Great!','Signup Successful!!!','success');
                // }
                // else{
                //     swal('Opps', 'Failed!!!', 'warning');
                // }
            // }else{
            //     swal('Opps!', 'Username already exists!!', 'warning');
            // }
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
        <br/><br/><br/>
            <div className="card-body">
            <h3 className="signup">Create Account</h3>
            <label for="username">Your Name</label><br/>
            <input type="text" id="username" name="username"  placeholder="First and Last Name" onChange={handler}/><br/>
            <label for="email">Email</label><br/>
            <input type="text" id="email" name="email"  placeholder="Your Email" onChange={handler}/>
            <label for="pwd">Password</label><br/>
            <input type="password" id="pwd" name="password"  placeholder="Your Password" onChange={handler} /><br/>
            <label for="rpwd">Re-Enter Password</label><br/>
            <input type="password" id="rpwd" name="repassword"  placeholder="Re-enter Your Password" onChange={handler}/><br/>
            <button className="button" value={"Create Your Account"} onClick={try_login}>Create Your Account</button>
            <br/><br/>
            <p>Already have account?<a href="/login"> Sign in</a></p>
            </div>
         
        </>
    );
}
export default Signup;