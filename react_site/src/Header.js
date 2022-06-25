import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="/cupcake-svgrepo-com.svg" className="logo-image" alt="cupcake"/>
                <ul className="nav-items">
                    <li><a href="#princing" className="nav--link">Home</a></li>
                    <li><a href="#princing" className="nav--link">Pricing</a></li>
                    <li><a href="#about" className="nav--link">About</a></li>
                    <li><a href="#contact" className="nav--link">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}