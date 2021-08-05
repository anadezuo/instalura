import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  //css reset

  * {
    box-sizing: border-box;
  }

  ${normalize}

    body {
        margin: 0;
        padding: 0;
        font-family: ${({theme}) => theme.fontFamily};
        background-color: ${function (props) {
      return props.theme.colors.background.main.color;
    }};
    }

    /* Full height layout */
    html, body {
        display: flex;
        min-height: 100vh;
        width: 100%;
    }
    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
`;
