import React from 'react';
import './CountReport.scss';
import {
	Table
}
from 'antd';
import ReactEcharts from 'echarts-for-react';

export default class HourChart extends React.Component {
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
					saveAsImage: {
						show: true
					}
				}
			},
			legend: {
				data: ['小上', '小下', '中上', '中下', '大上', '大下', '温度']
			},
			xAxis: [{
				type: 'category',
				data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日'],
				axisPointer: {
					type: 'shadow'
				}
			}],
			yAxis: [{
				type: 'value',
				name: '数量',
				/*min: -250,
				max: 250,
				interval: 50,*/
				axisLabel: {
					formatter: '{value}'
				}
			}],
			series: [{
				name: '小上',
				type: 'bar',
				stack: '鱼',
				data: [10, 12, 15, 20, 13, 32, 2, 11, 43, 32]
			}, {
				name: '小下',
				type: 'bar',
				stack: '鱼',
				data: [-10, -12, -15, -20, -13, -32, -2, -11, -43, -32]
			}, {
				name: '中上',
				type: 'bar',
				stack: '鱼',
				data: [20, 22, 25, 30, 23, 42, 21, 31, 53, 32]
			}, {
				name: '中下',
				type: 'bar',
				stack: '鱼',
				data: [-20, -22, -25, -30, -23, -42, -21, -31, -53, -32]
			}, {
				name: '大上',
				type: 'bar',
				stack: '鱼',
				data: [30, 32, 35, 40, 43, 62, 81, 81, 73, 92]
			}, {
				name: '大下',
				type: 'bar',
				stack: '鱼',
				data: [-30, -32, -35, -40, -43, -62, -81, -81, -73, -92]
			}]
		};
		return option;
	}
	render() {
		return <div>
					<ReactEcharts
	                option={this.getOtion()} 
	                style={{height: 300}} 
	                />
	            </div>
	}
};