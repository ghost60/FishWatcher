import React from 'react';
import {
	Col
}
from 'antd';

export default class CTable extends React.Component {
	render() {
		return <div className="show-body">
				    <Col span={14} offset={1}>			             
		                <div className="show-title">河流名称</div>
		                <div className="show-text">汉江，又称汉水，汉江河，为长江最大的支流，现代水文认为有三源：中源漾水、北源沮水、南源玉带河，均在秦岭南麓陕西宁强县境内，流经沔县（现勉县）称沔水，东流至汉中始称汉水；自安康至丹江口段古称沧浪水，襄阳以下别名襄江、襄水。</div>
	                </Col>
	                <Col span={5} offset={2}>
		                <img className="show-img" src="./images/hanjiang.jpg" alt=""/>			              
	                </Col>
                </div>
	}
};