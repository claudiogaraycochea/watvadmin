import React, { Component } from 'react';
import {
	Row, Col, Button, Table,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Modal } from '../../ui/Theme';
import './Overview.css';

import TimeWidget from '../bigData/widgets/time/TimeWidget';// '../bigData/widgets/time/TimeWidget';
import GenderWidget from '../bigData/widgets/gender/GenderWidget';
import AgeWidget from '../bigData/widgets/age/AgeWidget';

class Overview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalShow: false,
			children: <div />,
			validated: false,
			start_date: '10/10/2019',
			end_date: '10/10/2019',
			gender: '',
			location: '',
			tags: '',
			payment: '',
		};
		this.props.setHeaderTitle('BIG DATA');
		this.handleModalClose = this.handleModalClose.bind(this);
		this.handleModalAccept = this.handleModalAccept.bind(this);
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
		} = this.state;
		return (
			<div>
				<Row>
					<Col>
						<h2>Overview</h2>
					</Col>
					<Col className='d-flex justify-content-end'>
						<Link
							to={'/dashboard/bigdata'}
						>
							<Button className='btn-secondary'>
								Go to Big Data
							</Button>
						</Link>
					</Col>	
				</Row>
				<Row>
					<Col>
						<div className='box'>
							<h3>Micro Ads</h3>
							<div className='text-xlarge highlight'>
								$500,000
							</div>
						</div>
					</Col>
					<Col>
						<div className='box'>
							<h3>Micro Payments</h3>
							<div className='text-xlarge highlight'>
								$1,500,000
							</div>
						</div>
					</Col>
					<Col>
						<div className='box'>
							<h3>Total Earned</h3>
							<div className='text-xlarge highlight'>
								$2,000,000
							</div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<TimeWidget />
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={4}>
						<GenderWidget />
					</Col>
					<Col xs={12} md={8}>
						<AgeWidget />
					</Col>
				</Row>
				<Row>
					<Col>
						<div className='box'>
							<Row>
								<Col>
									<h3>Visits this month</h3>
								</Col>
							</Row>
							<div className='table-responsive'>
								<Table>
									<thead>
										<tr>
											<th className='w-20'>Name</th>
											<th>Visitors</th>
											<th>Amount</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Intrusos</td>
											<td>3,000,000</td>
											<td>$200,000</td>
										</tr>
										<tr>
											<td>Incorrectas</td>
											<td>2,000,000</td>
											<td>$240,000</td>
										</tr>
										<tr>
											<td>Pamela a la Tarde</td>
											<td>3,000,000</td>
											<td>$180,000</td>
										</tr>
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

export default Overview;
