import React, { useEffect, useState, useRef } from 'react';
import History from './History'
import './Display.css'

export default function Display() {

    const [result, setResult] = useState("")
    const [on, setOn] = useState(true)
    const [limit, setLimit] = useState(false)
    const [settings, setSettings] = useState(false)
    const [history, setHistory] = useState(false);
    const [theme, setTheme] = useState("black")
    const [inputColor, setInputC] = useState("black")
    let Color = ['#000', '#ca3e47', '#ff7844']
    const [color, setcolor] = useState(Color)
    const [storeHis, setStore] = useState([])


    const setColor = (i) => {
        Color = color.map((c, j) => {
            if (j == i)
                return document.getElementById(`color${i}`).value
            else
                return c
        })
        setcolor(Color)
    }


    const Settings = () => {
        return (
            <div className="settings">
                <p style={{ textAlign: "center", fontSize: "25px" }}>Settings</p>
                <p>Theme</p>
                <input type="radio" checked={theme === "white"} onChange={() => { setTheme("white"); setInputC("gray") }} ></input><span>Light theme</span>
                <input type="radio" checked={theme === "black"} onChange={() => { setTheme("black"); setInputC("black") }} ></input><span>Dark theme</span>
                <p>
                    <p>Change screen color</p>
                    <input type="color" id={`color${0}`} name="favcolor" value={color[0]} onChange={() => { setColor(0) }} />
                </p>
            </div>
        )
    }
    const handleButton = (e) => {
        setResult(result + e.target.name)
    }

    const handleResult = () => {
        try {


            if (!limit && result != "") {
                if (localStorage.getItem("user") != null) {
                    storeHis.push(result)
                }
                let res = eval(result)
                setResult(res)
            }
        }
        catch (e) {


            alert("invalid operation")
            setResult("")
        }
    }

    const handleOnOff = () => {
        setResult("")
        setOn(!on)
    }

    const handleZero = (e) => {

        if (result != "")
            setResult(result + e.target.name)

    }

    const handleBack = () => {
        try {
            setResult(result.substr(0, result.length - 1))
        }
        catch (e) {
            setResult("")
        }
    }

    const handleSettings = () => {
        setSettings(!settings)
        setHistory(false)
    }
    const handleHistory = () => {
        setHistory(!history)
        setSettings(false)
    }



    useEffect(() => {


        if (result != null && result.length == 13) {
            setLimit(true)
        }

        if (limit)
            setResult("limit reached")
    })

    return (
        <div style={{ backgroundColor: theme }} className="display" >

            <div className="displayRes" style={{ backgroundColor: color[0] }}>
                {
                    on ? <span>{result}</span> : <span style={{ color: "gray" }}>OFF</span>
                }
            </div>
            <div>
                <button onClick={handleSettings}><i style={{ color: "gray", fontSize: "20px" }} class="fas fa-cog"></i></button>
                <button onClick={handleHistory}><i style={{ color: "gray", fontSize: "20px" }} class="fas fa-history"></i></button>
            </div>
            {settings ? <Settings color="black" /> : history ? <History his={storeHis} /> :

                <div className="displayKeys">

                    <div>
                        <button onClick={handleOnOff}>  <i style={{ fontSize: "25px" }} class="fas fa-power-off"></i></button>
                        <button style={{ width: "80px" }} onClick={() => { setResult(""); setLimit(false) }}>AC</button>
                        <button onClick={handleBack}><i class="fas fa-arrow-left"></i></button>
                    </div>
                    <div >
                        <button name='7' onClick={handleButton}>7</button>
                        <button name='8' onClick={handleButton}>8</button>
                        <button name='9' onClick={handleButton}>9</button>
                        <button style={{ backgroundColor: "orange" }} name='/' onClick={handleButton}>/</button>
                    </div>
                    <div className="displayKey">
                        <button name='4' onClick={handleButton}>4</button>
                        <button name='5' onClick={handleButton}>5</button>
                        <button name='6' onClick={handleButton}>6</button>
                        <button style={{ backgroundColor: "orange" }} name='*' onClick={handleButton}>*</button>
                    </div>
                    <div>
                        <button name='1' onClick={handleButton}>1</button>
                        <button name='2' onClick={handleButton}>2</button>
                        <button name='3' onClick={handleButton}>3</button>
                        <button style={{ backgroundColor: "orange" }} name='-' onClick={handleButton}>-</button>
                    </div>
                    <div>
                        <button name='0' onClick={handleZero}>0</button>
                        <button name='.' onClick={handleButton}>.</button>
                        <button style={{ backgroundColor: "orange" }} name='=' onClick={handleResult}>=</button>
                        <button style={{ backgroundColor: "orange" }} name='+' onClick={handleButton}>+</button>
                    </div>

                </div>
            }


        </div>
    );

}
