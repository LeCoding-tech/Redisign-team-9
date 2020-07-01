import React from 'react'
import David from './PersonaImages/David.png';
import Alan from './PersonaImages/Alan.png';
import './Persona.css';

const Persona = () => {
    return (
        <>
            <div className="PersonaBox">
                <div className="Personacontainer">
                    <img className="imgPersona" src={David} alt=" Customer" />
                    <p><span>David Garcia</span> Road 2 Hire Student</p>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <p>Story: David enjoys technology and working with new appliances. David enjoys our website redesign and how easy it was to use it. David was able to find the products he needed and was able to contact our customer support if there were any issues he encountered. David remains a loyal customer until this day.</p>
                </div>
                <div className="Personacontainer">
                    <img className="imgPersona" src={Alan} alt=" Customer" />
                    <p><span>Alan Vang</span>Front end engineer</p>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <p>Story: Alan was one of our customers looking for new mobile products to use and found the redesign of our site very user friendly. “The site was very easy to use. Not complicated and I was able to have an easy process buying the applications I needed.” ~ Alan</p>
                </div>
            </div>

        </>
    )
}

export default Persona;