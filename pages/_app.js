import React, { useState } from 'react';
import { GlobalStyle } from '../src/components/UI/GlobalStyle';
import { HeadTab } from '../src/components/Head';
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
  width: 100px;
  height: 100px;
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
        <ButtonTheme onClick={changeTheme}>
          <SwitcherTheme theme={themeUser} />
        </ButtonTheme>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
