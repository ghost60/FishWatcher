import React from 'react';
import {
  Row, Col, Table
}
from 'antd';
import Panel from '../../components/panel/Panel';
import Card from '../../components/card/Card';
import Player from '../../components/player/Player';
import './OneDay.scss'

const data = [{
  key: '1',
  time: '09:00',
  len: '30',
  por: '30',
  dir: '上游',
  specie: '草鱼',
  speed: '-'
}, {
  key: '2',
  time: '10:00',
  len: '30',
  por: '30',
  dir: '上游',
  specie: '草鱼',
  speed: '-'
}, {
  key: '3',
  time: '11:00',
  len: '30',
  por: '30',
  dir: '上游',
  specie: '草鱼',
  speed: '-'
}, {
  key: '4',
  time: '12:00',
  len: '30',
  por: '30',
  dir: '上游',
  specie: '草鱼',
  speed: '-'
}, {
  key: '5',
  time: '13:00',
  len: '30',
  por: '30',
  dir: '上游',
  specie: '草鱼',
  speed: '-'
}];

export default class OneDay extends React.Component {
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
    const columns = [{
      title: '时间',
      dataIndex: 'time',
    }, {
      title: '长度',
      dataIndex: 'len',
    }, {
      title: '位置',
      dataIndex: 'por',
    }, {
      title: '游向',
      dataIndex: 'dir',
    }, {
      title: '种类',
      dataIndex: 'specie',
    }, {
      title: '速度',
      dataIndex: 'speed',
    }];
    return <Panel>
              <Row>
                <Card>
                  <Col span={14}>
                    <img className="oneday-img" src="./images/fish.png" alt=""/>
                    <span className="oneday-text">长高比:5.0</span>
                    <span className="oneday-text">速度:2m/s</span>
                  </Col>
                  <Col span={10}>
                    <Player url={'./images/463982.mp4'} loop={true}/>
                  </Col>
                </Card>
              </Row>
              <Row>
                <Card>
                  <Col span={16} offset={4}>
                    <div className="oneday-div"><span className="oneday-bntl">前一天</span><span className="oneday-bntr">后一天</span></div>
                    <Table
                      {...this.state}
                        columns={columns}
                        dataSource={data}
                        size="small"
                        onRowClick={this.rowClick.bind(this)}
                        bordered              
                    />
                  </Col>
                </Card>
              </Row>
            </Panel>
  }
}