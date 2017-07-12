import { login } from '../services/publicInterface';

export default {
  namespace: 'registered',
  state: {},
  reducers: {
    concat(state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    *init({ payload }, { call, put }) {
      yield put({ type: 'getList' });
    },
    *getList({ payload }, { call, put }) {
      const { data } = yield call(proList, payload);
      yield put({
        type: 'concat',
        payload: {
          list: data.list || [],
          totalCount: data.totalCount || ''
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/registered') {
          dispatch({ type: 'init' });
        }
      });
    }
  },
};
