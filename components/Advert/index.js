import React from 'react'
import cx from 'classnames'
import styles from './style.less'

const Advert = ()=>{
  return (
    <div className={cx(styles.adDiv, styles.commBox)}>
      <h2>如果文章对你有帮助，可以给作者一点鼓励。这将是作者持续输出的动力.</h2>
      <div><img src="//s.weituibao.com/1595662844463/2421595662835_.pic.jpg" width="100%" /></div>
      {/* <div><img src="//s.weituibao.com/1578063165814/timg.jpeg" width="100%" /></div>
      <div><img src="//s.weituibao.com/1578063165814/timg.jpeg" width="100%" /></div> */}
    </div>
  )
 }

 export default Advert