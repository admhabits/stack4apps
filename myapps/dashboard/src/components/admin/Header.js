import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../../assets/css/header-admin.css';
import admin from "../../assets/images/admin.png";


export default class Header extends Component {
	render() {
		return (
			<div className="header-admin">

				<div className="brand">
					{<img src={admin} alt="logo"/>}
					<div className="name-brand">React Panel</div>
					<span className="material-icons md-26 md-light navbar" id="slim-panel">double_arrow</span>
				</div>

				<div className='spacer'>
					<input className="search-bar" type="text" placeholder="Search..."/>
				</div>

				<div className="navbar">
					<i className="material-icons md-26 md-light navbar">dashboard</i>
					<a href="#">Dashboard</a>

					<i className="material-icons md-34 md-light navbar">circle_notifications</i>
					<a href="#">Notification</a>

					<i className="material-icons md-36 md-light navbar">admin_panel_settings</i>
					<a href="#">alamhafidz65@gmail.com</a>


					<i className="material-icons md-26 md-light off-canvas">menu</i>

				</div>

			</div>
		);
	}
}
