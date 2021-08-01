import React, { useState } from 'react';
import { GlobalStyle } from '../src/components/UI/GlobalStyle';
import { HeadTab } from '../src/components/commons/Head';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeLight, ThemeDark } from '../src/components/theme';
import SwitcherTheme from '../src/components/SwitcherTheme';

export const ButtonTheme = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

export default function App({ Component, pageProps}) {
  const [themeUser, setThemeUser] = useState(true);

  const changeTheme = () => {
    setThemeUser((themeUser) => !themeUser);
  };

  return (
    <>
      <HeadTab />
      <ThemeProvider theme={themeUser ? ThemeLight : ThemeDark}>
        <GlobalStyle />
        <ButtonTheme onClick={changeTheme}>
          <SwitcherTheme theme={themeUser} />
        </ButtonTheme>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
