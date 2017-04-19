import React from 'react';
import {
	Table
}
from 'antd';

const data = [{
	key: '1',
	time: '2015',
	up: '10',
	down: '10',
	updown: '10',
}, {
	key: '2',
	time: '2016',
	up: '10',
	down: '10',
	updown: '10',
}, {
	key: '3',
	time: '2017',
	up: '10',
	down: '10',
	updown: '10',
}];

export default class YearTable extends React.Component {
	state = {
		bordered: true,
		loading: false,
		pagination: false,
		size: 'small',
		scroll: undefined,
	}
	render() {
		const columns = [{
			title: '时间',
			dataIndex: 'time',
		}, {
			title: '上游',
			dataIndex: 'up',
		}, {
			title: '下游',
			dataIndex: 'down',
		}, {
			title: '上下游',
			dataIndex: 'updown',
		}];
		return <div>
					<Table
					{...this.state}
					    columns={columns}
					    dataSource={data}
					    bordered					    
					/>
				</div>
	}
};