import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

class TimeWidget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	UNSAFE_componentWillMount() {
		const data = {
			labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
			datasets: [
				{
					borderColor: '#388cf2',
					pointBorderColor: '#388cf2',
					pointBackgroundColor: '#388cf2',
					pointBorderWidth: 1,
					label: 'Time',
					data: [
						40000,
						20000,
						10000,
						50000,
						200000,
						100000,
						230000,
						100000,
						200000,
						300000,
						600000,
						900000,
						2000000,
						1800000,
						1500000,
						2300000,
						1200000,
						800000,
						600000,
						1500000,
						1800000,
						2000000,
						2500000,
						2200000,
						1000000,
					],
					backgroundColor: '#2E1467',
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
					stacked: false,
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
			<div className='box'>
				<Row>
					<Col className='min-bottom'>
						<h3>Viewers by time</h3>
					</Col>
				</Row>
				<Row className='div-line none-bottom'>
					<Col>
						<Bar
							data={data}
							height={280}
							options={options}
						/>
					</Col>
				</Row>
			</div>
		);
	}
}

export default TimeWidget;
