import React from 'react'
import './login.css'
import {useState} from 'react'
import axios from "axios"
import { useHistory } from "react-router-dom"

function Login( { setLoginUser} ) {
    
    const history = useHistory()

    const [user, setUser] = useState({
        email:"",
        password:"",
        
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }
    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }
    return (
       
            <div class="login">
                <h1>User Login</h1>
               <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email"></input>
               <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password"></input>
               <div className="button" onClick={login}>Login</div>
               <div>or</div>
               <div className="button" onClick={() => history.push("/register")}>Register</div>
               {/* <div>or</div> */}
               <a href="/ad_login">IF U ARE ADMIN GO TO ADMIN LOGIN</a>
            </div>
    )
}

export default Login