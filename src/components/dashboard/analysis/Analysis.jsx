import React, { Component } from 'react';
import {
	Row, Col, Button,
} from 'react-bootstrap';
import './Analysis.css';

class Analysis extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.props.setHeaderTitle('Analysis');
	}

	render() {
		return (
			<div>
				<Row>
					<Col>
						<div className='box'>
							<Row>
								<Col>
									Click here to access to Google Analytics
								</Col>
								<Col className='d-flex justify-content-end'>
									<a href='https://analytics.google.com/analytics/web/'>
										<Button className='btn-secondary'>
											Visit Google Analytics
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

export default Analysis;
