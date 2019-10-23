import React from 'react'
import Link from 'umi/link'
import styles from './index.css'
import { Layout, Menu, Icon, Badge, Dropdown } from 'antd'
const { Header, Content, Footer } = Layout
export default function index(props) {
  console.log(props)
  const { pathname } = props.location
  const menus = [
    {
      path: '/',
      name: '商品'
    },
    {
      path: '/users',
      name: '用户'
    },
    {
      path: '/about',
      name: '关于'
    }
  ]
  const selectedKeys = menus
    .filter(menu => {
      if (menu.path === '/') {
        return pathname === '/'
      }
      return pathname.startsWith(menu.path)
    })
    .map(menu => menu.path)

  return (
    <div>
      <Layout>
        <Header className={styles.header}>
          <img
            className={styles.logo}
            src="https://img.kaikeba.com/logo-new.png"
          />
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={selectedKeys}
            style={{ lineHeight: '64px', float: 'left' }}
          >
            <Menu.Item key="/">
              <Link to="/">商品</Link>
            </Menu.Item>
            <Menu.Item key="/users">
              <Link to="/users">用户</Link>
            </Menu.Item>
            <Menu.Item key="/about">
              <Link to="/about">关于</Link>
            </Menu.Item>
          </Menu>
          <Dropdown placement="bottomRight">
            <div style={{ float: 'right' }}>
              <Icon type="shopping-cart" style={{ fontSize: 18 }} />
              <span>我的购物车</span>
              <Badge count={props.count} offset={[-4, -18]} />
            </div>
          </Dropdown>
        </Header>
        <Content>
          <Content className={styles.content}>
            <div className={styles.box}>{props.children}</div>
          </Content>
        </Content>
        <Footer className={styles.footer}>尾部</Footer>
      </Layout>
    </div>
  )
}
