import App from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import './comm.css'

Router.onRouteChangeStart = () => {
  console.log(1111)
  NProgress.start()
}
Router.onRouteChangeComplete = (url) => {
  NProgress.done()
  if (process.env.NODE_ENV !== 'production') {
    const els = document.querySelectorAll('link[href*="/_next/static/css/styles.chunk.css"]')
    const timestamp = new Date().valueOf()
    els[0].href = '/_next/static/css/styles.chunk.css?v=' + timestamp
  }
}

export default App