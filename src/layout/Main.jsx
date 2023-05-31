import React from 'react'
import './Main.scss'


function Main({children}) {
// transmission des composants avec children ou props car composants dans composants
  return (
    <div className='main'>{children}</div>
  )
}

export default Main