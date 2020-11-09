import React, { useState } from 'react'
import './navigation.scss'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import NavigationMenu from './NavigationMenu'

function Navigation() {
    //Creates a var, showmenu, declare function that changes the value of the var, always have the value of false.
    const [showMenu, setShowMenu] = useState(false);

    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        })
        const menuTransitions = useTransition(showMenu, null, {
            from: {opacity: 0  },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
        })
    

    return(
        <nav className="nav">
            <div className="menuDiv">
            <FontAwesomeIcon className="test"
            icon={faBars}
            onClick={() => setShowMenu(!showMenu)}
            />
            </div>
            {
                maskTransitions.map(({ item, key, props }) =>
                item && 
                <animated.div 
                key={key} 
                style={props}>
                <div className="menuMask" onClick={() => setShowMenu(false)}></div>
                
                </animated.div>
                )
            }
            {
                menuTransitions.map(({ item, key, props }) =>
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                >
                <div className="hiddenMenu">
                <NavigationMenu
                closeMenu={() => setShowMenu(false)}
                />
                </div>
                
                    </animated.div>
                )
            }
            
        </nav>

    )
}

export default Navigation;