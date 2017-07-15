import publicInterface from './../services/publicInterface';

export default {
  namespace: 'registered',
  state: {
    isExist: false
  },
  reducers: {
    concat(state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    *register({ payload }, { call, put }) {
      const datas = yield call(publicInterface.register, payload);
      let data = datas.data || [];
    },
    *sendVerificationCode({ payload }, { call, put }) {
      const datas = yield call(publicInterface.sendVerificationCode, payload);
      let data = datas.data || [];
    },
    *checkMobile({ payload }, { call, put }) {
      const datas = yield call(publicInterface.checkMobile, payload);
      let data = datas.data || [];
      yield put({
        type: 'concat',
        payload: {
          isExist: data.isExist || '',
        },
      });
    }
  },
  subscriptions: {
  },
};
