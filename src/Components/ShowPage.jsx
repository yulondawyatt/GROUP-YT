import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

const ShowPage = () => {

    const [videoDetails, setVideoDetails] = useState(null)
    const { videoId } = useParams()

    useEffect(() => {
        if (videoId) {
            const apiKey = import.meta.env.VITE_API_KEY
            fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`)
                .then(r => r.json())
                .then(data => { if (data.items.length > 0) setVideoDetails(data.items[0]) })
                .catch(err => { console.error(err) })
        }
    }, [])

    return (
        <div>
            {videoDetails && (
                <div>
                    <h2>{videoDetails.snippet.title}</h2>
                    <iframe
                        width="550"
                        height="300"
                        src={`https://www.youtube-nocookie.com/embed/${videoId}?privacy-enhanced=1`}
                        title={videoDetails.snippet.title}
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    )
}

export default ShowPage