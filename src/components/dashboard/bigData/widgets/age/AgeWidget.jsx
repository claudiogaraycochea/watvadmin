import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

class AgeWidget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	UNSAFE_componentWillMount() {
		const data = {
			labels: [
				'8-9',
				'10-14',
        '15-19',
        '20-24',
        '25-34',
        '35-39',
        '40-44',
        '45-54',
        '55-64',
        '65>',
      ],
      datasets: [
				{
					label: 'Age',
					data: [
						70,
						60,
            15,
            100,
            210,
            120,
            420,
            300,
            310,
            260,
					],
					backgroundColor: [
            '#7077c5',
						'#16E7B5',
            '#FE7B7B',
            '#7077c5',
						'#16E7B5',
            '#FE7B7B',
            '#7077c5',
						'#16E7B5',
            '#FE7B7B',
            '#7077c5',
						'#16E7B5',
						'#FE7B7B',
          ],
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
						<h3>Age</h3>
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

export default AgeWidget;
