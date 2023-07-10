import PropTypes from 'prop-types';
import React, { Component, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ImCross } from 'react-icons/im';
import { Overlay, Inner, CloseBtn } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal  = ({closeModal, children})=> {
  // static propTypes = {
  //   closeModal: PropTypes.func,
  // };

  // componentDidMount() {
  //   window.addEventListener('keydown', this.coseModal);
  //   document.body.style.overflow = 'hidden';
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.coseModal);
  //   document.body.style.overflow = '';
  // }

  useEffect (()=>{

    const coseModal = (evt) => {
      if (evt.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', coseModal);
    document.body.style.overflow = 'hidden';
    
    
    return()=> {
      window.removeEventListener('keydown', coseModal);
      document.body.style.overflow = '';
    }
    

  })




  const closeOnClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={closeOnClick}>
      <Inner>
        {children}
        <CloseBtn type="button" onClick={closeModal}>
          <ImCross size="16" />
        </CloseBtn>
      </Inner>
    </Overlay>,

    modalRoot
  );
}