import React from 'react';
import './DataShow.scss';
import {
	Row, Col, Form, DatePicker, Button
}
from 'antd';
import {
	browserHistory
}
from 'react-router';
import Panel from '../../components/panel/Panel';
import Card from '../../components/card/Card';
import Rshow from './Rshow';
import CTable from './CTable';
import VTabs from './VTabs';
import ReactEcharts from 'echarts-for-react';
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;


const data = [{
	key: '1',
	time: '今天',
	up: '30',
	down: '30',
	updown: '30',
}, {
	key: '2',
	time: '昨天',
	up: '30',
	down: '30',
	updown: '30',
}, {
	key: '3',
	time: '7天前',
	up: '30',
	down: '30',
	updown: '30',
}, {
	key: '4',
	time: '30天前',
	up: '30',
	down: '30',
	updown: '30',
}];

class DataShow extends React.Component {
	getOtion() {
		const option = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					crossStyle: {
						color: '#999'
					}
				}
			},
			toolbox: {
				feature: {
					dataView: {
						show: true,
						readOnly: false
					},
					magicType: {
						show: true,
						type: ['line', 'bar']
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			legend: {
				data: ['上游', '下游', '温度']
			},
			xAxis: [{
				type: 'category',
				data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日'],
				axisPointer: {
					type: 'shadow'
				}
			}],
			yAxis: [{
				type: 'value',
				name: '数量',
				min: -250,
				max: 250,
				interval: 50,
				axisLabel: {
					formatter: '{value}'
				}
			}, {
				type: 'value',
				name: '温度',
				min: 0,
				max: 25,
				interval: 5,
				axisLabel: {
					formatter: '{value} °C'
				}
			}],
			series: [{
				name: '上游',
				type: 'bar',
				stack: '鱼',
				data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
			}, {
				name: '下游',
				type: 'bar',
				stack: '鱼',
				data: [-2.6, -5.9, -9.0, -26.4, -28.7, -70.7, -175.6, -182.2, -48.7, -18.8, -6.0, -2.3]
			}, {
				name: '温度',
				type: 'line',
				yAxisIndex: 1,
				data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
			}]
		};
		return option;
	}
	onChartClick(param, echart) {
		console.log(param, echart);
		browserHistory.push(`/oneday:${param.name}`);
	}
	onChartLegendselectchanged(param, echart) {
		// console.log(param, echart);
		// alert('chart legendselectchanged');
	}
	onChartReady(echart) {
		// console.log('echart is ready', echart);
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, fieldsValue) => {
			if (err) {
				return;
			}
			const rangeValue = fieldsValue['range-picker'];
			const values = {
				...fieldsValue,
				'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
			};
			console.log('Received values of form: ', values);
		});
	}
	render() {
		let onEvents = {
			'click': this.onChartClick.bind(this),
			'legendselectchanged': this.onChartLegendselectchanged
		};
		const {
			getFieldDecorator
		} = this.props.form;
		const rangeConfig = {
			rules: [{
				type: 'array',
				required: true,
				message: '请选择时间！'
			}],
		};
		return <Panel>
					<Row>
						<Card>
					    	<Rshow/>
					    </Card>
		            </Row>
		            <Row>
		            	<Card>
			            	<Col>		
			            	<ReactEcharts
		                        option={this.getOtion()} 
		                        style={{height: 300}} 
		                        onChartReady={this.onChartReady} 
		                        onEvents={onEvents} />
	                        </Col>		            
			            	<Col offset={1}>		
								<Form onSubmit={this.handleSubmit} layout="inline">
									 <FormItem
							          label="选择时间范围"
							        >
							          {getFieldDecorator('range-picker', rangeConfig)(
							            <RangePicker />
							          )}
							        </FormItem>
						        	<FormItem>
							          <Button type="primary" htmlType="submit" size="large">重新绘制</Button>
							        </FormItem>
					        	</Form>
				        	</Col>
			        	</Card>
		            </Row>
		            <Row>
		            	<Card>
							<Col span={9} offset={1}>
								<CTable data={data}/>
							</Col>
							<Col span={12} offset={1}>
								<VTabs/>
							</Col>
						</Card>
		            </Row>
	            </Panel>
	}
};

DataShow = Form.create()(DataShow);
export default DataShow;