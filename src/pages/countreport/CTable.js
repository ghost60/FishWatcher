import React from 'react';
import {
	Table
}
from 'antd';

const data = [{
	key: '1',
	size: '小',
	up: '10',
	down: '10',
	updown: '10',
}, {
	key: '2',
	size: '中',
	up: '10',
	down: '10',
	updown: '10',
}, {
	key: '3',
	size: '大',
	up: '10',
	down: '10',
	updown: '10',
}, {
	key: '4',
	size: '总计',
	up: '30',
	down: '30',
	updown: '30',
}];

export default class CTable extends React.Component {
	state = {
		bordered: true,
		loading: false,
		pagination: false,
		size: 'small',
		scroll: undefined,
	}
	render() {
		const columns = [{
			title: '大小',
			dataIndex: 'size',
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