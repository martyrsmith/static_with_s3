export default function Card(props){

    return(
        <div className="card">
            <img src={props.itemImage} className="card--image" alt="item for sale"/>
            <div className="card--stats" >
                <span className="green">${props.itemPrice}</span>
                <span> ({props.itemCalories} cal)</span>
            </div>
            <p>{props.itemDescription}</p>
        </div>
    )
}