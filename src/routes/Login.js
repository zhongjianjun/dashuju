import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
const InputGroup = Input.Group;

import styles2 from '../index.css';
import styles from './Registered.css';

class Registereda extends React.Component {
  handleClick = (props) => {
      this.props.dispatch({
        type: 'login/init'
      })
  }
  handleSubmit = (e) => {
    let imgKeys = this.props.login.imgKey
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.props.dispatch({
        type: 'login/login',
        payload: {
          ...values,
          imgKey: imgKeys
        }
      })
    });
  }
  render() {
    const { codeUrl, imgKey } = this.props.login;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.container}>
        <div className={styles2.wrap + " " + styles.content}>
          <div className={styles.tit_name}>欢迎登录筑家易房产数据中心</div>
          <div className={styles.form_box}>
            <Form onSubmit={this.handleSubmit}>
              <FormItem className={styles.form_item}>
                {getFieldDecorator("mobile", {
                  rules: [{ required: true, message: "请输入手机号码" }, { pattern: /^1[34578]{1}\d{9}$/, message: "您输入的手机号有误" }]
                })(<Input className={styles.input} placeholder="请输入手机号码" />)}
              </FormItem>
              <FormItem className={styles.form_item}>
                {getFieldDecorator("password", {
                  rules: [{ required: true, message: "请输入登录密码" }, { pattern: /^(\w){6,14}$/, message: "请输入6-14位字符的密码" }]
                })(<Input className={styles.input} type="password" placeholder="请输入登录密码" />)}
                <a className={styles.forget_pwd} href="/#/getback">忘记密码？</a>
              </FormItem>
              <FormItem className={styles.form_item}>
                <InputGroup>
                  {getFieldDecorator("authCode", {
                    rules: [{ required: true, message: "请输入验证码" }]
                  })(<Input style={{ width: '70%' }} className={styles.input} placeholder="请输入验证码" />)}
                  <a style={{ width: '30%', backgroundColor: '#fff' }} className={styles.search_btn} onClick={this.handleClick.bind(this)}><img className={styles.code_img} src={'data:image/jpg;base64,'+ codeUrl} /></a>
                </InputGroup>
              </FormItem>
              <FormItem className={styles.form_item}>
                <Button type="primary" htmlType="submit" className={styles.button}>登录</Button>
              </FormItem>
              <div className={styles.have}>没有账号？<a href="/#/registered">免费注册</a></div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
const Registered = Form.create()(Registereda);

function mapStateToProps(state) {
  return {...state};
}
export default connect(mapStateToProps)(Registered);
