import React, { useState } from 'react'
import './App.css'

const App = () => {
  const colors = [
    "blue",
    "red",
    "orange",
    "yellow",
    "indigo",
    "blueviolet",
    "royalblue",
    "green",
    "yellowgreen",
    "brown",
    "beige  ",
  ]
  const [color, setColor] = useState()
  const [date, setDate] = useState(new Date().getTime())
  const [history, setHitory] = useState([])
  return (

    <div className="main">
      <div className="wrap-1">
        {
          history.map((hist) => {
            return <div style={{ background: hist, width: '20px', height: '20px' }}></div>
          })
        }
      </div>
      <div className='big' style={{ background: color }}></div>
      <div className='wrap'>
        {
          colors.map((colorsItem) => {
            return <div style={{ background: colorsItem }} onClick={function () { setColor(colorsItem); const oldHistory = [...history]; oldHistory.push(colorsItem); setHitory(oldHistory); }} />
          })
        }
      </div>
      <button onClick={function () { setColor(undefined); setHitory([]) }}>Reset</button>
    </div>

  )
}

export default App