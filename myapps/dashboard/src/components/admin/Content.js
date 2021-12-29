import React, { Component } from 'react';
import '../../assets/css/content-admin.css';
import CardUI from '../UI/Card';
export default class Content extends Component {

	render() {
		return (
			<div className="content-admin container-shadow">
				<div className="content-admin-wrapper">
					<CardUI logo={"dns"}>Detail Database</CardUI>
				</div>
				<div className="content-admin-wrapper">
					<CardUI logo={"collections"}>Detail Assets</CardUI>
				</div>
				<div className="content-admin-wrapper">
					<CardUI logo={"backup_table"}>Backup Database</CardUI>
				</div>
				<div className="content-admin-wrapper">
					<CardUI logo={"add_moderator"}>Total Users</CardUI>
				</div>
			</div>
		);
	}
}
