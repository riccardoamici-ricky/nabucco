import React from 'react'
import PagesHero from '../components/PagesHero'
import PagesMenu from '../components/PagesMenu'
import { useTranslation } from 'react-i18next';
import ImageContact from '../images/chef.jpg';

const Menu = () => {
    const { t } = useTranslation();
    return (
        <>
           <PagesHero image={ImageContact} heading={t('menuHeading')}/> 
           <PagesMenu source={'menuPage'}/>
        </>
    )
}

export default Menu