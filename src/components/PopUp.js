import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Image from '../images/tanagra-popup.jpg';
import { FaTimes } from 'react-icons/fa';


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
		width: 50vh;
		height: 90vh;
		box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
		background: #fff;
		color: #000;

		position: relative;
		z-index: 10;
		border-radius: 10px;
      @media screen and (max-width: 530px) {
          grid-template-columns: 1fr;
          width: 80%;
          height: 70%;
      }
	`;

	const ModalImg = styled.img`
		width: 100%;
		height: 100%;
		
		background: #000;

      @media screen and (max-width: 768px) {
         height: auto;    
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




	return (
		<>
			{showModal ? (
				<Background ref={modalRef} onClick={closeModal}>
                        <ModalWrapper showModal={showModal}>
                            <ModalImg src={Image} alt="" />
                            
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
