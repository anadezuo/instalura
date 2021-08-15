import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: ${({ theme }) => theme.colors.modal.main.color};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  transition: 0.3s;
  z-index: 100;

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

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

// eslint-disable-next-line react/prop-types
export default function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest(
          '[data-model-safe-area="true"]',
        );

        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      { isOpen && <LockScroll />}
      <motion.div
        variants={{
          open: {
            x: 0,
          },
          closed: {
            x: '100%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
        }}
        style={{ display: 'flex', flex: '1' }}
      >
        {children({
          'data-model-safe-area': 'true',
        })}
      </motion.div>
    </ModalWrapper>
  );
}

Modal.prototype = {
  isOpen: PropTypes.bool.isRequerid,
  onClose: PropTypes.func.isRequerid,
  children: PropTypes.func.isRequerid,
};
Modal.default = {};
