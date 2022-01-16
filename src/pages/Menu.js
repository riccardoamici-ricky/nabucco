import React from 'react'
import PagesHero from '../components/PagesHero'
import { useTranslation } from 'react-i18next';
import ImageContact from '../images/tanagra-menu-page-1.jpg';
import PagesBody from '../components/PagesBody';
import ImageOne from '../images/tanagra-menu-carousel-1.jpg';
import ImageTwo from '../images/tanagra-menu-carousel-2.jpg';
import ImageThree from '../images/tanagra-menu-carousel-3.jpg';
import ImageFour from '../images/tanagra-menu-carousel-4.jpg';
import ImageMenu1 from '../images/tanagra-menu-pag-1.png';
import ImageMenu2 from '../images/tanagra-menu-pag-2.png';
import ImageMenu3 from '../images/tanagra-menu-pag-3.png';


const Menu = () => {
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
           <PagesHero image={ImageContact} heading={t('menuHeading')}/> 
           <PagesBody source={'menuPage'} menuFirstImg={ImageMenu1} menuSecondImg={ImageMenu2} menuThirdImg={ImageMenu3} menu={true} carouselImgs={slides}/>
        </>
    )
}

export default Menu