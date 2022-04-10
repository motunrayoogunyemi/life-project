import React from 'react'
import { Timer } from "../../components"
import "./countdown.css"

const countdown = () => {
  return (
    <div className='life__countdown'>
        <div className='life__countdown-content'>
            <p>LIFE IS MEANT TO BE ENJOYED!</p>
            <h3>COUNTDOWN TO LIFE!</h3>
        </div>
        <div className='life__countdown-count'>
            <Timer number='1' time='Months' />
            <Timer number='2' time='Days'  />
            <Timer number='3' time='Hours' />
            <Timer number='4' time='Minutes' />
            <Timer number='5' time='Seconds' />
        </div>
    </div>
  )
}

export default countdown