import React from 'react';
// import './CountReport.scss';
import {
	Row, Col, Radio
}
from 'antd';
const RadioGroup = Radio.Group;

import Panel from '../../components/panel/Panel';
import Card from '../../components/card/Card';
import YearTable from './YearTable';
import YearChart from './YearChart';

export default class Compare extends React.Component {
	state = {
		value: 1,
	}
	onChange = (e) => {
		console.log('radio checked', e.target.value);
		this.setState({
			value: e.target.value,
		});
	}
	render() {
		return <Panel>		            
		            <Row>
		            	<Card>
							<Col>
								<RadioGroup onChange={this.onChange} value={this.state.value} style={{textAlign: 'center',marginBottom:'15px'}}>
							        <Radio value={1}>上游</Radio>
							        <Radio value={2}>下游</Radio>
							        <Radio value={3}>上下游</Radio>
							     </RadioGroup>								
								<YearChart/>
	                        </Col>
	                    </Card>	                    					
		            </Row>
		            <Row>
		            	<Card>
			            	<Col span={20} offset={2}>		
			            		<YearTable/>	           								
				        	</Col>
			        	</Card>
		            </Row>
	            </Panel>
	}
};