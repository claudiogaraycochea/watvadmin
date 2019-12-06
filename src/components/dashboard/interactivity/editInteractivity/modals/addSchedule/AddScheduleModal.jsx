import React, { Component } from 'react';
import {
	Row, Col, Button, Alert, Form,
} from 'react-bootstrap';
import { Table } from '../../../../../ui/Theme';
import { Link } from 'react-router-dom';

class AddScheduleModal extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			notification: {
				status: false,
				text: '',
			},
			project_name: '',
			url: 'http://example.com/link',
		};
	}

	render() {
		const {
			handleModalClose,
			handleModalAccept,
		} = this.props;
		const {
			notification,
			project_name,
			url,
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
										name='task_startDate'
										value=''
										// onChange={this.handleInputChange}
									/>
								</Form.Group>
								<Form.Group as={Col}>
									<Form.Label>End</Form.Label>
									<Form.Control
										type='time'
										name='task_endDate'
										value=''
										// onChange={this.handleInputChange}
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
						Finish
					</Button>
				</div>
			</div>
		);
	}
}

export default AddScheduleModal;
