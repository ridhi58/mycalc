import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'

export default function History(props) {

    const [showHis, setShowHis] = useState(false)
    const [history, setHistory] = useState([])

    const isLoggedIn = useSelector(state => state.isLogged)
    useEffect(() => {


        if (!isLoggedIn)
            setShowHis(false)
        else {
            setShowHis(true)
            console.log("history", props.his)
            setHistory(props.his)
        }
    })

    return (
        <div className="settings">
            <p style={{ textAlign: "center", fontSize: "25px" }}>History</p>
            {showHis ? <div style={{ height: "250px", overflowY: "scroll" }}>

                {history.map((h) => {
                    return (
                        <p style={{ marginLeft: "0.4rem", borderBottom: "1px solid white" }}>{h}</p>
                    )
                })}
            </div> : <p>Login to see history. <a href="/login">Login</a></p>}




        </div>
    )
}