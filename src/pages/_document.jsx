import React from 'react'
import Document, { Html, Main, Head, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <base href="/" />
          <meta name="robots" content="index,nofollow" />
          <meta name="author" content="LucasSites (lucassites.com.br)" />
          <meta name="copyright" content="VanishRoleplay" />
          <meta name="designer" content="LucasSites (lucassites.com.br)" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta property="og:title" content="VanishRoleplay" />
          <meta
            property="og:description"
            content="Somos um dos maiores servidores de mta da comunidade."
          />
          <meta property="og:url" content="https://vanishroleplay.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:image" content="/images/brand/favicon.png" />
          <meta property="twitter:image" content="/images/brand/favicon.png" />
          <meta property="twitter:card" content="summary" />
          <meta
            name="abstract"
            content="Somos um dos maiores servidores de mta da comunidade."
          />
          <meta
            name="description"
            content="Somos um dos maiores servidores de mta da comunidade."
          />
          <link rel="shortcut icon" href="/images/brand/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@0,400;0,700;1,500&family=Sora:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
