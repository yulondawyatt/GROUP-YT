 <!-- Youtube Clone Project 
<!--   

Prioritize Functinality over Design 

- 
                    ~APP.JSX {MAIN PAGE TO RENDER}

 ~ Home page - consists of SearchBar component , search and nav aka header .
  ~ About page - should include information about who worked on the application and links to their GitHub profiles.
  .
  Create an: 

  <AboutMeCard> : Name / Photo/ Link to Github / 1-3 Fun Facts (one thing you enjoy about coding)
    <AboutMe>
  .
  .
        COMPONENTS 

~Searchbar - 8 videos on load with a thumbnail showing title of video.
    -fetch search (e.target.value) from searchbar from youtube API and render 8 results.

~SearchBar Reset - When a new search is performed the previous results should be cleared and only show new results

- useState manipulation

~Search Bar Redirect

- VIEW VIDEO - Click on displayed video and take to new page to view video.


example on how to fetch

fetch(
  `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
)





























   -->