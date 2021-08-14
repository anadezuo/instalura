import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: rgba(0,0,0,0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    overflow: scroll;

    ${(props) => {
    if (props.isOpen) {
      return css`
          opacity: 1;
          pointer-events: all;
        `;
    }

    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
  `;

// eslint-disable-next-line react/prop-types
export default function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-model-safe-area="true"]');

        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {children({
        'data-model-safe-area': 'true',
      })}
    </ModalWrapper>
  );
}

Modal.prototype = {
  isOpen: PropTypes.bool.isRequerid,
  onClose: PropTypes.func.isRequerid,
  children: PropTypes.func.isRequerid,
};
Modal.default = {

};
