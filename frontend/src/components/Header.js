import React, { useEffect, useState } from "react"
import './header.css'
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
export default function Header() {
    const history = useHistory();
    const url = "http://localhost:5000/logout"
    const [log, setLog] = useState(true)


    useEffect(() => {
        console.log(localStorage.getItem("user"))
        if (localStorage.getItem("user") != null)
            setLog(false)

    })

    const logout = () => {
        console.log("logout called")
        axios.post(url, { token: "" }, { withCredentials: true }).then(() => {
            localStorage.removeItem("user")
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
                    <button onClick={logout} className="headerB">Logout<i style={{ fontSize: "25px", marginLeft: "0.7rem" }} class="fas fa-user"></i></button>}

            </div>
        </div>
    )
}