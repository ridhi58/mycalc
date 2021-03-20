import React, { useEffect, useState, useRef } from 'react';


export default function History(props) {

    const [showHis, setShowHis] = useState(false)
    useEffect(() => {
        if (localStorage.getItem("user") == null)
            setShowHis(false)
        else {
            setShowHis(true)
        }
    })
    return (
        <div className="settings">
            <p style={{ textAlign: "center", fontSize: "25px" }}>History</p>
            {showHis ? <div>show history</div> : <p>Login to see history. <a href="/login">Login</a></p>}

        </div>
    )
}