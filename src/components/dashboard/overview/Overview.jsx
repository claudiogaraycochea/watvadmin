import React, { Component } from 'react';
import {
	Row, Col,
} from 'react-bootstrap';
import './Overview.css';

class Overview extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.props.setHeaderTitle('Welcome');
	}

	render() {
		return (
			<div>
				<Row>
					<Col>
						<h2>Title</h2>
					</Col>				
				</Row>
				<Row>
					<Col>
						<div className='box'>
							<h3>Overall Data </h3>
							<div>
								<small className='text-muted'>Total Views</small>
								300,000
							</div>
							<div>
								Average Views per Day
								50,000 Visits
							</div>
						</div>
					</Col>
					<Col>
						<div className='box'>
							<h3>Earned</h3>
							<div>
								Total
								$500,000
							</div>
							<div>
								MICRO-PAYMENT:
								$200,000
							</div>
							<div>
								MICRO-ADS
								$300,000 
							</div>
						</div>
					</Col>
					<Col>
						<div className='box'>
							<h3>Visits this month</h3>
							<div>
								Intrusos    3,000,000    $100,000
							</div>
							<div>
								Incorrectas    3,000,000    $100,000
							</div>
							<div>
								Pamela a la tarde 3,000,000    $100,000
							</div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className='box'>
							Revenue by Months
						</div>
					</Col>
				</Row>
			</div>
		)
	}
}

export default Overview;
