import React from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Icon, Tabs, Row, Col, Table, Button, Radio } from 'antd';
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

import styles2 from '../index.css';
import styles from './DataCenter.css';


function DataCenter() {
  function pageChange(page, pageSize){
    console.log(page, pageSize);
  }
  const menu = (
    <Menu>
      <SubMenu title={<span>商品房交易数据</span>}>
        <Menu.Item>新建商品住宅</Menu.Item>
        <Menu.Item>新建商住公寓</Menu.Item>
        <Menu.Item>销售榜单</Menu.Item>
      </SubMenu>
      <SubMenu title={<span>土地交易数据</span>}>
        <Menu.Item>新建商品住宅22</Menu.Item>
        <Menu.Item>新建商住公寓</Menu.Item>
        <Menu.Item>销售榜单</Menu.Item>
      </SubMenu>
    </Menu>
  );
  const citymenu = (
    <Menu>
      <Menu.Item>杭州</Menu.Item>
      <Menu.Item>上海</Menu.Item>
      <Menu.Item>广州</Menu.Item>
      <Menu.Item>北京</Menu.Item>
      <Menu.Item>深圳</Menu.Item>
    </Menu>
  );
  const personmenu = (
    <Menu>
      <Menu.Item>1312345****</Menu.Item>
      <Menu.Item><a href="/#/modify"><Icon type="edit" /> 修改密码</a></Menu.Item>
      <Menu.Item><a><Icon type="logout" /> 退出</a></Menu.Item>
    </Menu>
  );

const division = (
  <Menu>
    <Menu.Item>按楼盘</Menu.Item>
    <Menu.Item>普通住宅</Menu.Item>
    <Menu.Item>普通住宅</Menu.Item>
  </Menu>
);

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">Action 一 {record.name}</a>
      <span className="ant-divider" />
      <a href="#">Delete</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];
const paginationProps={
  showTotal: total => `Total ${total} items`,
  onChange: pageChange,
  total: 100,
}

  return (
    <div>
      <div className={styles.two_nav}>
        <div className={styles2.wrap}>
          <div className={styles.dropdown}>
            <Dropdown overlay={menu}>
              <a className={styles.ant_dropdown_link} href="javascript:;"><Icon type="bars" /> 全部导航</a>
            </Dropdown>
          </div>
          <div className={styles.two_nav_right}>
            <div className={styles.city_dropdown}>
              <Dropdown overlay={citymenu}>
                <a className={styles.ant_dropdown_link} href="javascript:;"><Icon type="environment-o" /><span className={styles.city_name}>杭州</span><Icon type="down" /></a>
              </Dropdown>
            </div>
            <div className={styles.person_dropdown}>
              <Dropdown overlay={personmenu}>
                <a className={styles.ant_dropdown_link} href="javascript:;"> <img className={styles.avatar_img} src={require('../assets/avatar.png')} /> </a>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.header_banner}>
        <div className={styles2.wrap + " " + styles.header_name}>商品房交易数据</div>
      </div>
      <div className={styles2.wrap}>
        <div className={styles.content_box}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="新建商品住宅" key="1">

              <div>
                <span>时间周期：</span>
                <a>近一周</a>
              </div>
              <Row className={styles.tit_box}>
                <Col span={12}><div className={styles.tit_list}><span className={styles.tit_name}>所选时段：</span>2017/06/01 - 2017/06/07</div></Col>
                <Col span={12}><div className={styles.tit_list}><span className={styles.tit_name}>排序：</span>按签约套数降序</div></Col>
              </Row>
              <Row className={styles.table_box}>
                <Col span={24}><Table columns={columns} dataSource={data} pagination={paginationProps}/></Col>
              </Row>
            </TabPane>
            <TabPane tab="新建商住公寓" key="2">
              <div className={styles.show_more}>
                <Icon className={styles.show_icon} type="solution" />
                <div className={styles.show_info}>想查看更多详细内容，请登录数据中心</div>
                <a className={styles.show_btn} href="">免费注册</a>
                <div className={styles.login_info}>已有帐号？直接<a className={styles.login_btn} href="">登录</a></div>
              </div>
            </TabPane>
            <TabPane tab="销售榜单" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
          <div className={styles.division_dropdown}>
            <Dropdown overlay={division}>
              <a className={styles.ant_dropdown_link} href="javascript:;">按行政区 <Icon className={styles.division_icon} type="down" /></a>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(DataCenter);
