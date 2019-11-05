import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import PropTypes from 'prop-types';

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
			labels: [
				'Phase A',
				'Phase B',
				'Phase C',
				'Phase D',
				'Phase E',
				'Phase F',
				'Phase G',
			],
			datasets: [
				{
					label: 'Tasks Status',
					data: [
						70,
						60,
						15,
						20,
						90,
						30,
						100,
					],
					backgroundColor: [
						'#7077c5',
						'#16E7B5',
						'#FE7B7B',
						'#f9a75e',
						'#ffd042',
						'#ca6bc2',
						'#4593ef',
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
						<h3>Cost Per Phases</h3>
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

CostRevenues.propTypes = {
	fullPhases: PropTypes.object,
};

CostRevenues.defaultProps = {
	fullPhases: {},
};

export default CostRevenues;
