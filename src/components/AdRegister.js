import React, { useState } from 'react';
import './AdRegister.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Register() {

    const history = useHistory()

    const [admin, setAdmin] = useState({
       
        email: "",
       
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setAdmin({
            ...admin,
            [name]: value
        })
    }

    const ad_register = () => {
        const { email,password, reEnterPassword } = admin
        if (email &&  password && (password === reEnterPassword)) {
            // alert("posted")
            axios.post("http://localhost:9002/ad_register", admin)
                .then(res => {
                    alert(res.data.message)
                    history.push("/ad_login")
                })
        }
        else {
            alert("invalid input")
        }
    }

    return (
        <div className="register">
            <h1>Register</h1>
           
            <input type="text" name="email" value={admin.email} placeholder="Enter your email" onChange={handleChange}></input>
            
            <input type="password" name="password" value={admin.password} placeholder="Enter your password" onChange={handleChange}></input>
            <input type="text" name="reEnterPassword" value={admin.reEnterPassword} placeholder="Re-enter your password" onChange={handleChange}></input>
            <div className="button" onClick={ad_register}>Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push('/ad_login')}>Login</div>
        </div>
    )
}

export default Register;