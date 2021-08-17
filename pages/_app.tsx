// import '../styles/globals.css'
import { StyleReset } from 'atomize';
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron } from '../styletron'

function MyApp({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron}>
      <StyleReset />
    <Component {...pageProps} />
    </StyletronProvider>
  )
}

export default MyApp
