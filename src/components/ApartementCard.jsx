import React from 'react'
import './ApartementCard.scss'
import {  NavLink } from 'react-router-dom'

function Apartement() {
  return (
    <div className='apartement'>
       <NavLink to="/flat">
         <div className='apartement_subtitle'>Titre de la location</div>
         </NavLink>
    </div>
   
  )
}

export default Apartement