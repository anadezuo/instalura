import styled from 'styled-components';
import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';

const HomeWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Home({setTheme}) {
  return (
    <HomeWrapper>
      <Menu setTheme={setTheme}/>
      <Footer /> 
    </HomeWrapper>
  );
}
