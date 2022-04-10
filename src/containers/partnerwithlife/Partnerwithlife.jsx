import React from 'react'
import { Sponsors } from "../../components"
import "./partnerwithlife.css"

const Partnerwithlife = () => {
  return (
    <div className='er__partnerwithlife'>
        <h1>PARTNER WITH LIFE</h1>
        <div className='sponsor-vendor'>
            <Sponsors title='SPONSORS' list1='Vulputate nunc urna adipiscing quam pharetra sed.' list2='Vulputate nunc urna adipiscing quam pharetra sed.'
                list3='Vulputate nunc urna adipiscing quam pharetra sed.' list4='Vulputate nunc urna adipiscing quam pharetra sed.' list5='Vulputate nunc urna adipiscing quam pharetra sed.' />
            <Sponsors title='VENDORS' list1='Vulputate nunc urna adipiscing quam pharetra sed.' list2='Vulputate nunc urna adipiscing quam pharetra sed.'
                list3='Vulputate nunc urna adipiscing quam pharetra sed.' list4='Vulputate nunc urna adipiscing quam pharetra sed.' list5='Vulputate nunc urna adipiscing quam pharetra sed.' />
        </div>
    </div>
  )
}

export default Partnerwithlife