import request from '../utils/request';

const publicInterface = {

    //登陆注册管理

    //登陆
    login: (parameter) => {
        return request('user/login', {
            body: parameter
        })
    },
    //注册
    register: (parameter) => {
        return request('user/register', {
            body: parameter
        })
    },
    //修改密码
    modify: (parameter) => {
        return request('user/modify', {
            body: parameter
        })
    },
    //找回密码
    find: (parameter) => {
        return request('user/find', {
            body: parameter
        })
    },
    //发送验证码
    sendVerificationCode: (parameter) => {
        return request('sms/sendVerificationCode', {
            body: parameter
        })
    },
    //校验手机号是否唯一
    checkMobile: (parameter) => {
        return request('user/checkMobile', {
            body: parameter
        })
    },
    //验证码生成接口
    validateCode: (parameter) => {
        return request('rand/validateCode', {
            body: parameter,
        })
    },

    //商品房交易数据

    //新建商品住宅
    residence: (parameter) => {
        return request('apiserver/house/residence', {
            body: parameter
        })
    },
    //新建商住公寓
    apartment: (parameter) => {
        return request('apiserver/house/apartment', {
            body: parameter
        })
    },
    //商品房销售榜单
    salelist: (parameter) => {
        return request('apiserver/house/salelist', {
            body: parameter
        })
    },

    //土地交易数据

    //住宅用地
    houseland: (parameter) => {
        return request('apiserver/land/houseland', {
            body: parameter
        })
    },
    //商业用地
    businessland: (parameter) => {
        return request('apiserver/land/businessland', {
            body: parameter
        })
    },
    //土地成交榜单
    landsalelist: (parameter) => {
        return request('apiserver/land/landsalelist', {
            body: parameter
        })
    },

}
export default publicInterface;
