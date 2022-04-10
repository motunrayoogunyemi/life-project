import React from 'react'
import "./subscribe.css"

const Subscribe = () => {
  return (
    <div className='er__subscribe'>
        <h5>Subscribe to get updates on our lineups, early-bird tickets and more</h5>
        <div>
            <form className='myform'>
                <input type='text' placeholder='Enter your email address' />
                <button className='subbtn'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Subscribe