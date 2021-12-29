import React, { Component } from 'react';
import '../../assets/css/card.css';
import TableBoxShadow from './Table';

export default class Card extends Component {
	constructor({children, logo, color}){
		super();
		this.children = children;
		this.logo = logo;
		this.color = color;
	}
	render() {
		return (
			<>
				<div className="card-master">
					<div className="card-master-header ">
						{this.children}
						<span className="material-icons md-light">{this.logo}</span>
					</div>
					<div className="card-master-body">
						<TableBoxShadow/>
					</div>
				</div>
				
			</>
		);
	}
}
