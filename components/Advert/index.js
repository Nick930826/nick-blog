import React from 'react'
import cx from 'classnames'
import styles from './style.less'

const Advert = ()=>{
  return (
    <div className={cx(styles.adDiv, styles.commBox)}>
      <div><img src="//s.weituibao.com/1578621067554/WeChat55a73177f75fc52bf56028c7ac90b115.png" width="100%" /></div>
      {/* <div><img src="//s.weituibao.com/1578063165814/timg.jpeg" width="100%" /></div>
      <div><img src="//s.weituibao.com/1578063165814/timg.jpeg" width="100%" /></div> */}
    </div>
  )
 }

 export default Advert