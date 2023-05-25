import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ApartementGrid from './components/ApartementGrid'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div>
        <Navbar/> 
        <Main>
        <Banner/>
        <ApartementGrid/>
        </Main>
        <Footer/>
     
    </div>
  )
}

export default App