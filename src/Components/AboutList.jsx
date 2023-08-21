import team from "../team.json"
import About from "./About.jsx"
import "./AboutList.css"

function AboutList(){

let listOfEngineers = team.map((engineers)=>{return( <About engineers={engineers}/> )})

return(

<div className="Engineers">{listOfEngineers}</div>
)

}

export default AboutList