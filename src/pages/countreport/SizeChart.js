import React from 'react';
import './CountReport.scss';
import {
	Col, Table
}
from 'antd';
import ReactEcharts from 'echarts-for-react';

export default class SizeChart extends React.Component {
	getBarOtion() {
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
				data: ['小', '中', '大']
			},
			xAxis: [{
				type: 'category',
				name: '长度',
				data: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '10'],
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
				name: '小',
				type: 'bar',
				stack: '鱼',
				data: [10, 12, 15, 20, 13, 32, 2, 11, 43, 32]
			}, {
				name: '中',
				type: 'bar',
				stack: '鱼',
				data: [20, 22, 25, 30, 23, 42, 21, 31, 53, 32]
			}, {
				name: '大',
				type: 'bar',
				stack: '鱼',
				data: [30, 32, 35, 40, 43, 62, 81, 81, 73, 92]
			}]
		};
		return option;
	};
	getPicOtion() {
		const option = {
			backgroundColor: '#FFF',
			title: {
				text: '大小占比',
				left: 'center',
				top: 35,
				textStyle: {
					color: '#545454'
				}
			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			toolbox: {
				feature: {
					saveAsImage: {
						show: true
					}
				}
			},
			legend: {
				data: ['小', '中', '大']
			},
			visualMap: {
				show: false,
				min: 80,
				max: 600,
				inRange: {
					colorLightness: [0, 1]
				}
			},
			series: [{
				// name: '访问来源',
				type: 'pie',
				radius: '55%',
				center: ['50%', '50%'],
				data: [{
					value: 335,
					name: '大'
				}, {
					value: 310,
					name: '中'
				}, {
					value: 274,
					name: '小'
				}].sort(function(a, b) {
					return a.value - b.value
				}),
				roseType: 'angle',
				label: {
					normal: {
						textStyle: {
							color: 'rgba(255, 255, 255, 0.3)'
						}
					}
				},
				labelLine: {
					normal: {
						lineStyle: {
							color: 'rgba(255, 255, 255, 0.3)'
						},
						smooth: 0.2,
						length: 10,
						length2: 20
					}
				},
				itemStyle: {
					normal: {
						color: '#c23531',
						shadowBlur: 200,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				},

				animationType: 'scale',
				animationEasing: 'elasticOut',
				animationDelay: function(idx) {
					return Math.random() * 200;
				}
			}]
		};
		return option;
	};
	render() {
		return <div>
					<Col span={15}>
						<ReactEcharts
		                option={this.getBarOtion()} 
		                style={{height: 300}} 
		                />
	                </Col>
	                <Col span={9}>
						<ReactEcharts
		                option={this.getPicOtion()} 
		                style={{height: 300}} 
		                />
	                </Col>
	            </div>
	}
};