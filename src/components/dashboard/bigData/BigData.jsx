import React, { Component } from 'react';
import {
	Row, Col, Form, Button, Table,
} from 'react-bootstrap';
import { Modal } from '../../ui/Theme';
import './BigData.css';

import TimeWidget from './widgets/time/TimeWidget';
import GenderWidget from './widgets/gender/GenderWidget';
import AgeWidget from './widgets/age/AgeWidget';

class BigData extends Component {
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

	}

	render() {
		const {
			modalShow,
			children,
			validated,
			start_date,
			end_date,
			gender,
			location,
			tags,
			payment,
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
							<Form
								noValidate
								validated={validated}
								// onSubmit={(event) => this.handleSubmit(event)}
							>
								<Form.Row>
									<Form.Group as={Col}>
										<Form.Label>Start Date</Form.Label>
										<Form.Control
											type='date'
											name='start_date'
											value={start_date}
											// onChange={this.handleInputChange}
										/>
									</Form.Group>
									<Form.Group as={Col}>
										<Form.Label>End Date</Form.Label>
										<Form.Control
											type='date'
											name='end_date'
											value={end_date}
											// onChange={this.handleInputChange}
										/>
									</Form.Group>
								</Form.Row>
								<Form.Row>
									<Form.Group as={Col}>
										<Form.Label>Gender</Form.Label>
										<Form.Control
											as='select'
											name='gender'
											value={gender}
											// onChange={this.handleInputChange}
										>
											<option key='1' value='male'>Male</option>
											<option key='2' value='female'>Female</option>
											<option key='3' value=''>Undefined</option>
										</Form.Control>
									</Form.Group>
									<Form.Group as={Col}>
										<Form.Label>Tags</Form.Label>
										<Form.Control
											type='text'
											name='tags'
											value={tags}
											// onChange={this.handleInputChange}
										/>
									</Form.Group>
								</Form.Row>
								<Form.Row>
									<Form.Group as={Col}>
										<Form.Label>Location</Form.Label>
										<Form.Control
											type='text'
											name='location'
											value={location}
											// onChange={this.handleInputChange}
										/>
									</Form.Group>
									<Form.Group as={Col}>
										<Form.Label>Payment</Form.Label>
										<Form.Control
											as='select'
											name='payment'
											value={payment}
											// onChange={this.handleInputChange}
										>
											<option value='yes'>Yes</option>
											<option value='no'>No</option>
											<option value=''>Undefined</option>
										</Form.Control>
									</Form.Group>
								</Form.Row>
								<div className='d-flex justify-content-end'>
									<Button className='btn-secondary'>Search</Button>
								</div>
							</Form>
						</div>
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
							<h3>Micro Ads</h3>
							<div className='text-xlarge highlight'>
								$500,000
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

export default BigData;
