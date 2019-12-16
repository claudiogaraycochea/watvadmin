import React, { Component } from 'react';
import {
	Row, Col, Button, Alert, Form,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class RemoveScheduleModal extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			notification: {
				status: false,
				text: '',
			},
			project_name: '',
			url: 'http://wwwwww',
    };
	}

	render() {
		const {
			handleModalClose,
			handleModalAccept,
		} = this.props;
		const {
			notification,
			url,
		} = this.state;
		return (
			<div>
				<div className='modal-header'>
					Remove Schedule
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
            </Col>
					</Row>
				</div>
				<div className='modal-bottom'>
					<Button onClick={handleModalClose}>Cancel</Button>
					<Button
						className='btn-secondary'
						onClick={handleModalAccept}
					>
						Remove
					</Button>
				</div>
			</div>
		);
	}
}

export default RemoveScheduleModal;
