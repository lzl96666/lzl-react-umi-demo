import api from '@/api/index'
import router from 'umi/router'

const userinfo = JSON.parse(localStorage.getItem('userinfo')) || {
  token: '',
  role: '',
  username: '',
  banlace: 0
}

// api
function login(payload) {
  return api.postJson('/login', payload).then(res => {
    return { code: res.data.code, userinfo: res.data.data }
  })
}

export default {
  namespace: 'user',
  // model的命名空间，区分多个model
  state: userinfo,
  // 初始状态
  effects: {
    // 异步操作
    *login({ payload, from }, { call, put }) {
      try {
        const { code, userinfo } = yield call(login, payload)
        if (code == '200') {
          localStorage.setItem('userinfo', JSON.stringify(userinfo))
          yield put({ type: 'init', payload: userinfo })
          // router.push('/')
          if (from) {
            router.push(from)
          } else {
            router.push('/')
          }
        } else {
          alert('账号或密码错误')
        }
      } catch (error) {}
    }
  },

  reducers: {
    // 更新状态
    init(state, action) {
      console.log('init')
      // 覆盖旧状态
      return action.payload
    },
    logout(state) {
      alert('logout')
      const test = {
        token: '',
        role: '',
        username: '',
        banlace: 0
      }
      // 删除
      localStorage.removeItem('userinfo')
      // // 回到首页
      // router.push('/')
      return test
    }
  }
}
