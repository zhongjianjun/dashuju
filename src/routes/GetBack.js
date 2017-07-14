import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
const InputGroup = Input.Group;

import styles2 from '../index.css';
import styles from './Registered.css';

class Registereda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verificationCodeType: "1",
      count: 60,
      liked: true
    };
  }
  handleClick = (e) => {
    e.preventDefault();
    let verificationCodeType = this.state.verificationCodeType;
    let codeProps = this.props;
    this.props.form.validateFields(['mobile'], function (errors, values) {
      if (errors) {
        return;
      }
      codeProps.dispatch({
        type: 'registered/sendVerificationCode',
        payload: {
          mobile: values.mobile,
          verificationCodeType: verificationCodeType
        }
      })
      console.log(values.mobile, verificationCodeType);
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.props.dispatch({
        type: 'getback/find',
        payload: {
          ...values,
          //verificationCodeType: this.state.verificationCodeType
        }
      })
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    let text = this.state.liked ? '获取验证码' : this.state.count + '秒后重发';
    return (
      <div className={styles.container}>
        <div className={styles2.wrap + " " + styles.content}>
          <div className={styles.tit_name}>找回密码</div>
          <div className={styles.form_box}>
            <Form onSubmit={this.handleSubmit}>
              <FormItem className={styles.form_item}>
                {getFieldDecorator("mobile", {
                  rules: [{ required: true, message: "请输入手机号码" }, { pattern: /^1[34578]{1}\d{9}$/, message: "您输入的手机号有误" }]
                })(<Input className={styles.input} placeholder="请输入注册的手机号码" />)}
              </FormItem>
              <FormItem className={styles.form_item}>
                <InputGroup>
                  {getFieldDecorator("authCode", {
                    rules: [{ required: true, message: "请输入短信验证码" }]
                  })(<Input style={{ width: '70%' }} className={styles.input} placeholder="请输入短信验证码" />)}
                  <a style={{ width: '30%' }} className={styles.search_btn} onClick={this.handleClick.bind(this)} disabled={!this.state.liked}>{text}</a>
                </InputGroup>
              </FormItem>
              <FormItem className={styles.form_item}>
                {getFieldDecorator("password", {
                  rules: [{ required: true, message: "请输入新的密码" }, { pattern: /^(\w){6,14}$/, message: "请输入6-14位字符的密码" }]
                })(<Input className={styles.input} type="password" placeholder="请输入新的密码" />)}
              </FormItem>
              <FormItem className={styles.form_item}>
                <Button type="primary" htmlType="submit" className={styles.button}>确定</Button>
              </FormItem>
              <div className={styles.have}>想起密码？<a href="/#/login">直接登录</a>&nbsp;&nbsp;&nbsp;没有账号？<a href="/#/registered">免费注册</a></div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
const Registered = Form.create()(Registereda);
function mapStateToProps() {
  return {};
}
export default connect(mapStateToProps)(Registered);
