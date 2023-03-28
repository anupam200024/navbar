import React from 'react'
import './Navbar.css';

export default function Navbar() {
    return (
        <header className="header">
            <h1 className="logo">Knyaz</h1>
            <ul className="main-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
    )
}
