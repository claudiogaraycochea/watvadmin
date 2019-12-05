import React from 'react';
import {
	Button, Form, Row, Col, Alert,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import { request, ContentTypes } from '../../../lib/apiConnect';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			notification: {
				status: false,
				text: '',
			},
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	async login() {
		const { email, password } = this.state;
		const data = {
			email,
			password
		};
		const endpoint = '/users/login';
		try {
			const resp = await request('POST', endpoint, data, { 
					'content-type': ContentTypes.json,
					headers: { 'X-Authenticated-Userid': '15000500000@1' }
				} 
			);
			localStorage.setItem('token', resp.data.token);
			this.props.history.push('/dashboard/');
			console.log(resp);
		} catch (err) {
			console.error(err);
			this.setState({
				notification: {
					status: true,
					text: 'User or password wrong',
				},
			});
		}
	}

	onHandleSubmit = (event) => {
		event.preventDefault();
		console.log('Login: onHandleSubmit');
		const { email, password } = this.state;
		if (email !== '' && password !== '') {
			console.log('open');
			this.login();
		}
	};

	handleInputChange(event) {
		const { target } = event;
		const { name } = target;
		const value = target.type === 'checkbox' ? target.checked : target.value;

		this.setState({ [name]: value });
	}

	render() {
		const {
			email,
			password,
			notification,
		} = this.state;
		
		return (
			<div className='login-wrapper'>
				<div className='center-wrapper'>
					<Row>
						<Col>
							<div className='logo-wrapper'>
								<i className='logo-webandtv large' />
							</div>
						</Col>
					</Row>
					{(notification.status) ? <Alert variant='danger'>{notification.text}</Alert> : null}
					<Form onSubmit={this.onHandleSubmit}>
						<Form.Group>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type='email'
								placeholder='Email'
								name='email'
								value={email}
								onChange={this.handleInputChange}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Password'
								name='password'
								value={password}
								onChange={this.handleInputChange}
							/>
						</Form.Group>
						<Row>
							<Col className='d-flex justify-content-end'>
								<Button
									variant='secondary'
									type='submit' 
									className='btn-login'>
									Login
								</Button>
							</Col>
						</Row>
						<Row>
							<Col>
								<Link to='/auth/forgotpassword'>
									Forgot password?
								</Link>
							</Col>
						</Row>
					</Form>
				</div>
			</div>
		);
	};
}

export default Login;
