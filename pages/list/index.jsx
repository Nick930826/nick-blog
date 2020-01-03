import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Row, Col, List, Icon, Breadcrumb } from 'antd'
import moment from 'moment'
import { article } from 'services'
import { Header, Author, Advert, Footer } from 'components'
import styles from './style.less'

const typeMap = ['视频教程', '文章', '生活']

const MyList = ({ list = [], id }) => {
  const [myList, setList] = useState(list)
  useEffect(() => {
    setList(list)
  }, [])
  return <div className={styles.list}>
    <Head>
      <title>List</title>
    </Head>
    <Header />
    <Row className={styles.main} type='flex' justify='center'>
      <Col className={styles.left} xs={24} sm={24} md={16} lg={18} xl={14}>
        <div className={styles.bread}>
          <Breadcrumb>
            <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
            {/* <Breadcrumb.Item>{typeMap[Number(id) - 2]}</Breadcrumb.Item> */}
          </Breadcrumb>
        </div>
        <List
          itemLayout={'vertical'}
          dataSource={myList}
          renderItem={item => (
            <List.Item key={item.id}>
              <div className={styles.listTitle}>
                <Link href={{pathname:'/detail',query:{id:item.id}}}>
                  <a>{item.title}</a>
                </Link>
              </div>
              <div className={styles.listIcon}>
                <span><Icon type='calendar' />{moment(item.addTime).format('YYYY-MM-DD')}</span>
                <span><Icon type='folder' />{item.type_id}</span>
                <span><Icon type='fire' /> {item.view_count}人</span>
              </div>
              <div className={styles.listContext}>{item.introduce}</div>
            </List.Item>
          )}
        />
      </Col>
      <Col className={styles.right} xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author />
        <Advert />
      </Col>
    </Row>
    <Footer />
  </div>
}

MyList.getInitialProps = async ()=>{
  const result  = await article.list()
  return { list: result.data }
}

export default MyList