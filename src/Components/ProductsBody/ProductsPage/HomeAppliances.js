import React from 'react';
import Header from '../../Navbar/Header';
import Footer from '../../Footer/footer';
import HomeAppliancePage from '../ProductSubPages/HomeAppliances';

const HomeAppliance = () => {
    return(
        <>
        <Header />
        <HomeAppliancePage />
        <Footer />
        </>
    )
}

export default HomeAppliance;