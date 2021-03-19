import React, { useState } from 'react';
import './Display.css'

export default function Display() {

    const [result, setResult] = useState("")
    const [on, setOn] = useState(true)

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
    return (
        <div>
            <div>
                {
                    on ? <span>{result}</span> : "off"
                }
            </div>
            <div className="displayKeys">
                <div >
                    <button name='7' onClick={handleButton}>7</button>
                    <button name='8' onClick={handleButton}>8</button>
                    <button name='9' onClick={handleButton}>9</button>
                    <button name='/' onClick={handleButton}>/</button>
                </div>
                <div>
                    <button name='4' onClick={handleButton}>4</button>
                    <button name='5' onClick={handleButton}>5</button>
                    <button name='6' onClick={handleButton}>6</button>
                    <button name='*' onClick={handleButton}>*</button>
                </div>
                <div>
                    <button name='1' onClick={handleButton}>1</button>
                    <button name='2' onClick={handleButton}>2</button>
                    <button name='3' onClick={handleButton}>3</button>
                    <button name='-' onClick={handleButton}>-</button>
                </div>
                <div>
                    <button name='0' onClick={handleButton}>0</button>
                    <button name='.' onClick={handleDecimal}>.</button>
                    <button name='=' onClick={handleResult}>=</button>
                    <button name='+' onClick={handleButton}>+</button>
                </div>
                <div>
                    <button onClick={handleOnOff}>AC</button>
                    <button onClick={() => { setResult("") }}>C</button>
                </div>
            </div>
        </div>
    );

}
