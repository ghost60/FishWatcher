import React from 'react';
import {
  Menu
}
from 'antd';
import {
  Link, browserHistory
}
from 'react-router';
import './Nav.scss';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class MMenu extends React.Component {
  constructor(props) {
      super(props);
      var path = browserHistory.getCurrentLocation().pathname;
      console.log(path);
      switch (path) {
        case '/':
          this.state = {
            current: 'river'
          };
          break;
        case 'countreport':
          this.state = {
            current: 'count'
          };
          break;
        case 'compare':
          this.state = {
            current: 'compare'
          };
          break;
        case '/pvideo':
          this.state = {
            current: 'pvideo'
          };
          break;
      }
    }
    // handleClick = (e) => {
    //   console.log('click ', e);
    //   this.setState({
    //     current: e.key,
    //   });
    // }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        mode="horizontal"
      >
        <Menu.Item key="river">
          <Link to="/">河流</Link>
        </Menu.Item>
        <Menu.Item key="count">
           <Link to="/countreport">计数报告</Link>
        </Menu.Item> 
        <Menu.Item key="compare">
           <Link to="/compare">统计对比</Link>
        </Menu.Item>       
        <Menu.Item key="video">
           <Link to="/pvideo">视频</Link>
        </Menu.Item>
      </Menu>
    );
  }
}