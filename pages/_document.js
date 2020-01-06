import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return <html lang='zh-cmn-Hans'>
      <Head>
        <title>前端烂笔头</title>
        <meta name="description" content="前端烂笔头"></meta>
        <link rel='icon' href='//s.weituibao.com/1578044053340/favicon.ico' />
        <link rel='stylesheet' href='//s.weituibao.com/1578062291368/nprogress.css' />
      </Head>
      <body >
        <Main />
        <NextScript />
        <script src='/static/baidutongji.js'></script>
      </body>
    </html>
  }
}
