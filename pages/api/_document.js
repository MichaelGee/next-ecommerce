import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Provider as StyletronProvider } from 'styletron-react'
import { Styletron } from '../styletron.js'

class MyDocument extends Document {
  static async getInitialProps(context) {
    const renderPage = () =>
      context.renderPage({
        enhanceApp: (App) => (props) =>
          (
            <StyletronProvider value={Styletron}>
              <App {...props} />
            </StyletronProvider>
          ),
      })

    const initialProps = await Document.getInitialProps({
      ...context,
      renderPage,
    })
    const stylesheets = Styletron.getStylesheets() || []
    return { ...initialProps, stylesheets }
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={i}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument