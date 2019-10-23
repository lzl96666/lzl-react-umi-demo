import React from 'react'
import Link from 'umi/link'
import styles from './index.css'
import { Layout, Menu, Icon, Badge, Dropdown } from 'antd'
const { Header, Content, Footer } = Layout
export default function index(props) {
  const selectedKeys = [props.location.pathname]
  return (
    <div>
      <Layout>
        <Content>
          <Content className={styles.content}>
            <div className={styles.box}>{props.children}</div>
          </Content>
        </Content>
      </Layout>
    </div>
  )
}
