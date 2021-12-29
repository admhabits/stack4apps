import React, { Component } from 'react';

import '../assets/css/master-admin-layout.css';
import AdminHeader from '../components/admin/Header';
import AdminSidebar from '../components/admin/Sidebar';
import ContentAdmin from '../components/admin/Content';
import AdminFooter from '../components/admin/Footer';

export default class MasterAdminLayout extends Component {
	render() {
		return (
			<div className="master-admin">
				<AdminHeader/>
				<AdminSidebar/>
				<ContentAdmin/>
				<AdminFooter/>
			</div>
		);
	}
}
