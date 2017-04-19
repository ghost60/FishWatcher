import React from 'react';
import './Title.scss';

export default class Title extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div className="title-body" style={{background: 'url(./images/banner.png)'}}>
              {/*<img className="title-img" src="./images/logo-h60.png" alt=""/>*/}
              <span className="title-name">鱼类在线监测系统</span>                
            </div>
	}
};