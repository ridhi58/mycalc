import React, { useEffect, useState } from "react"
import './header.css'
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { logoutRedux } from '../redux/LoginRedux/LoginAction'
import { useSelector, useDispatch } from 'react-redux'
export default function Header() {
    const reduxUser = useSelector(state => state.isLogged)

    const history = useHistory();
    const url = "http://localhost:5000/logout"
    const [log, setLog] = useState(true)
    const dispatch = useDispatch()
    const reduxName = useSelector(state => state.user)
    useEffect(() => {
        console.log("redux user", reduxUser)
        if (reduxUser)
            setLog(false)
        else {
            setLog(true)
        }
        // if (localStorage.getItem("user") != null)
        //     setLog(false)

    })

    const logout = () => {
        console.log("logout called")

        axios.post(url, { token: "" }, { withCredentials: true }).then(() => {
            dispatch(logoutRedux())

            // localStorage.removeItem("user")
            alert("logout success")
            setLog(true)

        }).catch((e) => {
            alert("logout failed")
            console.log("error", e)
        })
    }
    return (
        <div className="headerCont">
            <div className="header">
                <p className="headerH"><a style={{ textDecoration: "none", color: "white" }} href="/"> Calculator</a> </p>
                {log ? <a href="/login" className="headerB">Login<i style={{ fontSize: "25px", marginLeft: "0.7rem" }} class="fas fa-user"></i></a> :
                    <button onClick={logout} className="headerB">Logout({reduxName})<i style={{ fontSize: "25px", marginLeft: "0.7rem" }} class="fas fa-user"></i></button>}

            </div>
        </div>
    )
}