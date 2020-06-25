import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav id="navbar">
                <ul>

                    <img className="samsung_nav" alt="samsung" src="img/samsung.jpg" />

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/Products">Features</Link>
                    </li>
                    <li>
                        <Link to="/">Pricing</Link>
                    </li>
                    <li>
                        <Link to="/">Signup</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
