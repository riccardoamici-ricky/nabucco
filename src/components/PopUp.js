import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Image from '../images/menu-nabucco.jpg';
import { Button } from './Button';
import { FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const PopUp = ({ showModal, setShowModal }) => {

    const modalRef = useRef();

    
  
    const closeModal = e => {
      if (modalRef.current === e.target) {
        setShowModal(false);
      }
    };
  
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && showModal) {
          setShowModal(false);
          console.log('I pressed');
        }
      },
      [setShowModal, showModal]
    );
  
    useEffect(
      () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
      },
      [keyPress]
    );
  

	const Background = styled.div`
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
        z-index: 999999;

        
	`;

	const ModalWrapper = styled.div`
		width: 800px;
		height: 500px;
		box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
		background: #fff;
		color: #000;
		display: grid;
		grid-template-columns: 1fr 1fr;
		position: relative;
		z-index: 10;
		border-radius: 10px;
        @media screen and (max-width: 530px) {
            grid-template-columns: 1fr;
        }
	`;

	const ModalImg = styled.img`
		width: 100%;
		height: 100%;
		border-radius: 10px 0 0 10px;
		background: #000;
        object-fit: cover;
	`;

	const ModalContent = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		line-height: 1.8;
		color: #141414;
        h1{
            text-align: center;
        }
		p {
			margin-bottom: 1rem;
		}

	`;
    const CloseModalButton = styled(FaTimes)`
    color: #000;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;

`;

const { t } = useTranslation();


	return (
		<>
			{showModal ? (
				<Background ref={modalRef} onClick={closeModal}>
                        <ModalWrapper showModal={showModal}>
                            <ModalImg src={Image} alt="" />
                            <ModalContent>
                                <h1>{t('popUpHeading')}</h1>
                                <p>{t('popUpSubtitle')}</p>
                                <Button to="/contact" primary="true">{t('popUpButton')}</Button>
                            </ModalContent>
                            <CloseModalButton aria-label="CLose modal" onClick={() => setShowModal(prev => !prev)} />
                        </ModalWrapper>
				</Background>   
			) : 
				null
			}
		</>
	);
};

export default PopUp;
