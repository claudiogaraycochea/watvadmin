import React, { Component } from 'react';
import {
	Row, Col, Button, Alert, Form,
} from 'react-bootstrap';

class AddModal extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			notification: {
				status: false,
				text: '',
			},
			project_name: '',
			project_description: '',
			project_start_date: '',
			project_end_date:'',
			micro_payment_url: '',
		};
	}

	addMicroPayment() {
		const micro_payment_url = 'http://192.168.0.12:3000/buynow/32442';
		this.setState({micro_payment_url});
	}

	render() {
		const {
			handleModalClose,
		} = this.props;
		const {
			notification,
			project_name,
			project_description,
			project_start_date,
			project_end_date,
			micro_payment_url,
		} = this.state;

		if (micro_payment_url) {
			return (
				<div>
					<div className='modal-header'>
						Add Micro Payment
					</div>
					<div className='modal-container'>
						<Form.Group>
							<Form.Label>Include this URL in your payment button:</Form.Label>
							<Form.Control
								type='text'
								placeholder='Payment URL'
								name='micro_payment_url'
								value={micro_payment_url}
							/>
						</Form.Group>
					</div>
					<div className='modal-bottom'>
						<Button
							className='btn-secondary'
							onClick={handleModalClose}
						>
							Close
						</Button>
					</div>
				</div>
			);
		}

		return (
			<div>
				<div className='modal-header'>
					Add Micro Payment
				</div>
				<div className='modal-container'>
					{(notification.status) ? <Alert variant='success'>{notification.text}</Alert> : null}
					<Row>
						<Col>
							<Form.Group>
								<Form.Label>Project Name</Form.Label>
								<Form.Control
									type='text'
									placeholder='Project Name'
									name='project_name'
									value={project_name}
									onChange={this.handleInputChange}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Description</Form.Label>
								<Form.Control
									as='textarea'
									rows='3'
									placeholder='Description'
									name='project_description'
									value={project_description}
									onChange={this.handleInputChange}
								/>
							</Form.Group>
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Label>Start Date</Form.Label>
									<Form.Control
										type='date'
										name='project_start_date'
										value={project_start_date}
										onChange={this.handleInputChange}
									/>
								</Form.Group>
								<Form.Group as={Col}>
									<Form.Label>End Date</Form.Label>
									<Form.Control
										type='date'
										name='project_end_date'
										value={project_end_date}
										onChange={this.handleInputChange}
									/>
								</Form.Group>
							</Form.Row>
							<Form.Group>
								<Form.Label>Take customers to this URL when they cancel their checkout</Form.Label>
								<Form.Control
									type='text'
									placeholder='Ex: https://www.mystore.com/cancel'
									name='project_name'
									value={project_name}
									onChange={this.handleInputChange}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Take customers to this URL when they finish checkout</Form.Label>
								<Form.Control
									type='text'
									placeholder='Ex: https://www.mystore.com/success'
									name='project_name'
									value={project_name}
									onChange={this.handleInputChange}
								/>
							</Form.Group>
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Label>Money</Form.Label>
									<Form.Control
										as='select'
										name='project_start_date'
										value={project_start_date}
										onChange={this.handleInputChange}
									>
										<option value='AR'>Peso Argentino</option>
										<option value='US'>Dolar</option>
										<option value='EU'>Euro</option>
									</Form.Control>
								</Form.Group>
								<Form.Group as={Col}>
									<Form.Label>Amount</Form.Label>
									<Form.Control
										type='number'
										name='project_end_date'
										value={project_end_date}
										onChange={this.handleInputChange}
									/>
								</Form.Group>
							</Form.Row>
						</Col>
					</Row>
				</div>
				<div className='modal-bottom'>
					<Button onClick={handleModalClose}>Cancel</Button>
					<Button
						className='btn-secondary'
						onClick={()=>this.addMicroPayment()}
					>
						Create
					</Button>
				</div>
			</div>
		);
	}
}

export default AddModal;
