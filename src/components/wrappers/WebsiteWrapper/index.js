import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WebsiteWrapperContext from '../../../contexts/websiteWrapper';
import Footer from '../../commons/Footer';
import Box from '../../foundation/layout/Box';
import Menu from '../../commons/Menu';
import FormCadastro from '../../patterns/FormCadastro';
import Modal from '../../commons/Modal';

export default function WebsiteWrapper({ children }) {
  const [modal, setModal] = useState(false);

  return (
    <WebsiteWrapperContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModal(true);
        },
      }}
    >
      <Box display="flex" flexDirection="column" flex="1">
        <Modal isOpen={modal} onClose={() => setModal(false)}>
          {(propsModal) => (
            <FormCadastro
              propsModal={propsModal}
              onCloseModal={() => setModal(false)}
            />
          )}
        </Modal>
        <Menu onCadastrarClick={() => setModal(true)} />
        {children}
        <Footer />
      </Box>
    </WebsiteWrapperContext.Provider>
  );
}

WebsiteWrapper.propTypes = {
  children: PropTypes.node,
};

WebsiteWrapper.defaultProps = {
  children: null,
};
