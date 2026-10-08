import React from 'react'
import bgImages from "./assets/restaran.jpg"
import "./App.css"
import Header from './Components/Header/Header'
import Hero from "./Components/Hero/Hero"
import About from './Components/About/About'
import Map from './Components/Map/Map'
import Story from './Components/Story/Story'
import Contact from './Components/Contact/Contact'
const App = () => {
  return (
   <div
      className="app"
      style={{ backgroundImage: `url(${bgImages})` }}
    >
     <Header/>
     <Hero/>
     <About/>
     <Map/>
     <Story/>
     <Contact/>
    </div>
  )
}

export default App