// ** Next Imports
import Head from 'next/head'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// ** Global css styles
import '../../styles/globals.css'

import ErrorBoundary from 'src/components/error-boundary'

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
}

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>{`PREPTEST`}</title>
        <meta name='description' content={`PREPTEST`} />
        <meta name='keywords' content='Preptest Techinal Test, Preptest' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta name='author' content='BFZ' />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow' />
      </Head>

      <ErrorBoundary fallback={<h1>ERROR BOUNDARY ERROR</h1>}>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  )
}

export default App
