import React, {useState} from "react"
function Calculator(){

const [number1, setNumber1] = useState("")
const [number2, setNumber2] = useState("")
const [current, setCurrent] = useState("")
const [result, setResult] = useState(0)

const clickNumber = (value) => {
    if(current === ""){
        setNumber1(number1 + value) 
    } else {
        setNumber2(number2 + value)
    }

}

const clickOperation = (value) => {
    setCurrent(value)
}

const deleteNumber = () => {
    if(current === ""){
        setNumber1("")
    }else{
        setNumber2("")
    }
    
    
}

const getResult = () => {
    switch (current) {
        case "+":
            setResult(Number(number1) + Number(number2))
            setNumber1("")
            setCurrent("");
            break;
        case "-":
            setResult(Number(number1) - Number(number2))
            setNumber1("")
            setCurrent("");
            break;
        case "/":
            setResult(Number(number1) / Number(number2))
            setNumber1("")
            setCurrent("");
        break;
        case "*":
            setResult(Number(number1) * Number(number2))
            setNumber1("")
            setCurrent("");
        break;
        default
    :}    
}

const clear = () => {
    setNumber1("")
    setNumber2("")
    setCurrent("")
    setResult("")
}


    return(
        <div className="calculator-grid">
            <div className="output">
                <div className="pre">{current ? number1 + current : ""}</div>
                <div className="current">{result ? result : (!current ? number1 : number2) }</div>
            </div>
            <button onClick={clear} className="span2">Ac</button>
            <button onClick={deleteNumber}>Del</button>
            <button onClick={() => {clickOperation("/")}}>/</button>
            <button onClick={() => {clickNumber(7)}}>7</button>
            <button onClick={() => {clickNumber(8)}}>8</button>
            <button onClick={() => {clickNumber(9)}}>9</button>
            <button onClick={() => {clickOperation("*")}}>*</button>
            <button onClick={() => {clickNumber(4)}}>4</button>
            <button onClick={() => {clickNumber(5)}}>5</button>
            <button onClick={() => {clickNumber(6)}}>6</button>
            <button onClick={() => {clickOperation("+")}}>+</button>
            <button onClick={() => {clickNumber(1)}}>1</button>
            <button onClick={() => {clickNumber(2)}}>2</button>
            <button onClick={() => {clickNumber(3)}}>3</button>
            <button onClick={() => {clickOperation("-")}}>-</button>
            <button onClick={() => {clickOperation(".")}}>.</button>
            <button onClick={() => {clickNumber(0)}}>0</button>
            <button onClick={getResult} className="span2">=</button>
        </div>
    )
}


export default Calculator