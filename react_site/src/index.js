import React from "react"
import * as ReactDom from "react-dom"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
import Card from "./Card";


function App(){
    return (
        <div className="background">
            < Header />
            < MainContent />
            < Card />
            {/*< Footer />*/}
        </div>
    )
}
ReactDom.render(<App />, document.getElementById("root"))
