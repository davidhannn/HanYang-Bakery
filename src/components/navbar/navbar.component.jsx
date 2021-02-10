import React from 'react'

import './navbar.styles.scss'

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <ul className="navbar-links">
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Store</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar
