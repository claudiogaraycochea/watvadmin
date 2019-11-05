import React, { Component } from 'react';
import {
	Row, Col, Button,
} from 'react-bootstrap';
import './Innovation.css';

class Innovation extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.props.setHeaderTitle('Innovation');
	}

	render() {
		return (
			<div>
				<Row>
					<Col>
						<div className='box'>
							<Row>
								<Col>
									Click here to access to Innovation
								</Col>
								<Col className='d-flex justify-content-end'>
									<a href='https://analytics.google.com/analytics/web/'>
										<Button className='btn-secondary'>
											Visit Innovation
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

export default Innovation;
