import React, { Component } from 'react';
import "../../assets/css/siderbar-admin.css";

export default class Sidebar extends Component {
	render() {
		return (
			<div className="admin-sidebar">
				<div className="side-link">
					<span className="material-icons md-26 md-light ">dns</span>
					<div className="link-item">
						Create Database
					</div>
				</div>
				<div className="side-link">
					<span className="material-icons md-26 md-light">backup_table</span>
					<div className="link-item">
						Tables Manager
					</div>
				</div>
				<div className="side-link">
					<span className="material-icons md-26 md-light">collections</span>
					<div className="link-item">
						Assets Manager
					</div>
				</div>
				<div className="side-link">
					<span className="material-icons md-26 md-light">add_moderator</span>
					<div className="link-item">
						Admin Settings
					</div>
				</div>
			</div>
		);
	}
}
