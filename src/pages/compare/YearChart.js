import React from 'react';
import ReactEcharts from 'echarts-for-react';

export default class YearChart extends React.Component {
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
				data: ['2015', '2016', '2017']
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
				min: -250,
				max: 250,
				interval: 50,
				axisLabel: {
					formatter: '{value}'
				}
			}],
			series: [{
				name: '2015',
				type: 'line',
				data: [10, 12, 15, 20, 13, 32, 2, 11, 43, 32]
			}, {
				name: '2016',
				type: 'line',
				data: [20, 22, 25, 30, 23, 42, 21, 31, 53, 32]
			}, {
				name: '2017',
				type: 'line',
				data: [30, 32, 35, 40, 43, 62, 81, 81, 73, 92]
			}]
		};
		return option;
	}
	render() {
		return <ReactEcharts
                option={this.getOtion()} 
                style={{height: 300}} 
                />

	}
};