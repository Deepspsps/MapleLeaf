import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Title from './components/Title/Title';
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <About/>
    <Title subTitle='Our Cuisine' title='Bound by distance, connected through dishes.' />
    <Services/>
    <Title subTitle='' title='Make your Reservation Now!' />
    <Contact/>
    </>
  )
}

export default App
