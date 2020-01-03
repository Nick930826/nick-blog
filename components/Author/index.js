import React from 'react'
import { Avatar, Divider } from 'antd'
import cx from 'classnames'
import styles from './style.less'

const Author =()=>{
    return (
        <div className={cx(styles.authorDiv, styles.commBox)}>
            <div> <Avatar size={100} src='//s.weituibao.com/1578017065654/avatar.jpeg'  /></div>
            <div className={styles.authorIntroduction}>
                大胡子程序员，专注于WEB和移动前端开发
                <Divider>社交账号</Divider>
                <Avatar size={28} icon='github' className={styles.account}  />
                <Avatar size={28} icon='qq' className={styles.account} />
                <Avatar size={28} icon='wechat' className={styles.account} />
            </div>
        </div>
    )

}

export default Author