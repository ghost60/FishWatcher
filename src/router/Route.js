//主面板
import React, {
  Component, PropTypes
}
from 'react';
import {
  Router, Route, Redirect, IndexRoute, browserHistory, hashHistory
}
from 'react-router';
import Title from '../components/title/Title';
import Nav from '../components/nav/Nav';
import Foot from '../components/foot/Foot';
// import SModal from '../components/modal/SModal';
import Home from '../pages/home/Home';

import {
  Row, Col
}
from 'antd';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
              <Row> 
                <Col span={18} offset={3}>               
                  <Title/> 
                </Col>                
              </Row>
              <Row> 
                <Col span={18} offset={3}>               
                  <Nav/> 
                </Col>                
              </Row>
              <Row>
                <Col span={18} offset={3}>
                   {this.props.children||<Home/>}
                </Col>
              </Row>
              <Row>
                <Col span={18} offset={3}>
                   <Foot/>
                </Col>
              </Row>
            </div>
  }
};

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


const home = {
  path: 'home',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../pages/home/Home').default)
    })
  }
}

const datashow = {
  path: 'datashow',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../pages/datashow/DataShow').default)
    })
  }
}

const oneday = {
  path: 'oneday:id',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../pages/oneday/OneDay').default)
    })
  }
}

const compare = {
  path: 'compare',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../pages/compare/Compare').default)
    })
  }
}

const countreport = {
  path: 'countreport',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../pages/countreport/CountReport').default)
    })
  }
}

const pvideo = {
  path: 'pvideo',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../pages/pvideo/Pvideo').default)
    })
  }
}

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: Root,
    childRoutes: [
      home,
      datashow,
      oneday,
      countreport,
      compare,
      pvideo
    ]
  }]
}

// 配置路由
const RouteConfig = (
  <Router history={history} routes={rootRoute} />
);

export default RouteConfig;