import React from 'react';
import Article from '../src/components/commons/Article';
import Grid from '../src/components/foundation/layout/Grid';
import WebsiteWrapper from '../src/components/wrappers/WebsiteWrapper';

export default function Home() {
  return (
    /* <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    > */
    <WebsiteWrapper>

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
    </WebsiteWrapper>
  );
}
