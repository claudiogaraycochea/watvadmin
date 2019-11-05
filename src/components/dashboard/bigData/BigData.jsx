import React, { Component } from 'react';
import {
	Row, Col,
} from 'react-bootstrap';
import './BigData.css';

import CostRevenues from './widgets/costRevenues/CostRevenues';
import AverageCost from './widgets/averageCost/AverageCost';
import CostPhases from './widgets/costPhases/CostPhases';
import TimePhases from './widgets/timePhases/TimePhases';

class BigData extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.props.setHeaderTitle('BIG DATA');
	}

	render() {
		return (
			<div>
				<Row>
					<Col>
						<h2>Big Data</h2>
					</Col>				
				</Row>
				<Row>
					<Col>
						<div className='box'>
							<h3>Total Earning</h3>
							<div>
								300,000
							</div>
						</div>
					</Col>
					<Col>
						<div className='box'>
							<h3>Ads</h3>
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
						<CostRevenues />
					</Col>
				</Row>
				<Row>
					<Col>
						<CostPhases />
					</Col>
					<Col>
						<TimePhases />
					</Col>
					<Col>
						<AverageCost />
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
		);
	}
}

export default BigData;
