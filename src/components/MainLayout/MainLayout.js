import React from 'react';
import { Row, Col } from 'antd';


import styles0 from './Layout2.css';
import styles1 from './MainLayout.css';

import styles3 from './Layout3.css';


import styles2 from '../../index.css';


function MainLayout({ children }) {
	var styles;
	var url=window.location.href;
	if(url.indexOf('registered')>-1 || url.indexOf('login')>-1 || url.indexOf('getback')>-1 || url.indexOf('modify')>-1 ){
		styles=styles0
	}else if(url.indexOf('datacenter')>-1){
		styles=styles3
	}else{
		styles=styles1
	}
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles2.wrap + " " + styles2.clearfix}>
					<Row>
						<Col xs={6}>
							<div className={styles.logo_box + " " + styles2.clearfix}>
								<a href="/">
									<img className={styles.logo_img} src={require('../../assets/logo.png')} />
									<div className={styles.logo_text}>数据中心</div>
								</a>
							</div>
						</Col>
						<Col xs={18}>
							<div className={styles.header_right + " " + styles2.clearfix}>
								<ul className={styles.nav_box + " " + styles2.clearfix}>
									<li className={styles.nav_list}><a className={styles.nav_link} href="/">数据首页</a></li>
									<li className={styles.nav_list}><a className={styles.nav_link} href="http://www.zje.com">筑家易官网</a></li>
									<li className={styles.nav_list}><a className={styles.nav_link} href="">筑家易房产</a></li>
									<li className={styles.nav_list}><a className={styles.nav_link} href="http://www.tfang360.com">团房网</a></li>
									<li className={styles.nav_list}><a className={styles.nav_link} href="">民生好房</a></li>
								</ul>
								<div className={styles.header_btn}>
									<a className={styles.btn_list + " " + styles.registered} href="/#/registered">注册</a>
									<a className={styles.btn_list + " " + styles.login} href="/#/login">登录</a>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
			<div className={styles.main_cont}>{children}</div>
			<div className={styles.footer}>
				<div className={styles.foot_info}>
					<div className={styles2.wrap + " " + styles2.clearfix}>
						<Row>
							<Col xs={6}>
								<dl className={styles.foot_infos + " " + styles2.clearfix}>
									<dt className={styles.foot_info_l}><img className={styles.code_img} src={require('../../assets/qrcode_01.png')} /></dt>
									<dd className={styles.foot_info_r}>
										<h3 className={styles.info_name}>手机版</h3>
										<p className={styles.info_list}>扫描二维码</p>
										<p className={styles.info_list}>一手掌握楼市</p>
									</dd>
								</dl>
							</Col>
							<Col xs={6}>
								<dl className={styles.foot_infos + " " + styles2.clearfix}>
									<dt className={styles.foot_info_l}><img className={styles.code_img} src={require('../../assets/qrcode_02.png')} /></dt>
									<dd className={styles.foot_info_r}>
										<h3 className={styles.info_name}>微信公众号</h3>
										<p className={styles.info_list}>掌上筑家易</p>
										<p className={styles.info_list}>慧眼看楼市</p>
									</dd>
								</dl>
							</Col>
							<Col xs={12}>
								<dl className={styles.foot_infos + " " + styles2.clearfix + " " + styles2.fr}>
									<dd className={styles.foot_info_r}>
										<h3 className={styles.info_name}>客服热线：4000-888-365</h3>
										<p className={styles.info_list}>筑家易帮您轻松查找房产、查楼盘、查房价、获取地产交易信息</p>
										<p className={styles.info_list}>越信赖，越贴心</p>
									</dd>
								</dl>
							</Col>
						</Row>
					</div>
				</div>
				<div className={styles.copyright}>
					<div className={styles2.wrap}>
						<Row>
							<Col xs={24}>Copyright © 筑家易 2006-2017 All Rights Reserved 浙B2-20120011 浙ICP备1107657号-12</Col>
						</Row>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainLayout;
