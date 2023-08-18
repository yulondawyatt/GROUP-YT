import { useState } from 'react'
import SearchBar from './Components/SearchBar.jsx'
import './App.css'
import NavBar from './Components/NavBar.jsx'
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";


function App() {
  const apiKey = import.meta.env.VITE_API_KEY
  
  fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}`)
    .then(r => r.json())
    .then(console.log)
  return (
    
    <>
  <Router>

  <NavBar/>
  <SearchBar />

   <Routes>

    <Route path="/" element={} />
    <Route path="/" element={} />
    <Route path="/" element={} />

   </Routes>

  </Router>
    </>
  )
}

export default App
