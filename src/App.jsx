import { useState } from 'react'
import SearchBar from './Components/SearchBar.jsx'
import './App.css'
import NavBar from './Components/NavBar.jsx'
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import AboutList from './Components/AboutList.jsx';

function App() {
  const apiKey = import.meta.env.VITE_API_KEY
  
  fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}`)
    .then(r => r.json())
    .then(console.log)
  return (
    
    <>
  <Router>
{/*     
     <AboutList /> */}

  <NavBar/>
  <SearchBar />


   {/* <Routes>

    <Route path="/" element={} />
    <Route path="/AboutMe" element={} />
    <Route path="/Screen" element={} />

   </Routes> */}

  </Router>
    </>
  )
}

export default App
