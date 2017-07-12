import publicInterface from './../services/publicInterface';

import { routerRedux } from 'dva/router';
export default {
  namespace: 'login',
  state: {
    token: ""
  },
  reducers: {
    // concat(state, { payload }) {
    //   return { ...state, ...payload };
    // }
  },
  effects: {
    *init({ payload }, { call, put }) {
      const { data } = yield call(publicInterface.validateCode, payload);
      console.log(data);
      // yield put({
      //   type: 'concat',
      //   payload: {
      //   },
      // });
    },
    *login({ payload }, { call, put }) {
      const datas = yield call(publicInterface.login, payload);

      let data = datas.data || [];

      //存入token
      for (let x in data) {
        if (data[x] && typeof data[x] !== 'object') {
          document.cookie = x + "=" + data[x];
        } else {
          for (let y in data[x]) {
            document.cookie = y + "=" + data[x][y];
          }
        }
      }
      if (datas.code == 20000) {
        yield put(routerRedux.push('#/'));
      }
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/login') {
          dispatch({ type: 'init' });
        }
      });
    }
  },
};
