import React, { Component } from 'react';
import {
	Row, Col, Button,
} from 'react-bootstrap';
import './Interactivity.css';

class Interactivity extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.props.setHeaderTitle('Interactivity');
	}

	render() {
		return (
			<div>
				<Row>
					<Col>
						<div className='box'>
							<Row>
								<Col>
									Access to the tool for generating interactivity with your viewers.
								</Col>
								<Col className='d-flex justify-content-end'>
									<a href='https://weband.tv/instant/admin/account/'>
										<Button className='btn-secondary'>
											Interactivity
										</Button>
									</a>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Interactivity;
