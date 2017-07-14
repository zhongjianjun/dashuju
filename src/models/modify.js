import publicInterface from './../services/publicInterface';

export default {
  namespace: 'modify',
  state: {},
  reducers: {
  },
  effects: {
    *modify({ payload }, { call, put }) {
      const datas = yield call(publicInterface.modify, payload);
      let data = datas.data || [];
    }
  },
  subscriptions: {
  },
};
