import React, { Component } from 'react';
import {
	Row, Col, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Table, Modal } from '../../ui/Theme';
import './MicroAds.css';

import EditModal from './modals/edit/EditModalContainer';
import RemoveModal from './modals/remove/RemoveModalContainer';

const projectsMicroAds = [
	{
		project_id: '29102332131',
		name: 'Manicuría Más Uñas',
		start_date: '10:20hs 10/01/2019',
		end_date: '10:20hs 10/01/2019',
		status: 1,
		amount: '3000', 
	},
	{
		project_id: '29102332132',
		name: 'Contador Público',
		start_date: '10:20hs 10/01/2019',
		end_date: '10:20hs 10/01/2019',
		status: 0,
		amount: '1000', 
	},
	{
		project_id: '29102332134',
		name: 'Timoteo Resto-Bar',
		start_date: '10:20hs 10/01/2019',
		end_date: '10:20hs 10/01/2019',
		status: 0,
		amount: '2000', 
	},
];

class MicroAds extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalShow: false,
			children: <div />,
		};
		this.props.setHeaderTitle('MICRO ADS');
		this.handleModalClose = this.handleModalClose.bind(this);
		this.handleModalAccept = this.handleModalAccept.bind(this);
	}

	showProjects(projectsMicroAds) {
		return projectsMicroAds.map((item)=> {
			return (<tr key={item.project_id}>
				<td className='w-20'>{item.project_id}</td>
				<td>{item.name}</td>
				<td>{item.start_date}</td>
				<td>{item.end_date}</td>
				<td>{item.status}</td>
				<td>${item.amount}</td>
				<td>
					<div className='d-flex justify-content-end'>
						<Button
							onClick={() => this.handleModal(
								<EditModal
									handleModalClose={this.handleModalClose}
									handleModalAccept={this.handleModalAccept}
								/>,
							)}
						>
							Edit
						</Button>
						<Button
							onClick={() => this.handleModal(
								<RemoveModal
									handleModalClose={this.handleModalClose}
									handleModalAccept={this.handleModalAccept}
								/>,
							)}
						>
							Remove
						</Button>
						<Link
							to={'/dashboard/microads/detail/98340230402'}
						>
							<Button className='btn-secondary'>
								View
							</Button>
						</Link>
					</div>
				</td>
			</tr>);
		});
	}

	handleModalClose() {
		this.setState({ modalShow: false });
	}

	handleModalAccept() {
		/* const uid = localStorage.getItem('uid');
		const { project_id } = this.props.match.params;
		this.props.getUserProjects(uid);
		this.props.getProjectBudget(project_id);
		console.log('Schedule: handleModalAccept');
		*/
		this.setState({ modalShow: false });
	}

	handleModal(children) {
		this.setState({ modalShow: true, children });
	}

	render() {
		const {
			modalShow,
			children,
		} = this.state;
		return (
			<div>
				<Row>
					<Col>
						<h2>Overview</h2>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className='box'>
							<h3>Total Earning</h3>
							<div className='text-xlarge highlight'>
								$300,000
							</div>
						</div>
					</Col>
					<Col>
						<div className='box'>
							<h3>Advertises</h3>
							<div className='text-xlarge highlight'>
								300
							</div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className='box'>
							<div className='table-responsive'>
								<Table>
									<thead>
										<tr>
											<th className='w-20'>ID</th>
											<th>Name</th>
											<th>Start Date</th>
											<th>End Date</th>
											<th>Status</th>
											<th>Payment</th>
											<th> </th>
										</tr>
									</thead>
									<tbody>
										{this.showProjects(projectsMicroAds)}
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

export default (MicroAds);
