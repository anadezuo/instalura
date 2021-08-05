import React, { useState } from 'react';
import { GlobalStyle } from '../src/UI/GlobalStyle';
import { AppHead } from '../src/components/Head';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeLight } from '../src/theme';

export default function App({ Component, pageProps}) {
  const [theme, setTheme] = useState(ThemeLight);

  return (
    <>
      <AppHead />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        
        <Component {...pageProps} setTheme={setTheme} />
      </ThemeProvider>
    </>
  );
}
