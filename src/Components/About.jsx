import "./About.css"

function About({ engineers }) {


    return (
                

        <div className="AboutMe">
            <div className="space">
            <h3>{engineers.name}</h3>

            <img src={engineers.pic} alt={engineers.name} />

            <h5>{engineers.hometown}</h5>

            <h5>{engineers.fact}</h5>
            </div>
        </div>
   

    )
}

export default About