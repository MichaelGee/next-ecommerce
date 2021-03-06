import '../styles/globals.css'
import { StyleReset, ThemeProvider } from 'atomize';
import { Provider as StyletronProvider } from 'styletron-react'
import { Styletron } from '../styletron.js'
import  mainTheme  from 'theme'
import { ModalProvider } from 'contexts/ModalContext';


function MyApp({ Component, pageProps }) {
  return (
    <StyletronProvider value={Styletron}>
      <ModalProvider>
      <ThemeProvider theme={mainTheme}>
        <StyleReset />
        <Component {...pageProps} />
      </ThemeProvider>
      </ModalProvider>
    </StyletronProvider>
  )
}

export default MyApp
