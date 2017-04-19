import React from 'react';
import './Card.scss';

export default class Card extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div className="card-body">
					{this.props.children}
	            </div>
	}
};