import React, { useEffect, useState, useRef } from 'react';
import './Display.css'

export default function Display() {

    const [result, setResult] = useState("")
    const [on, setOn] = useState(true)
    const [limit, setLimit] = useState(false)
    const ref = useRef();

    const handleButton = (e) => {
        setResult(result + e.target.name)
    }

    const handleResult = () => {


        setResult(eval(result))



    }

    const handleOnOff = () => {
        setResult("")
        setOn(!on)
    }
    const handleDecimal = (e) => {
        if (result.indexOf('.') != -1) {
            setResult(result)
        }
        else {
            setResult(result + e.target.name)
        }
    }

    const handleZero = (e) => {

        if (result != "")
            setResult(result + e.target.name)

    }

    const handleBack = () => {
        setResult(result.substr(0, result.length - 1))
    }

    useEffect(() => {

        if (result.length == 13) {
            setLimit(true)
        }

        if (limit)
            setResult("limit reached")
    })

    return (
        <div className="display">
            <div className="displayRes" >
                {
                    on ? <span>{result}</span> : <span style={{ color: "gray" }}>OFF</span>
                }
            </div>
            <div className="displayKeys">
                <div>
                    <button style={{ width: "90px" }} onClick={handleOnOff}>AC</button>
                    <button onClick={() => { setResult(""); setLimit(false) }}>C</button>
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
                    <button name='.' onClick={handleDecimal}>.</button>
                    <button style={{ backgroundColor: "orange" }} name='=' onClick={handleResult}>=</button>
                    <button style={{ backgroundColor: "orange" }} name='+' onClick={handleButton}>+</button>
                </div>

            </div>
        </div>
    );

}
