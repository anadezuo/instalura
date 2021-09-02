import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ThemeDark, ThemeLight } from '../theme';
import GlobalStyle from '../UI/GlobalStyle';

const ThemeContext = createContext({
  toggleTheme: () => {},
  theme: ThemeLight,
});

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;

export function ThemeProviderCustomized({ children }) {
  const [theme, setTheme] = useState(ThemeLight);

  const toggleTheme = () => {
    if (theme.isDark) {
      setTheme(ThemeLight);
    } else {
      setTheme(ThemeDark);
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

ThemeProviderCustomized.propTypes = {
  children: PropTypes.node,
};

ThemeProviderCustomized.defaultProps = {
  children: null,
};
