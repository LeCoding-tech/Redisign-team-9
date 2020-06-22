import React from 'react';
import './navbar.css'

const Navbar = () => {
    return (
        <div>
           
                <nav id="navbar">
                <img className = "droid_nav" alt="android" src = "img/Droid.png"/>
                    <ul> 
                    
                        <li>Home</li>
                        <li>About</li>
                        <li>Features</li>
                        <li>Pricing</li>
                    </ul>
                    </nav>
            </div>
           
       
    )
}

export default Navbar;