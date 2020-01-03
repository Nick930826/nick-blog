import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return <html lang='zh-cmn-Hans'>
      <Head>
        <link rel='icon' href='//s.weituibao.com/1578044053340/favicon.ico' />
      </Head>
      <body >
        <Main />
        <NextScript />
      </body>
    </html>
  }
}
