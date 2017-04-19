import React from 'react';
import {
	connect
}
from 'react-redux';
import {
	Link
}
from 'react-router';
import {
	Table
}
from 'antd';
import {
	chAction
}
from '../../redux/action';
import './RTable.scss'

class RTable extends React.Component {
	state = {
		bordered: true,
		loading: false,
		pagination: false,
		size: 'small',
		scroll: undefined,
	}
	rowClick(record, index) {
		// debugger
	}
	render() {
		const {
			chClick
		} = this.props
		const columns = [{
			title: '河流',
			dataIndex: 'name',
			render: text => <span className="rtable-river">{text}</span>,
			onCellClick(record, event) {
				chClick(record.latlng)
			},
		}, {
			title: '类型',
			dataIndex: 'type',
		}, {
			title: '30天',
			dataIndex: 'days',
		}, {
			title: '24小时',
			dataIndex: 'hours',
		}, {
			title: '详情',
			dataIndex: 'more',
			render: text => <Link to="/datashow"><span>详情</span></Link>,
		}];
		return <div>
					<Table
						{...this.state}
					    columns={columns}
					    dataSource={this.props.data}
					    size="small"
					    onRowClick={this.rowClick.bind(this)}
					    bordered					    
					/>
				</div>
	}
};

function mapStateToProps(state) {
	return {
		center: state.map.center
	}
};

function mapDispatchToProps(dispatch, ownProps) {
	return {
		chClick: (e) => dispatch(chAction(e))
	}
};


RTable = connect(
	mapStateToProps,
	mapDispatchToProps
)(RTable);

export default RTable;