import React from 'react'
import PagesBody from '../components/PagesBody'
import PagesHero from '../components/PagesHero'
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    return (
        <>
           <PagesHero heading={t('aboutHeading')}/> 
           <PagesBody />
        </>
    )
}

export default Contact
