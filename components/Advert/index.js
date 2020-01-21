import React from 'react'
import cx from 'classnames'
import styles from './style.less'

const Advert = ()=>{
  return (
    <div className={cx(styles.adDiv, styles.commBox)}>
      <div><img src="//s.weituibao.com/1579573755114/WeChatb58d100bfc0f6be51bbe8a9a1d30af9a.png" width="100%" /></div>
      {/* <div><img src="//s.weituibao.com/1578063165814/timg.jpeg" width="100%" /></div>
      <div><img src="//s.weituibao.com/1578063165814/timg.jpeg" width="100%" /></div> */}
    </div>
  )
 }

 export default Advert