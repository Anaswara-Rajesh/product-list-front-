import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Register() {

    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        phonenumber:"",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email,phonenumber, password, reEnterPassword } = user
        if (name && email && phonenumber && password && (password === reEnterPassword)) {
            // alert("posted")
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    alert(res.data.message)
                    history.push("/login")
                })
        }
        else {
            alert("invalid input")
        }
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Enter your Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Enter your email" onChange={handleChange}></input>
            <input type="number" name="phonenumber" value={user.phonenumber} placeholder="Enter your phonenumber" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input>
            <input type="text" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter your password" onChange={handleChange}></input>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push('/login')}>Login</div>
        </div>
    )
}

export default Register;