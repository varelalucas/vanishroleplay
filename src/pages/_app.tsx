import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import NextNProgress from 'nextjs-progressbar'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/app.css'

import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <NextNProgress
        color={theme.colors.clrPrimary}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
