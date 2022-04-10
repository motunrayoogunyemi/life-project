import React from 'react'
import { Daynight, Attractions, Footer } from "../components"
import { Activitiesbody, Count, Subscribe, Eventshero } from "../containers"
import { BsFillSunFill } from "react-icons/bs";
import NightlightRoundRoundedIcon from '@mui/icons-material/NightlightRoundRounded';
import "./pages.css"

const Eventsday = () => {
  return (
    <div>
        <Eventshero />
        <Attractions />
        <div className='dayornight'>
          <Daynight text1='DAYTIME SERIES' text2='NIGHT-TIME SERIES' icon1={<BsFillSunFill size={23} />} icon2={<NightlightRoundRoundedIcon sx={{ fontSize: 23, color: '#b8b8b8' }} />} />
        </div>
        <div className='day_activities'>
          <Activitiesbody />
        </div>
        <Count />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Eventsday