import React from 'react';
import './Panel.scss';

export default class Panel extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div className="panel-body">
					{this.props.children}
	            </div>
	}
};