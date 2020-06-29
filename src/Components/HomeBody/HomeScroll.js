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
                        offset={-70}
                        duration={500}
                        className="scrollButton">See Our Categories</Link>

                        <Link 
                        activeClass="active"
                        to="categories"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="scrollButton">Who's Our Personas</Link>
                </div>
    )
}

export default HomeScroll