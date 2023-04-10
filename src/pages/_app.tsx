import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { store } from '@/store/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Next Typed React</title>
        <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}
