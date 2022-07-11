import React from "react"
import * as ReactDom from "react-dom"
import Header from "./Header"
import MainContent from "./MainContent"
import Card from "./Card";
import saleItems from "./saleItems"

function App() {

    const myItemsForSale = saleItems.map(food => {
        return < Card
            itemImage={food.image}
            itemPrice={food.price}
            itemCalories={food.calories}
            itemDescription={food.description}
        />
    })

    return (
        <div className="background">
            < Header/>
            < MainContent/>
            <section className="cards-list">{myItemsForSale}</section>
            {/*< Footer />*/}
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById("root"))
