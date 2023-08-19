import { useState } from 'react'
import SearchBar from './Components/SearchBar.jsx'
import './App.css'
import NavBar from './Components/NavBar.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {

  const [searchResults, setSearchResults] = useState([])
  const handleSearch = (items) => setSearchResults(items)

  return (
    <>
      <Router>
        <NavBar />
        <div>
          <SearchBar onSearch={handleSearch} />
          <div className="video-container">
            {searchResults.map((video) => (
              <div key={video.id.videoId} className="video-wrapper">
                <iframe
                  width="550"
                  height="300"
                  src={`https://www.youtube-nocookie.com/embed/${video.id.videoId}?privacy-enhanced=1`}
                  title={video.snippet.title}
                  allowFullScreen
                ></iframe>
                <p>{video.snippet.title}</p>
              </div>
            ))}
          </div>
        </div>
        <Routes>
          <Route path="/" element={<div></div>} />
          {/* <Route path="/AboutMe" element={} />
            <Route path="/Screen" element={} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
