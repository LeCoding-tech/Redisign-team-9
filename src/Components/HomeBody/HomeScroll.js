import React from 'react';
import './homeBody.css';
import { Link } from 'react-scroll';

const HomeScroll = () => {
    return(
        <div className="scrollButtons">
                    <Link 
                        activeClass="active"
                        to="categories"
                        spy={true}
                        smooth={true}
                        offset={-400}
                        duration={1000}
                        className="scrollButton">See Our Categories</Link>

                        <Link 
                        activeClass="active"
                        to="PersonaBox"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                        className="scrollButton">Who's Our Personas</Link>
                </div>
    )
}

export default HomeScroll