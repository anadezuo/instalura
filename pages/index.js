import styled from 'styled-components';
import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Article from '../src/components/commons/Article';
import { Grid } from '../src/components/foundation/layout/Grid';
import { Box } from '../src/components/foundation/layout/Box';
import { Bubbles } from '../src/theme/BackgroundImage';

export default function Home({ setTheme }) {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage= "url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Menu setTheme={setTheme} />

      <Grid.Container
        marginTop={{ xs: '32px', md: '75px' }}
      >
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
              style={{ display: 'block', margin: 'auto'}}
              src='https://instalura-anadezuo.vercel.app/images/phones.png'
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </Box>
  );
}
