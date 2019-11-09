import React, { Component } from 'react';
import {
	Row, Col,
} from 'react-bootstrap';
import { Table } from '../../../ui/Theme';
import './Detail.css';

const micropayments = [
	{
		micropayment_id: '2384723989',
		name: 'Claudio Garaycochea',
		date: '10:22hs 10/01/2019',
		amount: '20', 
	},
	{
		micropayment_id: '2384723938',
		name: 'Rubén Martinez',
		date: '10:07hs 10/01/2019',
		amount: '20', 
	},
	{
		micropayment_id: '2384722435',
		name: 'Claudio Garaycochea',
		date: '10:07hs 10/01/2019',
		amount: '20', 
	},
	{
		micropayment_id: '2385723981',
		name: 'Rubén Martinez',
		date: '10:06hs 10/01/2019',
		amount: '20', 
	},
	{
		micropayment_id: '5433634632',
		name: 'Claudio Garaycochea',
		date: '10:05hs 10/01/2019',
		amount: '20', 
	},
	{
		micropayment_id: '5345276266',
		name: 'Rubén Martinez',
		date: '10:05hs 10/01/2019',
		amount: '20', 
	},
	{
		micropayment_id: '6547645785',
		name: 'Claudio Garaycochea',
		date: '10:04hs 10/01/2019',
		amount: '20', 
	},
	{
		micropayment_id: '7368458943',
		name: 'Rubén Martinez',
		date: '10:04hs 10/01/2019',
		amount: '20', 
	},
	{
		micropayment_id: '4353454363',
		name: 'Claudio Garaycochea',
		date: '10:03hs 10/01/2019',
		amount: '20', 
	},
	{
		micropayment_id: '4363456346',
		name: 'Rubén Martinez',
		date: '10:01hs 10/01/2019',
		amount: '20', 
	},
];

class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.props.setHeaderTitle('DETAIL');
	}

	showMicropayments() {
		return micropayments.map((item)=> {
			return (
				<tr key={item.micropayment_id}>
					<td className='w-20'>{item.micropayment_id}</td>
					<td>{item.name}</td>
					<td>{item.date}</td>
					<td>{`$${item.amount}`}</td>
				</tr>
			);
		});
	}


	render() {
		return (
			<div>
				<Row>
					<Col>
						<h2>Detail</h2>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className='box'>
							<h3>Total Earning</h3>
							<div className='text-xlarge highlight'>
								$120,000
							</div>
						</div>
					</Col>
					<Col>
						<div className='box'>
							<h3>Advertises</h3>
							<div className='text-xlarge highlight'>
								6,000
							</div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className='box'>
							<div className='table-responsive'>
								<Table>
									<thead>
										<tr>
											<th className='w-20'>ID</th>
											<th>Name</th>
											<th>Time</th>
											<th>Payment</th>
										</tr>
									</thead>
									<tbody>
										{this.showMicropayments()}
									</tbody>
								</Table>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default (Detail);
