import React, { Component } from 'react';
import {
	Row, Col, Button, Alert, Form,
} from 'react-bootstrap';
import { Table } from '../../../../../ui/Theme';
import { Link } from 'react-router-dom';
import moment from 'moment';

class AddScheduleModal extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			notification: {
				status: false,
				text: '',
			},
			project_name: '',
			execute_time: '00:00:01',
			end_time: '00:00:01',
			duration: '20',
			url: 'http://example.com/link',
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleInputDurationChange = this.handleInputDurationChange.bind(this);
	}

	onHandleSubmit = (event) => {
		event.preventDefault();
		console.log('Login: onHandleSubmit');
		const { email, password } = this.state;
		if (email !== '' && password !== '') {
			console.log('open');
			this.login();
		}
	};

	handleInputChange(event) {
		const { target } = event;
		const { name } = target;
		const value = target.type === 'checkbox' ? target.checked : target.value;

		this.setState({ [name]: value });
	}

	handleInputDurationChange(event) {
		const { target } = event;
		const duration = target.value;
		const { execute_time } = this.state; 
		const end_time = moment(execute_time, 'hh:mm:ss').add(duration, 'seconds').format('hh:mm:ss');
		this.setState({ duration, end_time });
	}

	render() {
		const {
			handleModalClose,
			handleModalAccept,
		} = this.props;
		const {
			notification,
			execute_time,
			end_time,
			url,
			duration,
		} = this.state;
		return (
			<div>
				<div className='modal-header'>
					Add Schedule
				</div>
				<div className='modal-container'>
					{(notification.status) ? <Alert variant='success'>{notification.text}</Alert> : null}
					<Row>
						<Col>
							<Form.Group>
								Name: <h3>Microwebsite Name</h3>
							</Form.Group>
							<Form.Group>
								URL: <Link to={url}>{url}</Link>
							</Form.Group>
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Label>Will be shown the next days by weeks</Form.Label>
									<Table>
										<tbody>
											<tr>
												<td>Sun</td>
												<td>Mon</td>
												<td>Tue</td>
												<td>Wed</td>
												<td>Thu</td>
												<td>Fri</td>
												<td>Sat</td>
											</tr>
											<tr>
												<td>
													<Form.Check
														type="checkbox"
														label=""
														name="formHorizontalRadios"
														id="formHorizontalRadios1"
													/>
												</td>
												<td>
													<Form.Check
														type="checkbox"
														label=""
														name="formHorizontalRadios"
														id="formHorizontalRadios1"
													/>
												</td>
												<td>
													<Form.Check
														type="checkbox"
														label=""
														name="formHorizontalRadios"
														id="formHorizontalRadios1"
													/>
												</td>
												<td>
													<Form.Check
														type="checkbox"
														label=""
														name="formHorizontalRadios"
														id="formHorizontalRadios1"
													/>
												</td>
												<td>
													<Form.Check
														type="checkbox"
														label=""
														name="formHorizontalRadios"
														id="formHorizontalRadios1"
													/>
												</td>
												<td>
													<Form.Check
														type="checkbox"
														label=""
														name="formHorizontalRadios"
														id="formHorizontalRadios1"
													/>
												</td>
												<td>
													<Form.Check
														type="checkbox"
														label=""
														name="formHorizontalRadios"
														id="formHorizontalRadios1"
													/>
												</td>
											</tr>
										</tbody>
									</Table>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Label>Start</Form.Label>
									<Form.Control
										type='time'
										format='HH:mm:ss'
										name='execute_time'
										value={execute_time}
										onChange={this.handleInputChange}
									/>
								</Form.Group>
								<Form.Group as={Col}>
									<Form.Label>Duration</Form.Label>
									<Form.Control
										type='number'
										name='duration'
										value={duration}
										onChange={this.handleInputDurationChange}
									/>
								</Form.Group>
								<Form.Group as={Col}>
									<Form.Label>End</Form.Label>
									<Form.Control
										type='time'
										format='HH:mm:ss'
										name='end_time'
										value={end_time}
										onChange={this.handleInputChange}
									/>
								</Form.Group>
							</Form.Row>
						</Col>
					</Row>
					<Row>
						<Col className='text-small'>
							Note: The module will be added to "Schedule". The changes aren't added to "Playlist" until you do click on "Publish" button.
						</Col>
					</Row>
				</div>
				<div className='modal-bottom'>
					<Button onClick={handleModalClose}>Cancel</Button>
					<Button
						className='btn-secondary'
						onClick={handleModalAccept}
					>
						Add to Schedule
					</Button>
				</div>
			</div>
		);
	}
}

export default AddScheduleModal;
