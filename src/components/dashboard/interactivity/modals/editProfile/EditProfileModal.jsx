import React, { Component } from 'react';
import {
	Row, Col, Button, Alert, Form,
} from 'react-bootstrap';

class EditProfileModal extends Component {
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
			project_description,
			project_start_date,
			project_end_date,
		} = this.state;
		return (
			<div>
				<div className='modal-header'>
					Edit Profile
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

export default EditProfileModal;
