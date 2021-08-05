import styled from 'styled-components';
import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Article from '../src/components/commons/Article';
import { Grid } from '../src/components/foundation/layout/Grid';
import PhoneImage from '../src/assets/images/phones.png';
import Image from 'next/Image';

const HomeWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Home({ setTheme }) {
  return (
    <HomeWrapper>
      <Menu setTheme={setTheme} />

      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 5 }}
            offset={{ xs: 0, md: 1 }} /*pulando 1 coluna*/
          >
            <Article />
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>
            <Image
              style={{ display: 'block', margin: 'auto' }}
              src={PhoneImage}
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </HomeWrapper>
  );
}
