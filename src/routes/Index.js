import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';

import styles from './Index.css';
import styles2 from '../index.css';

function Index() {
  return (
    <div className={styles.container}>
	    <div className={styles.banner_box}>
	    	<div className={styles2.wrap+" "+styles2.clearfix+" "+styles.banner_info}>
	    		<div className={styles.info_main}>筑家易房产数据中心</div>
	    		<div className={styles.info_mian2}>专业<span className={styles.point}>·</span>准确<span className={styles.point}>·</span>及时</div>
	      		<a className={styles.use_btn} href="/#/datacenter">立即使用</a>
	      	</div>
	    </div>
		<div className={styles.product_box+" "+styles2.wrap}>
			<Row>
				<Col xs={8}>
					<div className={styles.product_list}>
						<div className={styles.product_name}>产品介绍</div>
						<div className={styles.product_info}>筑家易集团致力于围绕“客户价值”、打造“从房到家”的房地产生态链,旗下的房产数据中心旨在为购房客户、经纪人以及地产业内人士提供实时的数据服务。</div>
					</div>
				</Col>
				<Col xs={8}>
					<div className={styles.product_list}>
						<div className={styles.product_name}>产品介绍</div>
						<div className={styles.product_info}><img className={styles.app_code} src={require('../assets/app_code.png')}/></div>
					</div>
				</Col>
				<Col xs={8}>
					<div className={styles.product_list}>
						<div className={styles.product_name}>联系我们</div>
						<div className={styles.product_info}>咨询热线：4000-888-365</div>
					</div>
				</Col>
			</Row>
		</div>

		<div className={styles.features_box}>
			<div className={styles2.wrap+" "+styles.features_cont}>
				<div className={styles.title_name}>核心功能</div>
				<Row>
					<Col xs={14}>
						<div className={styles.features_list+" "+styles2.clearfix}>
							<div className={styles.features_img_box}>
								<img className={styles.features_img} src={require('../assets/features_01.png')}/>
							</div>
							<div className={styles.features_info}>
								<div className={styles.info_tit}>交易分析</div>
								<div className={styles.info_list_box}>
									<p className={styles.info_list}>实时搜集商品房及土地竞拍信息</p>
									<p className={styles.info_list}>数据覆盖广</p>
									<p className={styles.info_list}>楼盘销控数据一目了然</p>
								</div>
							</div>
						</div>
					</Col>
					<Col xs={10}>
						<div className={styles.features_list+" "+styles2.clearfix}>
							<div className={styles.features_img_box}>
								<img className={styles.features_img} src={require('../assets/features_02.png')}/>
							</div>
							<div className={styles.features_info}>
								<div className={styles.info_tit}>多维排行</div>
								<div className={styles.info_list_box}>
									<p className={styles.info_list}>区域、板块、楼盘成交、去</p>
									<p className={styles.info_list}>化率等多角度排名</p>
									<p className={styles.info_list}>洞察购房热点</p>
									<p className={styles.info_list}>为您决策提供数据支持</p>
								</div>
							</div>
						</div>
					</Col>
					</Row>
					<Row className={styles.padd_t}>
					<Col xs={14}>
						<div className={styles.features_list+" "+styles2.clearfix}>
							<div className={styles.features_img_box}>
								<img className={styles.features_img} src={require('../assets/features_03.png')}/>
							</div>
							<div className={styles.features_info}>
								<div className={styles.info_tit}>对比分析</div>
								<div className={styles.info_list_box}>
									<p className={styles.info_list}>区块之间、竞品楼盘之间，成交</p>
									<p className={styles.info_list}>量价、库存数据等跟踪对比</p>
									<p className={styles.info_list}>获取一手情报</p>
								</div>
							</div>
						</div>
					</Col>
					<Col xs={10}>
						<div className={styles.features_list+" "+styles2.clearfix}>
							<div className={styles.features_img_box}>
								<img className={styles.features_img} src={require('../assets/features_04.png')}/>
							</div>
							<div className={styles.features_info}>
								<div className={styles.info_tit}>焦点追踪</div>
								<div className={styles.info_list_box}>
									<p className={styles.info_list}>足不出户实时捕捉焦点楼盘</p>
									<p className={styles.info_list}>鼠标轻轻一点</p>
									<p className={styles.info_list}>立即掌握楼盘动态及详情</p>
								</div>
							</div>
						</div>
					</Col>
				</Row>
				<img className={styles.drop_down} src={require('../assets/drop_down.png')}/>
			</div>
		</div>

		<div className={styles.advantage_box}>
			<div className={styles2.wrap+" "+styles.advantage_cont}>
				<div className={styles.title_name}>核心优势</div>
				<Row>
					<Col xs={6}>
						<div className={styles.advantage_list+" "+styles2.clearfix}>
							<div className={styles.advantage_img_box}>
								<img className={styles.advantage_img} src={require('../assets/advantage_01.png')}/>
							</div>
							<div className={styles.advantage_info}>
								<div className={styles.info_tit}>数据全面</div>
								<div className={styles.info_list_box}>
									<p className={styles.info_list}>定向收集商品房交易数据信息</p>
									<p className={styles.info_list}>了解业界实时情况</p>
								</div>
							</div>
						</div>
					</Col>
					<Col xs={6}>
						<div className={styles.advantage_list+" "+styles2.clearfix}>
							<div className={styles.advantage_img_box}>
								<img className={styles.advantage_img} src={require('../assets/advantage_02.png')}/>
							</div>
							<div className={styles.advantage_info}>
								<div className={styles.info_tit}>数据准确</div>
								<div className={styles.info_list_box}>
									<p className={styles.info_list}>数据来源可靠，从政府住建部门</p>
									<p className={styles.info_list}>获得可公开的房产备案数据</p>
								</div>
							</div>
						</div>
					</Col>
					<Col xs={6}>
						<div className={styles.advantage_list+" "+styles2.clearfix}>
							<div className={styles.advantage_img_box}>
								<img className={styles.advantage_img} src={require('../assets/advantage_03.png')}/>
							</div>
							<div className={styles.advantage_info}>
								<div className={styles.info_tit}>数据直观</div>
								<div className={styles.info_list_box}>
									<p className={styles.info_list}>统计分析后的数据结果集直观</p>
									<p className={styles.info_list}>展示，简洁明了</p>
								</div>
							</div>
						</div>
					</Col>
					<Col xs={6}>
						<div className={styles.advantage_list+" "+styles2.clearfix}>
							<div className={styles.advantage_img_box}>
								<img className={styles.advantage_img} src={require('../assets/advantage_04.png')}/>
							</div>
							<div className={styles.advantage_info}>
								<div className={styles.info_tit}>定量对比</div>
								<div className={styles.info_list_box}>
									<p className={styles.info_list}>时间、区域等维度上纵向、横向</p>
									<p className={styles.info_list}>定量比较，帮助用户洞察趋势</p>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>

    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Index);
