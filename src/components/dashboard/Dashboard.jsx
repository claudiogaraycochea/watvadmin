import React, { Component } from 'react';
import PropType from 'prop-types';
import { Container } from 'react-bootstrap';

import SideMenu from './core/sideMenu/SideMenu';
import Header from './core/header/HeaderContainer';
import './Dashboard.css';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuStatus: '',
		};
		const device = this.detectDevice();
		// const uid = localStorage.getItem('uid');
		window.addEventListener('resize', this.handleWindowSizeChange);
		this.props.setDevice(device);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
		const device = this.detectDevice();
		this.props.setDevice(device);
	};

	detectDevice = () => {
		if (window.innerWidth <= 768) {
			return 'mobile';
		}
		return 'desktop';
	}

	onChangeMenuStatus = () => {
		this.setState((prevState) => {
			return {
				menuStatus: !prevState.menuStatus,
			};
		});
	}

	render() {
		const { menuStatus } = this.state;
		const { children, projects } = this.props;
		const menuStatusClass = menuStatus ? 'side-menu' : 'side-menu minimized';
		if (!projects) {
			return (<div>Loading...</div>);
		}
		return (
			<div className='main-app'>
				<div className={menuStatusClass}>
					<SideMenu />
				</div>
				<div className='main-container'>
					<Header
						match={this.props.match}
						onChangeMenuStatus={() => this.onChangeMenuStatus()}
					/>
					<Container fluid>
						{children}
					</Container>
				</div>
			</div>
		);
	}
}

Dashboard.propTypes = {
	setDevice: PropType.func.isRequired,
	children: PropType.node.isRequired,
	match: PropType.object.isRequired,
};

Dashboard.defaultProps = {
	projects: [],
};

export default Dashboard;
