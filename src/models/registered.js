import publicInterface from './../services/publicInterface';

export default {
  namespace: 'registered',
  state: {},
  reducers: {
    // concat(state, { payload }) {
    //   return { ...state, ...payload };
    // }
  },
  effects: {
    *register({ payload }, { call, put }) {
      const datas = yield call(publicInterface.register, payload);

      let data = datas.data || [];

    },
    *sendVerificationCode({ payload }, { call, put }) {
      const datas = yield call(publicInterface.sendVerificationCode, payload);
      console.log(datas);
      let data = datas.data || [];

    }
  },
  subscriptions: {
  },
};
