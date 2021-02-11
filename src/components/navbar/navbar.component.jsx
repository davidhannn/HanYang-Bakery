import React from 'react'

import './navbar.styles.scss'


import logo from "../../images/logo2.png"

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="navbar-image-container">
                <img src={logo} className="navbar-image" />
            </div>
            <div className="navbar-contact">
                <h4>Contact Us!</h4>
                <p>9732 Garden Grove Blvd. #7</p>
                <p>Garden Grove, CA 92844</p>
                <p>(714)-537-5150</p>
            </div>
            <ul className="navbar-links">
                <li>About</li>
                <li>Menu</li>
                <li>Store</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar
