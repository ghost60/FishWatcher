import React from 'react';
import './Foot.scss';

export default class Foot extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div className="foot-body">
              <img className="foot-img" src="" alt=""/>
              <div className="foot-name">© 2017 易科捷（武汉）生态科技有限公司</div>
              <div className="foot-name">四川省成都市高新区天府大道中段666号希顿国际广场B座2802</div>
            </div>
	}
};