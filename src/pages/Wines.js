import React from 'react'
import PagesHero from '../components/PagesHero'
import { useTranslation } from 'react-i18next';
import ImageWines from '../images/tanagra-vino.png';
import PagesBody from '../components/PagesBody';
import ImageOne from '../images/tanagra-menu-pag-1.png';
import ImageTwo from '../images/tanagra-menu-pag-1.png';
import ImageThree from '../images/tanagra-menu-pag-1.png';
import ImageFour from '../images/tanagra-menu-pag-1.png';



const Menu = () => {
    const { t } = useTranslation();
    const slides = [
        {
            image: ImageOne,
            alt: 'Vini'
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
           <PagesHero image={ImageWines} heading={t('menuHeading')}/> 
           <PagesBody source={'winePage'} image={ImageWines} menu={true} carouselImgs={slides} wines={true}/>
        </>
    )
}

export default Menu