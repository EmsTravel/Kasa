import React from 'react'
import './ApartementGrid.scss'
import Apartement from './ApartementCard.jsx';

function ApartementGrid() {
  return (
    <div className='grid'>
      <Apartement/>
      <Apartement/>
      <Apartement/>
      <Apartement/>
      <Apartement/>
      <Apartement/>
    </div>
  )
}

export default ApartementGrid