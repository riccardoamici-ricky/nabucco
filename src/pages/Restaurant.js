import React from 'react'
import PagesBody from '../components/PagesBody'
import PagesHero from '../components/PagesHero'
import { useTranslation } from 'react-i18next';
import ImageRestaurant from '../images/la-nostra-storia.png';
import ImageChef from '../images/chef.jpg';
const Restaurant = () => {
    const { t } = useTranslation();
    return (
        <>
           <PagesHero image={ImageRestaurant} heading={t('restaurantHeading')} /> 
           <PagesBody image={ImageRestaurant} source={'restaurantPage'} secondImage={ImageChef} double={true} />
        </>
    )
}

export default Restaurant
