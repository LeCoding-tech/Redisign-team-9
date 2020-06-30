import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Ul = styled.ul`

  

@media (max-width: 750px){
    
    background-color: rgba(255, 215, 255, 0.564);
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 2rem;
    text-align: center;
    z-index: 2;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    margin: 0;
    
    li{
      padding: 2% 1%;
      font-size: 1.7rem;;
    }
  }
  `;

const Navbar = ({ open }) => {

    return (

        <div>
            <nav id="navbar">
                <Ul open={open}>

                    <Link to="/" className="navlink">
                        <li>Home</li>
                    </Link>
                    <Link to="/Products" className="navlink">
                        <li>Products</li>
                    </Link>
                    <Link to="/Login" className="navlink">
                        <li>Account</li>
                    </Link>
                    <Link to="/Contact" className="navlink">
                        <li>Contact</li>
                    </Link>

                    {/* <div className="search">1</div>
                        <div className="cart">2</div> */}

                </Ul>
            </nav>
        </div>
    )
}

export default Navbar;
