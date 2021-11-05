/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import WebsitePageWrapperContext from '../../../contexts/WebsitePageWrapper';
import Footer from '../../commons/Footer';
import Box from '../../foundation/layout/Box';
import Menu from '../../commons/Menu';
import FormCadastro from '../../patterns/FormCadastro';
import Modal from '../../commons/Modal';
import SEO from '../../Head/SEO';

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
  messages,
}) {
  const [modal, setModal] = useState(false);

  return (
    <WebsitePageWrapperContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModal(true);
        },
        getCMSContent: (cmsKey) => get(messages, cmsKey),
      }}
    >
      <SEO {...seoProps} />
      <Box display="flex" flexDirection="column" flex="1" {...pageBoxProps}>
        <Modal isOpen={modal} onClose={() => setModal(false)}>
          {(propsModal) => (
            <FormCadastro
              propsModal={propsModal}
              onCloseModal={() => setModal(false)}
            />
          )}
        </Modal>

        {menuProps.display
          && (<Menu onCadastrarClick={() => setModal(true)} />)}

        {children}
        <Footer />
      </Box>
    </WebsitePageWrapperContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
  messages: {},
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object,
};
