import React, { useState } from 'react'
import Features from '../components/Features'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import Listings from '../components/Listings'
import PopUp from '../components/PopUp'
import ImageOne from '../images/square-restaurant.png';
import ImageTwo from '../images/vino.jpg';
import ImageThree from '../images/cavolo.jpg';




const Home = () => {
    const [showModal, setShowModal] = useState(true);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
    return (
        <>
        <PopUp showModal={showModal} setShowModal={setShowModal}/>
        <Hero/>
        <InfoSection image={ImageOne} reverse={false} source={'firstInfoData'}/>
        <Listings />
        <InfoSection image={ImageTwo} reverse={true} source={'secondInfoData'}/>
        <Features />
        <InfoSection image={ImageThree} reverse={true} source={'thirdInfoData'}/>
        </>
    )
}

export default Home
