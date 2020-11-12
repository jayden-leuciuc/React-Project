import React from 'react'
import {Link} from 'react-router-dom';

function NavigationMenu(props) {
    return(
        <div>
        <div className="menuHeading">
            RandoShop
        </div>
        <ul>
            <li>
                <Link 
                    to="/" 
                    className="links"
                    onClick={props.closeMenu}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link 
                    to="/about" 
                    className="links"
                    onClick={props.closeMenu}
                >
                    About
                </Link>
            </li>
        </ul>
    </div> 
    )
}
export default NavigationMenu