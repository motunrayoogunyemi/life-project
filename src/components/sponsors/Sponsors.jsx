import React from 'react'
import { Link } from 'react-router-dom'
import CircleIcon from '@mui/icons-material/Circle';
import "./sponsors.css"

const Sponsors = (props) => {
  return (
    <div className='er__sponsors'>
        <h4>{props.title}</h4>
        <div className='er__sponsors-list'>
            <p><CircleIcon sx={{ fontSize: 12 }} /> {props.list1}</p>
            <p><CircleIcon sx={{ fontSize: 12 }} /> {props.list2}</p>
            <p><CircleIcon sx={{ fontSize: 12 }} /> {props.list3}</p>
            <p><CircleIcon sx={{ fontSize: 12 }} /> {props.list4}</p>
            <p><CircleIcon sx={{ fontSize: 12 }} /> {props.list5}</p>
        </div>
        <Link className='linkk' to='/'>Partner</Link>
    </div>
  )
}

export default Sponsors