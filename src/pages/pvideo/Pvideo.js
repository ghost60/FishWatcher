import React from 'react';
// import './CountReport.scss';
import {
	Row, Col
}
from 'antd';
import Panel from '../../components/panel/Panel';
import Player from '../../components/player/Player';

export default class Pvideo extends React.Component {
	render() {
		return <Panel>		            
		            <Row>
						<Col span={10} offset={2}>
							<Player url={'./images/463982.mp4'} loop={true} ishide={{display:'none'}}/>
                        </Col>
                        <Col span={10} offset={2}>
							<Player url={'./images/463982.mp4'} loop={true} ishide={{display:'none'}}/>
                        </Col>                   					
		            </Row>
		            <Row>
						<Col span={10} offset={2}>
							<Player url={'./images/463982.mp4'} loop={true} ishide={{display:'none'}}/>
                        </Col>
                        <Col span={10} offset={2}>
							<Player url={'./images/463982.mp4'} loop={true} ishide={{display:'none'}}/>
                        </Col>                   					
		            </Row>
	            </Panel>
	}
};