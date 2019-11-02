import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SideMenu.css';

class SideMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<div className='side-menu-header position-relative'>
					<div className='logo-wrapper'>
						<i className='logo-public-bloc' />
						<div className='text'>Weband.tv</div>
					</div>
				</div>
				<div className='menu-items'>
					<Link to='/dashboard' className='text-white'>
						<div className='item'>
							<i className='icon-home-white small space' />
							INTERACTIVITY
						</div>
					</Link>
					<div className='item'>
						<i className='icon-financial-white small space' />
						MICROPAYMENTS
					</div>
					<div className='item'>
						<i className='icon-bell-white small space' />
						BIG DATA
					</div>
					<div className='item'>
						<i className='icon-invoice-white small space' />
						ANALISYS
					</div>
					<div className='item'>
						<i className='icon-contractor-white small space' />
						SUPPORT
					</div>
					<div className='item'>
						<i className='icon-calendar-white small space' />
						INNOVATION
					</div>
				</div>
				<div className='sidebar_footer'>
					<span className='text-medium'>
						{`Copyright ${new Date().getFullYear()} Weband.tv`}
					</span>
				</div>
			</div>
		);
	}
}

export default SideMenu;
