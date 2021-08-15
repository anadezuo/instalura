import React, { useState } from 'react';
import Box from '../src/components/foundation/layout/Box';
import Menu from '../src/components/commons/Menu';
import Article from '../src/components/commons/Article';
import Grid from '../src/components/foundation/layout/Grid';
import Footer from '../src/components/commons/Footer';
import Modal from '../src/components/commons/Modal';
import FormCadastro from '../src/components/patterns/FormCadastro';

// eslint-disable-next-line react/prop-types
export default function Home({ theme, setTheme }) {
  const [modal, setModal] = useState(false);

  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        {(propsModal) => (
          <FormCadastro propsModal={propsModal} theme={theme} />
        )}
      </Modal>

      <Menu setTheme={setTheme} />

      <Grid.Container marginTop={{ xs: '32px', md: '75px' }}>
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 5 }}
            offset={{ xs: 0, md: 1 }} /* pulando 1 coluna em resolução md */
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
            backgroundColor="inherit"
          >
            <Article setModal={setModal} />
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>
            <img
              style={{ display: 'block', margin: 'auto' }}
              src="https://instalura-anadezuo.vercel.app/images/phones.png"
              alt="Dois celulares com várias fotos de uma pessoa."
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </Box>
  );
}
