import React from 'react'
import './homeBody.css'
import Banner1 from './images/GalaxyBanner1.jpg'
import Events1 from './images/Events1.webp'
import Deals1 from './images/Deals1.webp'

import Phones from './images/Phone.webp'
import Computing from './images/Computing.webp'
import Tvs from './images/TVs.webp'
import Appliances from './images/Appliances.webp'

const HomeBody = () => {

    return(
        <div className="homeBody">

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
                    <div className="categoriesLink">
                        <img src={Phones} />
                        <h3>Phones</h3>
                    </div>
                    <div className="categoriesLink">
                        <img src={Computing} />
                        <h3>Computing</h3>
                    </div>
                    <div className="categoriesLink">
                        <img src={Tvs} />
                        <h3>TV/Audio</h3>
                    </div>
                    <div className="categoriesLink">
                        <img src={Appliances} className="appliances" />
                        <h3>Appliances</h3>
                    </div>
                </div>

            </div> 
    )
    
}

export default HomeBody;