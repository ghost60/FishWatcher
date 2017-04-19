import React from 'react';
import {
	Table
}
from 'antd';



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
					    dataSource={this.props.data}
					    bordered					    
					/>
				</div>
	}
};