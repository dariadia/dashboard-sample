import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { SSRProvider } from 'react-bootstrap'
import '@styles/globals.scss'

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return <SSRProvider><Component {...pageProps} /></SSRProvider>
}

export default MyApp
