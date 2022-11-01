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
        if (user.username && user.dob && user.password === user.re_password && user.password && user.email) {


            const url = 'http://localhost:9000/user/signup';
            const { username, email, dob, password } = user
            await axios.post(url, user).then(res => setResponseStatus(res.data));
            swal('Great!', 'Signup successful!', 'success');
        }
        else if (user.re_password != user.password) {
            swal('Opps!', 'Both passwords are not matching!', 'warning');
        }
        else {
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