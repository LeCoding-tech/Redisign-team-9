import React from 'react';
import './homeBody.css';
import { Link } from 'react-scroll';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

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
        url: './homeImages/Events1.webp'
    },
    {
        name: 'Deals1',
        url: './homeImages/Deals1.webp'
    },
    {
        name: 'Phones',
        url: './homeImages/Phone.webp'
    },
    {
        name: 'Computing',
        url: './homeImages/Computing.webp'
    },
    {
        name: 'Tvs',
        url: './homeImages/TVs.webp'
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
                                     <img width="100%" src={photo.url}/>
                                 </div>
                             )
                         })}
                     </Slider>
                </div>

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

                {/********** 
                 Products Preview Sections
                 **********/}
                <div className="productsSection">
                    <section className="eventsSection sectionBoxes"> 
                        <h2>Current Events</h2>
                        <img src={images[0].url} alt="Event1 image"/>
                    </section>

                    <section className="dealsSection sectionBoxes">
                        <h2>Daily Deals</h2>
                        <img src={images[1].url} alt="Deals1 image"/>
                    </section>
                </div>

                {/********** 
                 Store Categories Slider
                 **********/}  
                <div className="storeCategories" id="categories">
                    <div className="categoriesLink">
                        <img src={images[2].url} />
                        <h3>Phones</h3>
                    </div>
                    <div className="categoriesLink">
                        <img src={images[3].url} />
                        <h3>Computing</h3>
                    </div>
                    <div className="categoriesLink">
                        <img src={images[4].url} />
                        <h3>TV/Audio</h3>
                    </div>
                    <div className="categoriesLink">
                        <img src={images[5].url} className="appliances" />
                        <h3>Appliances</h3>
                    </div>
                </div>

            </div> 
    )
    
}

export default HomeBody;