import React, { Component } from 'react';
import {
	Row, Col, Button, Alert,
} from 'react-bootstrap';

class RemoveModal extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			notification: {
				status: false,
				text: '',
			},
		};
	}

	render() {
		const {
			handleModalClose,
			handleModalAccept,
		} = this.props;
		const {
			notification,
		} = this.state;
		return (
			<div>
				<div className='modal-header'>
					Remove Micro Payment
				</div>
				<div className='modal-container'>
					{(notification.status) ? <Alert variant='success'>{notification.text}</Alert> : null}
					<Row>
						<Col>
							Do you wish to remove this project?
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

export default RemoveModal;
