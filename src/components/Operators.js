import React from 'react'
import '../styles/Operators.css';


const Operators = (props) => {
  return (
    <div className='operators'>
        {props.operatorSymbols.map(symbol=>{
            return(<button onClick={() => props.updateCalc(`${symbol}`)}>{symbol}</button>)
        })}
        <button onClick={props.deleteLast}>DEL</button>
    </div>
  )
}

export default Operators
