import api from '@/api/index'

// api
function getGoods() {
  let obj = {
    aaa: 111
  }
  return api.getJson('/goods', obj).then(({ data }) => {
    return {
      courses: data.courseData.data,
      tags: data.courseData.tags
    }
  })
}

export default {
  namespace: 'goods',
  state: {
    courses: {},
    tags: []
  },
  effects: {
    *getList(action, { call, put }) {
      const payload = yield call(getGoods)
      yield put({ type: 'initGoods', payload })
    }
  },
  reducers: {
    initGoods(state, { payload }) {
      return payload
    }
  }
}
