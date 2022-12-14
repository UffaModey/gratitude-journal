import '../styles/globals.css'

import { Amplify, Auth, API } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'

import config from '../src/aws-exports'

import { AmplifyProvider } from '@aws-amplify/ui-react'
import { studioTheme } from '../src/ui-components'

import '@aws-amplify/ui-react/styles.css'

Amplify.configure(config)

function MyApp({ Component, pageProps }) {
  return <AmplifyProvider theme={studioTheme}>
    <Component {...pageProps} /></AmplifyProvider>
}

export default withAuthenticator(MyApp);
