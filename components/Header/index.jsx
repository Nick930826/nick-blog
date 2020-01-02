import React, { useState, useEffect } from 'react'
import { Row, Col, Menu, Icon } from 'antd'
import Router from 'next/router'
import { article } from 'services'
import styles from './style.less'

const Header = ({  }) => {
  const [types, setType] = useState([])
  useEffect(() => {
    article.type().then(res => {
      setType(res)
    })
  }, [])

  const handleClick = (e)=>{
    if(e.key==0){
      Router.push('/')
    }else{
      Router.push('/list?id='+e.key)
    }
  }

  return <div className={styles.header}>
    <Row type='flex' justify='center'>
      <Col xs={24} sm={24} md={10} lg={15} xl={12}>
        <span className={styles.logo}>尼克陈</span>
        <span className={styles.txt}>专注前端开发</span>
      </Col>
      <Col className={styles.menu} xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu onClick={handleClick} mode='horizontal'>
          <Menu.Item key="0">
            <Icon type="home" />
            博客首页
          </Menu.Item>
          {
            types.map(item => {
              return <Menu.Item key={item.id}>
                <Icon type={item.icon}></Icon>
                {item.typeName}
              </Menu.Item>
            })
          }
        </Menu>
      </Col>
    </Row>
  </div>
}

export default Header


