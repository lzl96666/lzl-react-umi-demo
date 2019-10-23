import Redirect from 'umi/redirect'
import { connect } from 'dva'
import { Button } from 'antd'

export default connect(
  state => ({
    isLogin: !!state.user.token,
    username: state.user.username
  }),
  {
    logout: () => ({
      type: 'user/logout'
    })
  }
)(props => {
  if (!props.isLogin) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location.pathname }
        }}
      ></Redirect>
    )
  }
  return (
    <div>
      你好,{props.username}!
      <Button type="danger" onClick={() => props.logout()}>
        退出登录
      </Button>
      <div>{props.children}</div>
    </div>
  )
})
