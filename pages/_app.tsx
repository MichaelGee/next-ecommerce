import '../styles/globals.css'
import { StyleReset, ThemeProvider } from 'atomize';
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron } from '../styletron'
import  mainTheme  from 'theme'


function MyApp({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron}>
      <ThemeProvider theme={mainTheme}>
        <StyleReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyletronProvider>
  )
}

export default MyApp
