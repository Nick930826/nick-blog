import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Row, Col, List, Icon } from 'antd'
import { article } from 'services'
import moment from 'moment'
import { Header, Author, Advert, Footer } from 'components'
import styles from './style.less'

const Home = ({ list = [] }) => {
  const [ mylist, setMylist ] = useState(list)
  useEffect(() => {
    setMylist(list)
  }, [])
  return <div className={styles.home}>
    <Head>
      <title>首页</title>
    </Head>
    <Header />
    <Row className={styles.main} type='flex' justify='center'>
      <Col className={styles.left} xs={24} sm={24} md={16} lg={18} xl={14}>
        <List
          header={<div className={styles.headerTitle}>最新文章</div>}
          itemLayout={'vertical'}
          dataSource={mylist}
          renderItem={item => (
            <List.Item>
              <div className={styles.listTitle}>
                <Link href={{pathname:'/detail',query:{id:item.id}}}>
                  <a>{item.title}</a>
                </Link>
              </div>
              <div className={styles.listIcon}>
                <span><Icon type='calendar' /> {moment(item.addTime).format('YYYY-MM-DD')}</span>
                {/* <span><Icon type='folder' />{item.type_id}</span> */}
                <span><Icon type='eye' /> {item.view_count}人</span>
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

Home.getInitialProps = async () => {
  const result  = await article.list()
  if (result && result.length) result.sort((a, b) => b.id - a.id)
  return { list: result }
}

export default Home