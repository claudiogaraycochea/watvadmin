import React, { Component } from 'react';
import {
	Row, Col, Button,
} from 'react-bootstrap';
import './Support.css';

class Support extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.props.setHeaderTitle('Support');
	}

	render() {
		return (
			<div>
				<Row>
					<Col>
						<div className='box'>
							<Row>
								<Col>
									Click here to access to Support
								</Col>
								<Col className='d-flex justify-content-end'>
									<a href='https://analytics.google.com/analytics/web/'>
										<Button className='btn-secondary'>
											Visit Support
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

export default Support;
