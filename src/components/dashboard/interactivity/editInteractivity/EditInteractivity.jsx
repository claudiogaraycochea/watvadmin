import React, { Component } from 'react';
import PropType from 'prop-types';
import {
	Row, Col, Form, Button,
} from 'react-bootstrap';
import { Table, Modal } from '../../../ui/Theme';
import './EditInteractivity.css';
import AddMicrowebsiteModal from './modals/addMicrowebsite/AddMicrowebsiteModalContainer';
import EditMicrowebsiteModal from './modals/editMicrowebsite/EditMicrowebsiteModalContainer';
import AddScheduleModal from './modals/addSchedule/AddScheduleModalContainer';
import PublishScheduleModal from './modals/publishSchedule/PublishScheduleModalContainer';
import RemoveScheduleModal from './modals/removeSchedule/RemoveScheduleModalContainer';

const schedule = [
	{
		name: 'Ads',
		url: 'https://www.',
		execute_time: '10:20:10'
	},
	{
		name: 'Aplausemeter',
		url: 'https://www.',
		execute_time: '10:20:30'
	},
	{
		name: 'Vote Actor',
		url: 'https://www.',
		execute_time: '10:20:50'
	},
]

class EditInteractivity extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalShow: false,
			children: <div />,
		};
		this.props.setHeaderTitle('Interactivity');
		this.props.setMenu('little');
		this.handleModalClose = this.handleModalClose.bind(this);
		this.handleModalAccept = this.handleModalAccept.bind(this);
	}

	handleModalClose() {
		this.setState({ modalShow: false });
	}

	handleModalAccept() {
		this.setState({ modalShow: false });
	}

	handleModal(children) {
		this.setState({ modalShow: true, children });
	}

	render() {
		const {
			modalShow,
			children,
		} = this.state;
		return (
			<div className='full-height'>
				<Row>
					<Col>
						<h2>Interactivity</h2>
					</Col>
					<Col className='d-flex justify-content-end'>
						<div>https://weband.tv/linkname</div>
					</Col>
				</Row>
				<Row className='full-height'>
					<Col className='pr-0'>
						<div className='box box-interactivity'>
							<Row className='box-header'>
								<Col>
									<h3>Microwebsites</h3>
								</Col>
								<Col className='d-flex justify-content-end'>
									<Button
										className='btn btn-secondary btn-header btn-small'
										onClick={() => this.handleModal(
											<AddMicrowebsiteModal
												handleModalClose={this.handleModalClose}
												handleModalAccept={this.handleModalAccept}
											/>,
										)}
									>
										+
									</Button>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group>
										<Form.Control
											type='text'
											placeholder='Search'
											value=''
											readOnly
										/>
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col>
									<div className='list-wrapper'>
										<Table>
											<tbody>
											{schedule.map((item, index) => {
												return (
													<tr key={index}>
														<td>
															{item.name}
														</td>
														<td>
															<div className='d-flex justify-content-end'>
																<Button
																	className='btn btn-primary btn-small'
																	onClick={() => this.handleModal(
																		<EditMicrowebsiteModal
																			handleModalClose={this.handleModalClose}
																			handleModalAccept={this.handleModalAccept}
																		/>,
																	)}
																>
																	Edit
																</Button>
																<Button
																	className='btn btn-secondary btn-small'
																	onClick={() => this.handleModal(
																		<AddScheduleModal
																			handleModalClose={this.handleModalClose}
																			handleModalAccept={this.handleModalAccept}
																		/>,
																	)}
																>
																	Send
																</Button>																
															</div>
														</td>
													</tr>
												)
											})
											}
											</tbody>
										</Table>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
					<Col className='pr-0'>
						<div className='box box-interactivity'>
							<Row className='box-header'>
								<Col>
									<h3>Schedule</h3>
								</Col>
								<Col className='d-flex justify-content-end'>
									<Button
										className='btn btn-secondary btn-header btn-small'
										onClick={() => this.handleModal(
											<PublishScheduleModal
												handleModalClose={this.handleModalClose}
												handleModalAccept={this.handleModalAccept}
											/>,
										)}
									>
										Publish
									</Button>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group>
										<Form.Control
											type='text'
											placeholder='Search'
											value=''
											readOnly
										/>
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col>
									<div className='list-wrapper'>
										<Table>
											<tbody>
											{schedule.map((item, index) => {
												return (
													<tr key={index}>
														<td className='div-right'>
															{item.execute_time}
														</td>
														<td>
															{item.name}
														</td>
														<td>
															<Button
																className='btn btn-secondary btn-small'
																onClick={() => this.handleModal(
																	<RemoveScheduleModal
																		handleModalClose={this.handleModalClose}
																		handleModalAccept={this.handleModalAccept}
																	/>,
																)}
															>
																x
															</Button>	
														</td>
													</tr>
												)
											})
											}
											</tbody>
										</Table>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
					<Col className='pr-0'>
						<div className='box box-interactivity'>
							<Row className='box-header'>
								<Col>
									<h3>Playlist</h3>
								</Col>
								<Col className='d-flex justify-content-end'>
									<h3>00:00:00hs</h3>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group>
										<Form.Control
											type='text'
											placeholder='Search'
											value=''
											readOnly
										/>
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col>
									<div className='list-wrapper'>
										<Table>
											<tbody>
												{schedule.map((item, index) => {
													return (
														<tr key={index}>
															<td className='div-right'>
																{item.execute_time}
															</td>
															<td>
																{item.name}
															</td>
														</tr>
													)
												})
												}
											</tbody>
										</Table>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
					<Col>
						<div className='box box-interactivity box-dark'>
							<Row className='full-height'>
								<Col className='mb-0'>
									<iframe 
										title={'watv'}
										src='https://weband.tv/intrusos'
										className="app-iframe-container"
								  />
								</Col>
							</Row>
						</div>
					</Col>
				</Row>

				<Modal
					show={modalShow}
					handleClose={this.handleModalClose}
					handleAccept={this.handleModalAccept}
				>
					{children}
				</Modal>
			</div>
		);
	}
}

EditInteractivity.propTypes = {
	setMenu: PropType.func,
};

EditInteractivity.defaultProps = {
	setMenu: () => null,
};

export default (EditInteractivity);
