export default function Card(props) {
    let badgeText

    if (props.data.count === 0) {
        badgeText = "SOLD OUT"
    } else if (props.data.source === "imported") {
        badgeText = "IMPORTED"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.data.image} className="card--image" alt="item for sale"/>
            <div className="card--stats">
                <span className="green">${props.data.price}</span>
                <span> ({props.data.calories} cal)</span>
            </div>
            <p>{props.data.description}</p>
        </div>
    )
}