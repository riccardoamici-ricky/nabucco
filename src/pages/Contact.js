import React from 'react'
import PagesBody from '../components/PagesBody'
import PagesHero from '../components/PagesHero'
import { useTranslation } from 'react-i18next';
import ImageContact from '../images/chef.jpg';


const Contact = () => {
    const { t } = useTranslation();
    return (
        <>
           <PagesHero image={ImageContact} heading={t('contactHeading')}/> 
           <PagesBody source={'contactPage'} form={true} map={true} nabucco={true}/>
        </>
    )
}

export default Contact
