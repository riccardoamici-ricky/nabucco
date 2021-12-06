import React from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FirstBlockImg from '../images/menu-nabucco.jpg';
import SecondBlockImg from '../images/vino-nabucco.jpg';

const Section = styled.section`
    background-color: #000;
    width: 100%;
    height: 100%;
    padding: 10rem calc((100vw - 1300px) / 2);
`

const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem 1rem;
`;

const Heading = styled.div`
    font-size: 1.9rem;
    padding: 1rem 1rem;
    margin-bottom: 40px;
    color: #fff;
    text-align: center;
    background-color: #214448;

    h1 {
        font-family: 'Cormorant Garamond', serif;
    }

    @media screen and (max-width: 768px) {
        text-align: start;
    }
`;

const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const InfoWrap = styled.div`
    padding: 0rem 1rem;
    min-height: 550px;
    height: 100%;

    h2 {
        margin-bottom: 1 rem;
        font-weight: 400;
        color: #fff;
        font-family: 'Cormorant Garamond', serif;

        &:hover{
            transform: translateY(-2px);
            font-weight: bold;
        }
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 400px;
    object-fit: cover;
    margin-bottom: 1rem;
`;

const ImageTwo = styled.img`
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 400px;
    object-fit: cover;
    margin-bottom: 1rem;
    margin-top: 120px;
    @media screen and (max-width: 768px) {
        margin-top: 0px;
    }

`;

const InfoLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color:  #214448;
    width: 160px;
    transition: 0.3s;

    &:hover{
        transform: translateY(-2px);
        font-weight: bold;
    }
`;

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 10px;
`;


const Listings = () => {
    const { t } = useTranslation();
    return (
        <Section>
            <Container>
                <Heading data-aos='fade-right' data-aos-duration='1000' data-aos-delay='200'>
                    <h1>{t('listingsHeader')}</h1>
                </Heading>
                <InfoRow>
                    <InfoWrap data-aos='zoom-out-up' data-aos-duration='1000' data-aos-delay='100'>
                        <Image src={FirstBlockImg} alt="" />
                        <InfoLink to='/menu'><h2>{t('menuOne')}</h2></InfoLink>
                        <InfoLink to='/menu'>
                            <p>{t('labelMenuOne')}</p>
                            <Arrow />
                        </InfoLink>
                    </InfoWrap>
                    <InfoWrap data-aos='zoom-out-down' data-aos-duration='1000' data-aos-delay='300'>
                        <ImageTwo src={SecondBlockImg} alt="" />
                        <InfoLink to='/menu'><h2>{t('menuTwo')}</h2></InfoLink>
                        <InfoLink to='/menu'>
                            <p>{t('labelMenuTwo')}</p>
                            <Arrow />
                        </InfoLink>
                    </InfoWrap>
                </InfoRow>
            </Container>
        </Section>
    )
}

export default Listings
