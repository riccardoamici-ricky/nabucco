import React from 'react'
import PagesBody from '../components/PagesBody'
import PagesHero from '../components/PagesHero'
import { useTranslation } from 'react-i18next';
import ImageExecutive from '../images/business-dinner.jpg';
import PianoTerra from '../images/regala-cena.jpg';
import PianoSuperiore from '../images/nabucco.jpg';

const Executive = () => {
    const { t } = useTranslation();
    return (
        <>
           <PagesHero image={ImageExecutive} heading={t('executiveHeading')} /> 
           <PagesBody source={'executivePage'} form={true} double={true} executive={true} secondImage={PianoTerra} thirdImage={PianoSuperiore}/>
        </>
    )
}

export default Executive
