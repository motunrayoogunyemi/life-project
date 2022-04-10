import React from 'react'
import { Navbar } from "../../components"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import "./herocontainer.css"

const Herocontainer = () => {
  return (
    <div className='life__herocontainer'>
      <Navbar />
      <div className='life__herocontainer-inner'>
        <h1>EXPERIENCE LIFE</h1>
        <div className='big-circle'>
          <PlayCircleIcon sx={{ fontSize: 40, color:'#F9175B' }} />
          {/* <div className='small-circle'></div> */}
        </div>
    </div>
    </div>
  )
}

export default Herocontainer