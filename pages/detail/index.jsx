import React, {useState} from 'react'
import Head from 'next/head'
import {Row, Col, Icon, Breadcrumb, Affix } from 'antd'
import cx from 'classnames'
import moment from 'moment'
import marked from 'marked'
import hljs from "highlight.js"

import { article } from 'services'
import { Header, Author, Advert, Footer, Tocify } from 'components'



import styles from './style.less'
import 'highlight.js/styles/monokai-sublime.css';


let markdown='# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'

const Detail = ({ detail = {} }) => {
  const renderer = new marked.Renderer();
  const [ myDetail, setDetail ] = useState(detail)
  const tocify = new Tocify()
  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
  marked.setOptions({
    renderer: renderer, 
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  }); 

  let html = marked(markdown)

  
  return (
    <div className={styles.detail}>
      <Head>
        <title>博客详细页</title>
      </Head>
      <Header />
      <Row className={styles.main} type='flex' justify='center'>
        <Col className={styles.left} xs={24} sm={24} md={16} lg={18} xl={14}  >
            <div>
              <div className={styles.breadDiv}>
                <Breadcrumb>
                  <Breadcrumb.Item><a href='/'>首页</a></Breadcrumb.Item>
                  <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                  <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div>
                <div className={styles.detailTitle}>
                {myDetail.title}
                </div>
                <div className={cx(styles.listIcon)}>
                  <span><Icon type='calendar' />{moment(myDetail.addTime).format('YYYY-MM-DD HH:mm:ss')}</span>
                  <span><Icon type='folder' />{myDetail.type_id}</span>    
                  <span><Icon type='fire' /> {myDetail.view_count || 0}人</span>
                </div>
                <div className={styles.detailContent} dangerouslySetInnerHTML={{ __html: html }}>
                  
                </div>
              </div>
            </div>
        </Col>
        <Col className={styles.right} xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className={cx(styles.detailNav, styles.Box)}>
              <div className={styles.navTitle}>文章目录</div>
                <div className="toc-list">
                  {tocify && tocify.render()}
                </div>
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer/>
   </div>
  )
}

Detail.getInitialProps = async (context) =>{
  let id =context.query.id
  const result = await article.detail({ id: id })
  console.log('result', result)
  return {
    detail: result
  }
}

export default Detail
