import React from 'react';
import './navbar.css';
import Hamburger from './Hamburger.js'

import logo from './samsung.jpg';




class Header extends React.Component {

    render() {

        return(
            <>
                <div className="top__container">
                    <header className="header__container">
                    <img className="samsung_nav" alt="samsung" src={logo} />


                    <Hamburger />
                    </header>
                </div>
            </>
        )
    }
}

export default Header