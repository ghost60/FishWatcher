import React from 'react';
import './CountReport.scss';
import {
	Row, Col, Form, Select, DatePicker, Button
}
from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
import Panel from '../../components/panel/Panel';
import Card from '../../components/card/Card';
import CTable from './CTable';
import HourChart from './HourChart';
import SizeChart from './SizeChart';
import TotalChart from './TotalChart';

class CountReport extends React.Component {
	handleSubmit = (e) => {
		debugger
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
						<Col>
							<div className="countreport-title">
								<div className="name">某某河的计数报告</div>
		<div className="form">
						        <Form onSubmit={this.handleSubmit} layout="inline">
						            <FormItem label="时间范围">
						                {getFieldDecorator('range-picker', rangeConfig)(
						                  <RangePicker />
						                )}
					                </FormItem>
					                <FormItem label="种类">
						                <Select
						                  value={''}
						                  style={{ width: '100px' }}
						                >
							                <Option value="rmb">RMB</Option>
							                <Option value="dollar">Dollar</Option>
						              	</Select>
					                </FormItem>
					                <FormItem>
							        	<Button type="primary" htmlType="submit" size="large">重新生成</Button>
							        </FormItem>                   
					            </Form>	
					            </div>						
							</div>
						</Col>
		            </Row>
		            <Row>
		            	<Card>
			            	<Col span={20} offset={2}>		
			            		<CTable/>	           								
				        	</Col>
			        	</Card>
		            </Row>
		            <Row>
		            	<Card>
							<Col>								
								<TotalChart/>
	                        </Col>
	                    </Card>
	                    <Card>
							<Col>
								<div className="countreport-ftitle">24小时</div>
								<HourChart/>
							</Col>
						</Card>
						<Card>
							<Col>
								<div className="countreport-ftitle">上游鱼尺寸占比</div>
								<SizeChart/>
							</Col>
						</Card>
						<Card>
							<Col>
								<div className="countreport-ftitle">下游鱼尺寸占比</div>
								<SizeChart/>
							</Col>
						</Card>						
		            </Row>
	            </Panel>
	}
};

CountReport = Form.create()(CountReport);
export default CountReport;