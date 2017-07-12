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
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.container}>
        <div className={styles2.wrap + " " + styles.content}>
          <div className={styles.tit_name}>找回密码</div>
          <div className={styles.form_box}>
            <Form onSubmit={this.handleSubmit}>
              <FormItem className={styles.form_item}>
                {getFieldDecorator("mobile", {
                  rules: [{ required: true, message: "请输入手机号码" }]
                })(<Input className={styles.input} placeholder="请输入注册的手机号码" />)}
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
                {getFieldDecorator("password", {
                  rules: [{ required: true, message: "请输入新的密码" }]
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
