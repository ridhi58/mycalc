import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { loginRedux } from '../redux/LoginRedux/LoginAction'
import './login.css'
// import Cookies from 'js-cookie';
export default function Login(props) {

    const url = "http://localhost:5000/"
    const [register, setReg] = useState(false);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const isLoggedIn = useSelector(state => state.isLogged)
    const dispatch = useDispatch()

    const history = useHistory();

    const handleChange = () => {
        setReg(true)
    }
    const handleC = () => {
        setReg(false)
    }

    const Login = () => {



        let obj = {

            email: email,
            password: pass
        }
        axios.post(url + 'login', obj, { withCredentials: true }).then((res) => {
            alert("success")
            dispatch(loginRedux())

            // Cookies.set("myCookie", res.data.token)
            localStorage.setItem("user", email)
            props.history.push('/')


        }).catch((e) => {
            console.log(e)
            alert("The emailid id not registerd")
        })


    }

    const Register = () => {
        console.log("hit register")
        let obj = {
            name: name,
            email: email,
            password: pass
        }
        axios.post(url + 'user', obj, { withCredentials: true }).then((res) => {

            alert("success")
            setReg(false)

        }).catch((e) => {
            console.log(e)
            alert("Already Registered")
        })

    }

    return (
        <div className="login">

            <div className="login1">
                {!register ? <div>
                    <p style={{ textAlign: "center", fontSize: "25px" }}>Login</p>
                    <input placeholder="Email" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }}></input><br />
                    <input placeholder="Password" type="text" value={pass} onChange={(e) => { setPass(e.target.value) }}></input><br />
                    <button onClick={Login} className="loginB" >Login</button>
                    <p style={{ color: "rgba(0,0,0,0.8)" }}>Not a registered user? <button style={{ textDecoration: "underline" }} onClick={handleChange} >Register here</button></p>
                </div>
                    : <div>
                        <p style={{ textAlign: "center", fontSize: "25px" }}>Register</p>
                        <input placeholder="Name" type="text" value={name} onChange={(e) => { setName(e.target.value) }} /><br />
                        <input placeholder="Email" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }}></input><br />
                        <input placeholder="Password" type="text" value={pass} onChange={(e) => { setPass(e.target.value) }}></input><br />
                        <button onClick={Register} className="loginB">Register</button>
                        <p style={{ color: "rgba(0,0,0,0.8)" }}>Already a registered user? <button style={{ textDecoration: "underline" }} onClick={handleC}>Login here</button></p>
                    </div>
                }
            </div>

        </div>
    )
}