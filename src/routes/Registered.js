import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
const InputGroup = Input.Group;

import styles2 from '../index.css';
import styles from './Registered.css';

class Registereda extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }
    });
  }
    checkPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('两次输入的密码不一致');
      } else {
        callback();
      }
    }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.container}>
        <div className={styles2.wrap + " " + styles.content}>
          <div className={styles.tit_name}>欢迎注册筑家易房产数据中心</div>
          <div className={styles.form_box}>
            <Form onSubmit={this.handleSubmit}>
              <FormItem className={styles.form_item}>
                {getFieldDecorator("mobile", {
                  rules: [{ required: true, message: "请输入手机号码" },{pattern: /^1[34578]{1}\d{9}$/, message: "您输入的手机号有误" }]
                })(<Input className={styles.input} placeholder="请输入手机号码" />)}
              </FormItem>
              <FormItem className={styles.form_item}>
                {getFieldDecorator("password", {
                  rules: [{ required: true, message: "请输入登录密码" },{pattern: /^(\w){6,14}$/, message: "请输入6-14位字符的密码" }]
                })(<Input className={styles.input} type="password" placeholder="设置您的登录密码" />)}
              </FormItem>
              <FormItem className={styles.form_item}>
                {getFieldDecorator("confirm", {
                  rules: [{ required: true, message: "请再次输入您的登录密码" },{pattern: /^(\w){6,14}$/, message: "请输入6-14位字符的密码" }, {validator: this.checkPassword}]
                })(<Input className={styles.input} type="password" placeholder="请再次输入您的登录密码" />)}
              </FormItem>
              <FormItem className={styles.form_item}>
                <InputGroup>
                  {getFieldDecorator("authCode", {
                    rules: [{ required: true, message: "请输入短信验证码" }]
                  })(<Input style={{ width: '70%' }} className={styles.input} placeholder="请输入短信验证码" />)}
                  <a style={{ width: '30%' }} className={styles.search_btn}>获取验证码</a>
                </InputGroup>
              </FormItem>
              <FormItem className={styles.form_item}>
                {getFieldDecorator('agreement', {
                  valuePropName: 'checked',
                  rules: [{ required: true, message: "必须同意条款后才能注册" }]
                })(<Checkbox className={styles.checkbox}>同意接受<a>《筑家易数据中心条款》</a></Checkbox>)}
              </FormItem>
              <FormItem className={styles.form_item}>
                <Button type="primary" htmlType="submit" className={styles.button}>注册</Button>
              </FormItem>
              <div className={styles.have}>已有账号？直接<a href="/#/login">登录</a></div>
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
