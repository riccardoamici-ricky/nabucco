import React from 'react'
import PagesBody from '../components/PagesBody'
import PagesHero from '../components/PagesHero'
import { useTranslation } from 'react-i18next';
import ImageExecutive from '../images/tanagra-executive.JPG';
import PianoTerra from '../images/piano-terra.jpg';
import PianoSuperiore from '../images/piano-superiore.jpg';
import ImageOne from '../images/tanagra-executive-carousel-1.JPG';
import ImageTwo from '../images/tanagra-executive-carousel-2.JPG';
import ImageThree from '../images/tanagra-executive-carousel-3.jpg';
import ImageFour from '../images/tanagra-executive-carousel-4.JPG';


const Executive = () => {
    const { t } = useTranslation();
    const slides = [
        {
            image: ImageOne,
            alt: 'Ristorante Tanagra Roma'
        },
        {
            image: ImageTwo,
            alt: 'Ristorante Tanagra Roma'
        },
        {
            image: ImageThree,
            alt: 'Ristorante Tanagra Roma'
        },
        {
            image: ImageFour,
            alt: 'Ristorante Tanagra Roma'
        }
    ];
    
    
    return (
        <>
           <PagesHero image={ImageExecutive} heading={t('executiveHeading')} /> 
           <PagesBody source={'executivePage'} form={true} double={true} executive={true} secondImage={PianoTerra} thirdImage={PianoSuperiore} carouselImgs={slides}/>
        </>
    )
}

export default Executive
