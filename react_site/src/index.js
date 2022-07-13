import React from "react"
import * as ReactDom from "react-dom"
import Header from "./Header"
import MainContent from "./MainContent"
import Card from "./Card";
import saleItems from "./saleItems"

function App() {

    const myItemsForSale = saleItems.map(food => {
        return < Card
            key={food.id}
            data={food}
        />
    })

    return (
        <div className="background">
            < Header/>
            < MainContent/>
            <section className="cards-list">{myItemsForSale}</section>
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById("root"))
