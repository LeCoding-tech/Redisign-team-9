import React from 'react';
import './homeBody.css';
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import HomeScroll from './HomeScroll'
import Persona from '../Persona/persona';

const photos = [
    {
        name: 'Banner1',
        url: './homeImages/GalaxyBanner1.jpg'
    },
    {
        name: 'Banner2',
        url: './homeImages/GalaxyBanner2.jpg'
    },
    {
        name: 'Banner3',
        url: './homeImages/GalaxyBanner3.jpg'
    },
    {
        name: 'Banner4',
        url: './homeImages/GalaxyBanner4.jpg'
    }
];

const images = [
    {
        name: 'Events1',
        url: './homeImages/Events1.jpg'
    },
    {
        name: 'Deals1',
        url: './homeImages/Deals1.jpg'
    },
    {
        name: 'Phones',
        url: './homeImages/Phone.jpg'
    },
    {
        name: 'Computing',
        url: './homeImages/Computing.jpg'
    },
    {
        name: 'Tvs',
        url: './homeImages/TVs.jpg'
    },
    {
        name: 'Appliances',
        url: './homeImages/Appliances.webp'
    }
]

const HomeBody = () => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        className: "slides",
        autoplay: true,
        autoplaySpeed: 3000
    }

    return(
        <div className="homeBody">

                {/********** 
                 Home Slider
                 **********/}
                <div className="homeSlider">
                     <Slider {...settings}>
                         {photos.map((photo) => {
                             return(
                                 <div>
                                     <img src={photo.url} alt={photo.name}/>
                                 </div>
                             )
                         })}
                     </Slider>
                </div>

                    < HomeScroll />

                {/********** 
                 Products Preview Sections
                 **********/}
                <div className="productsSection">
                    <section className="eventsSection sectionBoxes"> 
                        <h2>Current Events</h2>
                        <img src={images[0].url} alt={images[0].name}/>
                    </section>

                    <section className="dealsSection sectionBoxes">
                        <h2>Daily Deals</h2>
                        <img src={images[1].url} alt={images[1].name}/>
                    </section>
                </div>

                {/********** 
                 Store Categories Slider
                 **********/}  
                <div className="storeCategories" id="categories">
                    <Link to="/Products/MobileProducts" className="categoriesLink">
                        <img src={images[2].url} alt={images[2].name}/>
                        <h3>Phones</h3>
                    </Link>

                    <Link to="/Products/MobileProducts" className="categoriesLink">
                        <img src={images[3].url} alt={images[3].name}/>
                        <h3>Computing</h3>
                    </Link>

                    <Link to="/Products/TvAudioPage" className="categoriesLink">
                        <img src={images[4].url} alt={images[4].name}/>
                        <h3>TV/Audio</h3>
                    </Link>

                    <Link to="/Products/HomeAppliancePage" className="categoriesLink">
                        <img src={images[5].url} alt={images[5].name} className="appliances" />
                        <h3>Appliances</h3>
                    </Link>
                </div>
                 <Persona/>
            </div> 
    )
    
}

export default HomeBody;