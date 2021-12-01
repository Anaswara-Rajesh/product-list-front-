import React from 'react'
import '../AdLogin.css'
import {useState} from 'react'
import axios from "axios"
import { useHistory } from "react-router-dom"

function AdLogin( { setLoginAdmin} ) {
    
    const history = useHistory()

    const [admin, setAdmin] = useState({
        email:"",
        password:""
        
    })

    const handleChange = e => {
        const { name, value } = e.target
        setAdmin({
            ...admin,
            [name]: value
        })

    }
    const ad_login = () => {
        axios.post("http://localhost:9002/ad_login", admin)
        .then(res => {
            alert(res.data.message)
            setLoginAdmin(res.data.admin)
            history.push("/ad_home")
        })
    }
    return (
       
            <div class="login">
                <h1>Admin Login</h1>
               <input type="email" name="email" value={admin.email} onChange={handleChange} placeholder="Email"></input>
               <input type="password" name="password" value={admin.password} onChange={handleChange} placeholder="Password"></input>
               <div className="button" onClick={ad_login}>Login</div>
               <div>or</div>
               <div className="button" onClick={() => history.push("/ad_register")}>Register</div>
            </div>
    )
}

export default AdLogin