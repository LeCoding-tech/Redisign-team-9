import React from 'react';
import './navbar.css';
import Hamburger from './Hamburger.js'
<<<<<<< HEAD
import logo from './samsung.jpg';
=======
import logo from './samsung.jpg'
>>>>>>> e26aba72bfdd4ac6a63e95ee0cba3dbc16aea409

class Header extends React.Component {

    render() {

        return(
            <>
                <div className="top__container">
                    <header className="header__container">
                    <img className="samsung_nav" alt="samsung" src={logo} />
<<<<<<< HEAD
=======

>>>>>>> e26aba72bfdd4ac6a63e95ee0cba3dbc16aea409
                    <Hamburger />
                    </header>
                </div>
            </>
        )
    }
}

export default Header