import React from 'react';
import PropTypes from 'prop-types';
import Head from '../src/components/Head/AppHead';
import { ThemeProviderCustomized } from '../src/hooks/theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProviderCustomized>
      <Head />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProviderCustomized>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};
