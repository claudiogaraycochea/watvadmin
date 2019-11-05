import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';

class GenderWidget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			options: {},
		};
	}

	UNSAFE_componentWillMount() {
		const data = {
			labels: [
				'Undefined',
				'Male',
				'Female',
			],
			datasets: [
				{
					label: 'Gender',
					data: [
						70,
						60,
						15,
					],
					backgroundColor: [
						'#7077c5',
						'#16E7B5',
						'#FE7B7B',
					],
				},
			],
		};

		const options = {
			legend: {
				display: true,
			},
			maintainAspectRatio: false,
			responsive: true,
		};

		this.setState({ data, options });
	}

	render() {
		const { data, options } = this.state;
		return (
			<div className='box'>
				<Row>
					<Col className='min-bottom'>
						<h3>Gender</h3>
					</Col>
				</Row>
				<Row className='div-line'>
					<Col>
						<Pie
							data={data}
							width={300}
							height={280}
							options={options}
						/>
					</Col>
				</Row>
			</div>
		);
	}
}

export default GenderWidget;
