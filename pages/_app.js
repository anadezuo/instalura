import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/UI/GlobalStyle';
import AppHead from '../src/components/Head';
import { ThemeLight } from '../src/theme';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(ThemeLight);

  return (
    <>
      <AppHead />
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} setTheme={setTheme} />
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape.isRequired,
};
