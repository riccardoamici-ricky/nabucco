import React, { useState } from 'react'
import Features from '../components/Features'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import Listings from '../components/Listings'
import PopUp from '../components/PopUp'
import ImageOne from '../images/square-restaurant.png';
import ImageTwo from '../images/vino.jpg';
import ImageThree from '../images/cavolo.jpg';
import ImageMenu from '../images/chef.jpg';
import ImageWine from '../images/vino-nabucco.jpg';
import ContactUs from '../components/ContactUs'
import { BookNow } from '../components/BookNow'




const Home = () => {
    const [showModal, setShowModal] = useState(true);
    return (
        <>
            <BookNow to="/contact" primary="true">Book</BookNow>
            <PopUp showModal={showModal} setShowModal={setShowModal}/>
            <Hero/>
            <InfoSection image={ImageOne} reverse={false} source={'firstInfoData'}/>
            <InfoSection image={ImageMenu} reverse={true} source={'menuInfoData'}/>
            <InfoSection image={ImageWine} reverse={false} source={'wineInfoData'}/>
            <InfoSection image={ImageTwo} reverse={true} source={'secondInfoData'}/>
            <Features />
            <InfoSection image={ImageThree} reverse={true} source={'thirdInfoData'}/>
            <ContactUs />
        </>
    )
}

export default Home
