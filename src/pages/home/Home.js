import React from 'react';
import {
	Row, Col, Table
}
from 'antd';
import Lmap from '../../components/map/Lmap';
import Panel from '../../components/panel/Panel';
import Rtable from './Rtable';
import {
	md_ajax
}
from '../../md-service'

const data = [{
	key: '1',
	name: '河流1',
	type: '视频',
	days: '30',
	hours: '30',
	latlng: [28, 101],
}, {
	key: '2',
	name: '河流2',
	type: '视频',
	days: '30',
	hours: '30',
	latlng: [29, 102],
}, {
	key: '3',
	name: '河流3',
	type: '视频',
	days: '30',
	hours: '30',
	latlng: [30, 103],
}, {
	key: '4',
	name: '河流4',
	type: '视频',
	days: '30',
	hours: '30',
	latlng: [30, 101],
}];

export default class Home extends React.Component {
	componentWillMount() {
		md_ajax.get('./data.json', {
			cache: true
		}).then((data) => {
			alert(data.data)
		}).catch((msg) => {
			alert(msg)
		})
	}
	render() {
		return <Panel>
				<Row gutter={16}>
	                <Col className="gutter-row" span={16}>
						<Lmap data={data}/>
	                </Col>
	                <Col className="gutter-row" span={8}>
						 <Rtable data={data}/>
	                </Col>
           		</Row>
       		</Panel>
	}
};