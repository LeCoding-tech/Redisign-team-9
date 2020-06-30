import React, {useState} from 'react';
import styled from 'styled-components';
import Navbar from './navbar.js'

const Fold = styled.div`
@media (max-width: 750px){
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    margin-right: 5%;
    z-index: 3;

    div{
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => open ? 'black' : 'black'};
        border-radius: 10px;
        transform-origin: 1px;
        margin-left: 100px;

        &:nth-child(1) {
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({open}) => open ? '0' : '1'};
        }
        &:nth-child(3) {
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
}
`;

const Hamburger = () => {

    const [open, setOpen] = useState(false)

    return(
        <>
            <Fold className="burgerFold" open={open} onClick={() => setOpen(!open)}>
                <div/>
                <div/>
                <div/>
            </Fold>

            <Navbar open={open} />
        </>
    )


}

export default Hamburger