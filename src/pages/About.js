import React from 'react'
import PagesBody from '../components/PagesBody'
import PagesHero from '../components/PagesHero'
import ImageAbout from '../images/cavolo.jpg';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    return (
        <>

           <PagesHero image={ImageAbout} heading={t('aboutHeading')} /> 
           <PagesBody image={ImageAbout} source={'aboutPage'} />
        </>
    )
}

export default About
