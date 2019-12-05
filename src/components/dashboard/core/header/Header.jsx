import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Modal } from '../../../ui/Theme';

import LogOutModal from '../../../auth/logOut/modal/LogOutModalContainer';

import './Header.css';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalShow: false,
			children: <div />,
		};
		this.handleModalClose = this.handleModalClose.bind(this);
	}

	getNavigation = () => {
		const { profile_id, project_id, task_id } = this.props.match.params;

		const navigationProfile = (profile_id) ? (
			<div className='nav-bar-item'>
				<div className='separator'>/</div>
				<Link to={`/dashboard/interactivity/`}>Interactivity</Link>
			</div>
		) : null;

		const navigationProject = (project_id) ? (
			<div className='nav-bar-item'>
				<div className='separator'>/</div>
				<Link to={`/dashboard/micropayments/`}>Micro Payments</Link>
			</div>
		) : null;

		const navigationSchedule = (task_id) ? (
			<div className='nav-bar-item'>
				<div className='separator'>/</div>
				<Link to={`/dashboard/schedule/${project_id}`}>Schedule</Link>
			</div>
		) : null;

		return (
			<div className='nav-bar'>
				<Link to='/dashboard/'> Home </Link>
				{navigationProfile}
				{navigationProject}
				{navigationSchedule}
			</div>
		);
	}

	handleModalClose() {
		this.setState({ modalShow: false });
	}

	handleModal(children) {
		this.setState({ modalShow: true, children });
	}

	renderProfilePicture() {
		return <i className='icon-user small' />;
	}

	render() {
		const { modalShow, children } = this.state;
		const { device, headerTitle } = this.props;
		if (device === 'mobile') {
			return (
				<div>
					<div className='header-mobile'>
						<div className='logo-wrapper'>
							<i className='logo-webandtv' />
						</div>
						<div className='top-menu'>
							<div className='top-menu-item'>
								<Button
									className='btn-link'
								>
									<i className='icon-notification small' />
								</Button>
							</div>
							<div className='top-menu-item'>
								<Link to='/dashboard/profile'>
									{this.renderProfilePicture()}
								</Link>
							</div>
							<div className='top-menu-item'>
								<Button
									className='btn-link'
									onClick={() => this.handleModal(
										<LogOutModal
											handleModalClose={this.handleModalClose}
										/>,
									)}
								>
									<i className='icon-logout small' />
								</Button>
							</div>
							<div className='top-menu-item'>
								<Button
									className='btn-link'
									onClick={() => this.props.onChangeMenuStatus()}
								>
									<i className='icon-menu small' />
								</Button>
							</div>
						</div>
					</div>
					<div className='sub-header-mobile'>
						<div>
							<div className='title'>{headerTitle}</div>
							{this.getNavigation()}
						</div>
					</div>
					<Modal
						show={modalShow}
						handleClose={this.handleModalClose}
					>
						{children}
					</Modal>
				</div>
			);
		}
		return (
			<div className='header-desktop'>
				<div>
					<div className='title'>{headerTitle}</div>
					{this.getNavigation()}
				</div>
				<div className='top-menu'>
					<div className='top-menu-item'>
						<Button
							className='btn-link'
						>
							<i className='icon-notification small' />
						</Button>
					</div>
					<div className='top-menu-item'>
						<Link to='/dashboard/profile'>
							{this.renderProfilePicture()}
						</Link>
					</div>
					<div className='top-menu-item'>
						<Button
							className='btn-link'
							onClick={() => this.handleModal(
								<LogOutModal
									handleModalClose={this.handleModalClose}
								/>,
							)}
						>
							<i className='icon-logout small' />
						</Button>
					</div>
					<div className='top-menu-item'>
						<Button
							className='btn-link'
							onClick={() => this.props.onChangeMenuStatus()}
						>
							<i className='icon-menu small' />
						</Button>
					</div>
				</div>
				<Modal
					show={modalShow}
					handleClose={this.handleModalClose}
				>
					{children}
				</Modal>
			</div>
		);
	}
}

export default Header;
