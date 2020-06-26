import React from 'react';
import Navbar from '../../Navbar/navbar';
import Footer from '../../Footer/footer';
import HomeAppliancePage from '../ProductSubPages/HomeAppliances';

const HomeAppliance = () => {
    return(
        <>
        <Navbar />
        <HomeAppliancePage />
        <Footer />
        </>
    )
}

export default HomeAppliance;