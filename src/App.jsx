import React from 'react'
import bgImages from "./assets/restaran.jpg"
import "./App.css"
import Header from './Components/Header/Header'
import Hero from "./Components/Hero/Hero"
import About from './Components/About/About'
const App = () => {
  return (
   <div
      className="app"
      style={{ backgroundImage: `url(${bgImages})` }}
    >
     <Header/>
     <Hero/>
     <About/>
    </div>
  )
}

export default App