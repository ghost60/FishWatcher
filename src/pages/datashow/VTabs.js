import React from 'react';
import {
	Tabs, Row, Col
}
from 'antd';
import Player from '../../components/player/Player';
const TabPane = Tabs.TabPane;

export default class Vtabs extends React.Component {
	render() {
		return <Tabs type="card">
				    <TabPane tab="最后一条" key="1">
				    	<RVideo/>
				    </TabPane>
				    <TabPane tab="最大一条" key="2">
				    	<RVideo/>
				    </TabPane>
			    </Tabs>
	}
}

class RVideo extends React.Component {
	render() {
		return <Row>
					<Col span={6}>
						<div className="rvideo-text">
							<div className="rvideo-span">看到的最大的</div>
							<div className="rvideo-span">2017年4月13日 16:00</div>
							<div className="rvideo-span">5天之前</div>
							<div className="rvideo-span">长度:85cm</div>
							<div className="rvideo-span">游向:向下</div>
						</div>
					</Col>
					<Col span={18}>
						<Player url={'./images/463982.mp4'} loop={true}/>
					</Col>
				</Row>
	}
}