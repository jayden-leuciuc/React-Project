import React from 'react'
import Navigation from '../Nav/Navigation'
import './header.scss'

function Header() {
    return(
        <header className="header">
            <span class="name">AppName</span>
            <Navigation />
        </header>
    )
}

export default Header;