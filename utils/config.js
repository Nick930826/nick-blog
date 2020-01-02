console.log(process.env.NODE_ENV)
const evn = {}

if (process.browser) {
  // 浏览器环境
  evn.isBrowser = true
  if (window.location.href.indexOf('local') > -1) {
    evn.isDev = true
  } else if (window.location.hostname.indexOf('www-dzn.yiwei.com') > -1) {
    evn.isBeta = true
  } else {
    evn.isOnline = true
  }
} else {
  evn.isServer = true
  // 服务器环境
  if (process.env.NODE_ENV == 'development') {
    evn.isDev = true
  } else if (process.env.isBeta) {
    evn.isBeta = true
  } else {
    evn.isOnline = true
  }
}

let requestBaseURL
let assetPrefix = ''
let pageDomain = ''

if (evn.isDev) {
  pageDomain = 'http://localhost:3001'
  requestBaseURL = '//127.0.0.1:7001'
  assetPrefix = ''
} else if (evn.isBeta) {
  pageDomain = 'http://www-dzn.yiwei.com'
  requestBaseURL = '//wapi-dzn.yiwei.com'
  assetPrefix = '//s.weituibao.com/beta/Ariel'
} else if (evn.isOnline) {
  pageDomain = 'http://blog.chennick.wang'
  requestBaseURL = '//47.99.134.126:7001'
  assetPrefix = '//s.weituibao.com/release/Ariel'
}

if (evn.isServer) {
  requestBaseURL = 'http:' + requestBaseURL
}

const config = {
  ...evn,
  pageDomain,
  requestBaseURL,
  assetPrefix,
  accountApi: evn.isOnline ? '//account.wxb.com' : '//account.beta.wxb.com',
  imgUploadProps: {
    showUploadList: false,
    withCredentials: true,
    multiple: false,
    accept: 'image/*',
    name: 'file',
    action: requestBaseURL + '/user/upload',
    headers: {
      // authorization: 'authorization-text',
    }
  },
  defaultLinkImg: '//s.weituibao.com/1569806943212/%E9%93%BE%E6%8E%A5.png',
  blankImg: '//s.weituibao.com/static/1544069321139/blank.png',
  defaultAvatar: '//s.weituibao.com/static/2019-08-08-%E7%94%A8%E6%88%B7%E9%BB%98%E8%AE%A4.png'
}

// console.log(config)

module.exports = config
