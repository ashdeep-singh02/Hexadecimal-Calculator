import React from 'react'
import '../styles/Display.css';


const Display = (props) => {
  return (
    <div className='display'>
      {props.calc || 0}
    </div>
  )
}

export default Display
