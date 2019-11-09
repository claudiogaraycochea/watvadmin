import React from 'react';
import {
	Button, Form, Row, Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	onHandleSubmit = (event) => {
		event.preventDefault();
		
		console.log('Login: onHandleSubmit');
		const { email, password } = this.state;
		if (email !== '' && password !== '') {
			console.log('open');
			// this.setState({ updated: true });
			this.props.history.push('/dashboard/');
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
