import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Line as LineChart } from 'react-chartjs-2';

class CostRevenues extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			options: {},
		};
	}

	UNSAFE_componentWillMount() {
		const data = {
			labels: ['1'],
			datasets: [
				{
					label: 'Cost',
					data: [0],
					borderColor: '#388cf2',
					pointBorderColor: '#388cf2',
					pointBackgroundColor: '#388cf2',
					pointBorderWidth: 1,
				},
			],
		};

		const options = {
			legend: {
				display: false,
			},
			maintainAspectRatio: false,
			responsive: true,
			cutoutPercentage: 60,
			scales: {
				xAxes: [{
					stacked: true,
				}],
				yAxes: [{
					stacked: false,
				}],
			},
		};

		this.setState({ data, options });
	}

	render() {
		const { data, options } = this.state;
		return (
			<div className='box margin-bottom'>
				<Row>
					<Col className='min-bottom'>
						<h3>Sum of Costs</h3>
					</Col>
				</Row>
				<Row className='div-line'>
					<Col>
						<LineChart
							data={data}
							height={240}
							options={options}
						/>
					</Col>
				</Row>
			</div>
		);
	}
}

export default CostRevenues;
