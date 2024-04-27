import React from 'react'
import About from './section/About'
import Context from './section/Context'
import Footer from './section/Footer'
import Header from './section/Header'
import Hero from './section/Hero'
import Testimium from './section/Testimium'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Testimium/>
      <Context/>
      <Footer/>
    </div>
  )
}

export default App
