import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Ul = styled.ul`

    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-right: 5%;

    li{
        padding: 0 10px;
        font-size: 1.5rem;
    }

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

                    <Link to="/" className="link">
                        <li>Home</li>
                    </Link>
                    <Link to="/Products" className="link">
                        <li>Products</li>
                    </Link>
                    <Link to="/signup" className="link">
                        <li>Signup</li>
                    </Link>
                    <Link to="/Contact" className="link">
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
