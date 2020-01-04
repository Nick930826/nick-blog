import React from 'react'
import { Avatar, Divider, Tooltip } from 'antd'
import cx from 'classnames'
import styles from './style.less'

const Author = () => {
  return (
    <div className={cx(styles.authorDiv, styles.commBox)}>
        <div> 
            <Avatar size={100} src='//s.weituibao.com/1578017065654/avatar.jpeg' />
        </div>
        <div className={styles.authorIntroduction}>
            <span className={styles.nick}>大胡子程序员，专注于WEB和移动前端开发</span>
            <Divider>社交账号</Divider>
            <a target='_blank' href='https://github.com/Nick930826'>
              <Avatar size={28} icon='github' className={styles.account}  />
            </a>
            <a target='_blank' href='https://www.zhihu.com/people/chen-xian-you-74/activities'>
              <Avatar size={28} icon='zhihu' className={styles.account} />
            </a>
            <Tooltip placement='top' title={'469817767'}>
              <Avatar size={28} icon='qq' className={styles.account} />
            </Tooltip>
        </div>
    </div>
  )
}

export default Author