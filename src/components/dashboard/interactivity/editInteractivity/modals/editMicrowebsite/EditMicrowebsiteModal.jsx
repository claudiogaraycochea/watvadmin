import React, { Component } from 'react';
import {
	Row, Col, Button, Alert, Form,
} from 'react-bootstrap';

class EditMicrowebsiteModal extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			notification: {
				status: false,
				text: '',
			},
			project_name: '',
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
		} = this.state;
		return (
			<div>
				<div className='modal-header'>
					Edit Microwebsite
				</div>
				<div className='modal-container'>
					{(notification.status) ? <Alert variant='success'>{notification.text}</Alert> : null}
					<Row>
						<Col>
							<Form.Group>
								<Form.Label>Name</Form.Label>
								<Form.Control
									type='text'
									placeholder='Eg: Micropayment for vote'
									name='project_name'
									value={project_name}
									onChange={this.handleInputChange}
								/>
							</Form.Group>
              <Form.Group>
								<Form.Label>URL</Form.Label>
								<Form.Control
									type='text'
									placeholder='http://example.com/micropayment/xxxxxxxxx'
									name='project_name'
									value={project_name}
									onChange={this.handleInputChange}
								/>
							</Form.Group>
            </Col>
					</Row>
				</div>
				<div className='modal-bottom'>
					<Button onClick={handleModalClose}>Cancel</Button>
					<Button
						className='btn-secondary'
						onClick={handleModalAccept}
					>
						Save
					</Button>
				</div>
			</div>
		);
	}
}

export default EditMicrowebsiteModal;
