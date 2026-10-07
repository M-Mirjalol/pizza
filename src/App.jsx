import React from 'react'
import bgImages from "./assets/restaran.jpg"
import "./App.css"
import Header from './Components/Header/Header'


const App = () => {
  return (
   <div
      className="app"
      style={{ backgroundImage: `url(${bgImages})` }}
    >
     <Header/>
    </div>
  )
}

export default App