import React from 'react'
import '../styles/Digits.css';


const Digits = (props) => {
  return (
    <div>
      <div className='digits'>
          {props.digitSymbols.map(digit=>{
              return(<button onClick={() => props.updateCalc(`${digit}`)}>{digit}</button>)
            })}
        </div>
        <div className='bottomRow'>
          <button  onClick={() => props.updateCalc("0")}>0</button>
          <button onClick={props.calculate}>=</button>
          <button onClick={props.clear}>CLR</button>
        </div>
    </div>
  )
}

export default Digits
