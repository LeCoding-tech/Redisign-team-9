import React from 'react'
import './homeBody.css'
import Banner1 from './images/GalaxyBanner1.jpg'
import Events1 from './images/Events1.webp'
import Deals1 from './images/Deals1.webp'

const HomeBody = () => {

    return(
        <>
            {/********** 
             Home Slider
                **********/}
            <div className="homeSlider">
                <img src={Banner1}/>
            </div>

            {/********** 
             Products Preview Sections
                **********/}
            <div className="productsSection">
                <section className="eventsSection sectionBoxes"> 
                    <h2>Current Events</h2>
                    <img src={Events1} alt="Event1 image"/>
                </section>

                <section className="dealsSection sectionBoxes">
                    <h2>Daily Deals</h2>
                    <img src={Deals1} alt="Deals1 image"/>
                </section>
            </div>

            {/********** 
             Store Categories Slider
                **********/}  
            <div className="storeCategories">

            </div>
        </> 
    )
    
}

export default HomeBody;