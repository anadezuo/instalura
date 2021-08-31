import React from 'react';
import Article from '../../commons/Article';
import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';

export default function HomeScreen() {
  return (
    <Box display="flex" flex="1" flexDirection="column" justifyContent="space-between">
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
            <Article />
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
    </Box>
  );
}
