import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';

import MainLayout from './components/MainLayout/MainLayout';
import Index from './routes/Index';
import Registered from './routes/Registered';
import Login from './routes/Login';
import GetBack from './routes/GetBack';
import Modify from './routes/Modify';
import DataCenter from './routes/DataCenter';

import IndexPage from './routes/IndexPage';


function RouterConfig({ history }) {
	return (
		<Router history={history}>
			<Route path="/" component={MainLayout}>
				<Route path="registered" component={Registered} />
				<Route path="login" component={Login} />
				<Route path="getback" component={GetBack} />
				<Route path="modify" component={Modify} />
				<Route path="datacenter" component={DataCenter} />

				
				<Route path="indexPage" component={IndexPage} />

				<IndexRoute component={Index} />
			</Route>
		</Router>
	);
}

export default RouterConfig;
