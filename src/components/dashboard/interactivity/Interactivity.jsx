import React, { Component } from 'react';
import {
	Row, Col, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Table, Modal } from '../../ui/Theme';

import './Interactivity.css';

import AddProfileModal from './modals/addProfile/AddProfileModalContainer';
import EditProfileModal from './modals/editProfile/EditProfileModalContainer';
import RemoveProfileModal from './modals/removeProfile/RemoveProfileModalContainer';

import { request, ContentTypes } from '../../../lib/apiConnect';

class Interactivity extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalShow: false,
			children: <div />,
			user_id: null,
			profiles: [],
		};
		this.props.setHeaderTitle('Interactivity');
		
		this.handleModalClose = this.handleModalClose.bind(this);
		this.handleModalAccept = this.handleModalAccept.bind(this);
	}

	componentDidMount() {
		//http://localhost:3000/api/profiles/
		const user_id = localStorage.getItem('user_id');
		this.setState({ user_id });
		this.getProfiles();
	}

	async getProfiles() {
		const { user_id } = this.state;
		const data = {
			user_id,
		};
		const endpoint = '/profiles/';
		try {
			const resp = await request('GET', endpoint, data, { 
					'content-type': ContentTypes.json,
					headers: { 'X-Authenticated-Userid': '15000500000@1' }
				} 
			);
			const profiles = resp.data;
			this.setState({ profiles });
			// console.log('resp', resp.data);
		} catch (err) {
			console.error(err);
			this.setState({
				notification: {
					status: true,
					text: 'User or password wrong',
				},
			});
		}
	}

	showProfiles(profiles) {
		return profiles.map((profile) => {
			return (
				<tr>
					<td>
						{profile.name}
					</td>
					<td>
						{profile.linkname}
					</td>
					<td>
						<div className='d-flex justify-content-end'>
							<Button
								onClick={() => this.handleModal(
									<EditProfileModal
										handleModalClose={this.handleModalClose}
										handleModalAccept={this.handleModalAccept}
									/>,
								)}
							>
								Edit
							</Button>
							<Button
								onClick={() => this.handleModal(
									<RemoveProfileModal
										handleModalClose={this.handleModalClose}
										handleModalAccept={this.handleModalAccept}
									/>,
								)}
							>
								Remove
							</Button>
							<Link
								to={'/dashboard/interactivity/editinteractivity/98340230402'}
							>
								<Button className='btn-secondary'>
									View
								</Button>
							</Link>
						</div>
					</td>
				</tr>
			)}
		);
	}

	handleModalClose() {
		this.setState({ modalShow: false });
	}

	handleModalAccept() {
		this.setState({ modalShow: false });
	}

	handleModal(children) {
		this.setState({ modalShow: true, children });
	}

	render() {
		const {
			modalShow,
			children,
			profiles,
		} = this.state;
		console.log('profiles: ', profiles);
		return (
			<div>
				<Row>
					<Col>
						<h2>Profiles</h2>
					</Col>
					<Col className='d-flex justify-content-end'>
						<Button
							onClick={() => this.handleModal(
								<AddProfileModal
									handleModalClose={this.handleModalClose}
									handleModalAccept={this.handleModalAccept}
								/>,
							)}
						>
							Add Profile
						</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className='box'>
							<div className='table-responsive'>
								<Table>
									<thead>
										<tr>
											<th>ID</th>
											<th>Name</th>
										</tr>
									</thead>
									<tbody>
										{this.showProfiles(profiles)}
									</tbody>
								</Table>
							</div>
						</div>
					</Col>
				</Row>

				<Modal
					show={modalShow}
					handleClose={this.handleModalClose}
					handleAccept={this.handleModalAccept}
				>
					{children}
				</Modal>
			</div>
		);
	}
}

export default Interactivity;
