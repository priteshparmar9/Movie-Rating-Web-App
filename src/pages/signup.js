import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

function Signup() {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        re_password: "",
        dob: "",
    })

    const handler = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
        console.log(user);
    }

    var status = (state1) => {
        if(state1=="success"){
            swal('Great!','Login Successful!!!','success');
        }
        else{
            swal('Opps', 'Failed!!!', 'warning');
        }
    }
    const try_login = () => {
        if(user.username && user.dob && user.password === user.re_password && user.password && user.email){
            
            const user_check_url = `http://localhost:9000/user/${user.username.toString()}`;
            var status;
            axios.get(user_check_url).then(res=>status = res.data);
            console.log(status);
            if(status=='fail'||!status){
                const url = 'http://localhost:9000/user/signup';
                const {username, email, dob, password} = user
                axios.post(url, user).then(res=>status(res.data));
            }else{
                swal('Opps!', 'Username already exists!!', 'warning');
            }
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
        <div className="login-page">
            <h1>Login Page</h1>
            < input type="text" name="username" value={user.username} placeholder="Your Name" onChange={handler} /><br />
            < input type="text" placeholder="Your Email" name="email" value={user.email} onChange={handler} /><br />
            < input type="date" placeholder="DOB" name="dob" value={user.dob} onChange={handler} /><br />

            < input type="password" placeholder="Your Password" name="password" value={user.password} onChange={handler} /><br />
            < input type="password" placeholder="Re-enter Password" name="re_password" value={user.re_password} onChange={handler} /><br />
            <button className="button" value='Register' onClick={try_login}>Register</button>
            {user.name}
        </div>
        </>
    );
}
export default Signup;