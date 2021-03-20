import React, { useEffect, useState, useRef } from 'react';


export default function Settings(props) {

    const [theme, setTheme] = useState("black")
    return (
        <div className="settings">
            <p>Settings</p>
            <p>Theme</p>
            <input type="radio" checked={theme === "white"} onChange={() => { setTheme("white"); }} ></input><span>Light theme</span>
            <input type="radio" checked={theme === "black"} onChange={() => { setTheme("black") }} ></input><span>Dark theme</span>
        </div>
    )
}