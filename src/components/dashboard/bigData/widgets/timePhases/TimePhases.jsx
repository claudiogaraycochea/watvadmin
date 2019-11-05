import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

class AverageCost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	UNSAFE_componentWillMount() {
		const data = {
			labels: [],
			datasets: [
				{
					label: 'Tasks Status',
					data: [],
					backgroundColor: [],
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
					stacked: true,
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
						<h3>Time by Phases/Tasks (Days)</h3>
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

export default AverageCost;
