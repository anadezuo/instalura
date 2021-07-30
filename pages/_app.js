import { GlobalStyle } from '../src/components/UI/GlobalStyle';
import { HeadTab } from '../src/components/Head';
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeadTab />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
