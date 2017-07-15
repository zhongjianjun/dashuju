import publicInterface from './../services/publicInterface';

export default {
  namespace: 'datacenter',
  state: {},
  reducers: {
    concat(state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    *find({ payload }, { call, put }) {
      const datas = yield call(publicInterface.residence, payload);

      let data = datas.data || [];

    },
    // *sendVerificationCode({ payload }, { call, put }) {
    //   const datas = yield call(publicInterface.sendVerificationCode, payload);
    //   console.log(datas);
    //   let data = datas.data || [];

    // }
  },
  subscriptions: {

    // setup({ dispatch, history }) {
    //   return history.listen(({ pathname, query }) => {
    //     if (pathname === '/datacenter') {
    //       dispatch({ type: 'init' });
    //     }
    //   });
    // }


  },
};
