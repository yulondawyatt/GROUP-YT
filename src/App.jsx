import { useState } from 'react'
import SearchBar from './Components/SearchBar.jsx'
import './App.css'

function App() {
  const apiKey = import.meta.env.VITE_API_KEY
  
  fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}`)
    .then(r => r.json())
    .then(console.log)
  return (
    <>
      
      <SearchBar />
    </>
  )
}

export default App
