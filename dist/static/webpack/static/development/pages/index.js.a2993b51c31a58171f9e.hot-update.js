webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/config.js":
/*!*************************!*\
  !*** ./utils/config.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _Object$defineProperties = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");

var _Object$getOwnPropertyDescriptors = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$getOwnPropertySymbols = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");

var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

console.log("development");
var evn = {};

if (true) {
  // 浏览器环境
  evn.isBrowser = true;

  if (window.location.href.indexOf('local') > -1) {
    evn.isDev = true;
  } else if (window.location.hostname.indexOf('www-dzn.yiwei.com') > -1) {
    evn.isBeta = true;
  } else {
    evn.isOnline = true;
  }
} else {}

var requestBaseURL;
var assetPrefix = '';
var pageDomain = '';

if (evn.isDev) {
  pageDomain = 'http://localhost:3001';
  requestBaseURL = '//127.0.0.1:7001';
  assetPrefix = '';
} else if (evn.isBeta) {
  pageDomain = 'http://www-dzn.yiwei.com';
  requestBaseURL = '//wapi-dzn.yiwei.com';
  assetPrefix = '//s.weituibao.com/beta/Ariel';
} else if (evn.isOnline) {
  pageDomain = 'http://blog.chennick.wang';
  requestBaseURL = '//http://47.99.134.126:7001';
  assetPrefix = '//s.weituibao.com/release/Ariel';
}

if (evn.isServer) {
  requestBaseURL = 'http:' + requestBaseURL;
}

var config = _objectSpread({}, evn, {
  pageDomain: pageDomain,
  requestBaseURL: requestBaseURL,
  assetPrefix: assetPrefix,
  accountApi: evn.isOnline ? '//account.wxb.com' : '//account.beta.wxb.com',
  imgUploadProps: {
    showUploadList: false,
    withCredentials: true,
    multiple: false,
    accept: 'image/*',
    name: 'file',
    action: requestBaseURL + '/user/upload',
    headers: {// authorization: 'authorization-text',
    }
  },
  defaultLinkImg: '//s.weituibao.com/1569806943212/%E9%93%BE%E6%8E%A5.png',
  blankImg: '//s.weituibao.com/static/1544069321139/blank.png',
  defaultAvatar: '//s.weituibao.com/static/2019-08-08-%E7%94%A8%E6%88%B7%E9%BB%98%E8%AE%A4.png'
}); // console.log(config)


module.exports = config;

/***/ })

})
//# sourceMappingURL=index.js.a2993b51c31a58171f9e.hot-update.js.map