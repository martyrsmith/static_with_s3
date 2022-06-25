export default function Card(){
    return(
        <div className="card">
            <img src="rolls.jpeg" className="card--image" alt="item for sale"/>
            <div className="card--stats" >
                <span className="green">$5</span>
                <span> (180 cal)</span>
            </div>
            <p>Cinnamon rolls, hot and fresh.</p>
        </div>
    )
}