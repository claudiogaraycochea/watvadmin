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
						<i className='logo-webandtv' />
					</div>
				</div>
				<div className='channel-wrapper'>
					AMERICA TV
				</div>
				<div className='menu-items'>
					<Link to='/dashboard/interactivity' className='text-white'>
						<div className='item'>
							<i className='icon-interactivity small space' />
							INTERACTIVITY
						</div>
					</Link>
					<Link to='/dashboard/micropayments' className='text-white'>
						<div className='item'>
							<i className='icon-micropayment small space' />
							MICRO PAYMENTS
						</div>
					</Link>
					<Link to='/dashboard/microads' className='text-white'>
						<div className='item'>
							<i className='icon-microads small space' />
							MICRO ADS
						</div>
					</Link>
					<Link to='/dashboard/bigdata' className='text-white'>
						<div className='item'>
							<i className='icon-big-data small space' />
							BIG DATA
						</div>
					</Link>
					<Link to='/dashboard/analysis' className='text-white'>
						<div className='item'>
							<i className='icon-analysis small space' />
							ANALISYS
						</div>
					</Link>
					<Link to='/dashboard/support' className='text-white'>
						<div className='item'>
							<i className='icon-support small space' />
							SUPPORT
						</div>
					</Link>
					<Link to='/dashboard/innovation' className='text-white'>
						<div className='item'>
							<i className='icon-innovation small space' />
							INNOVATION
						</div>
					</Link>
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
