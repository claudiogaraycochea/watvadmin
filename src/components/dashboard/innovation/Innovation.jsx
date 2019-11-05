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
									An idea or suggestion could be a big business, we love ear about your comments. Write us to <a href='mailto:claudio@weband.tv'>claudio@weband.tv</a>.
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
