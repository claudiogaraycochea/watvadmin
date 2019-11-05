import React, { Component } from 'react';
import {
	Row, Col,
} from 'react-bootstrap';
import { Table } from '../../../ui/Theme';
import './Detail.css';

class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.props.setHeaderTitle('DETAIL');
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
							<h3>Views</h3>
							<div className='text-xlarge highlight'>
								2000
							</div>
						</div>
					</Col>
					<Col>
						<div className='box'>
							<h3>Clicks</h3>
							<div className='text-xlarge highlight'>
								2
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
										<tr>
											<td className='w-20'>29102332131</td>
											<td>Claudio Garaycochea</td>
											<td>10:20hs 10/01/2019</td>
											<td>$20</td>
										</tr>
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
