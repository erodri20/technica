import React from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

export default class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "tiff",
			status: "not logged in"
		};
		/*}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		*/
	}

	/*
	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state.username);

		// send the request to Express
		let self = this;
		axios.post('/login', {
			username : this.state.username
		}).then(function (response) {
			console.log("success: " + response.status);
			self.setState({status: "logged in"});
		}).catch(function (error) {
			console.log("error: " + error);
			self.setState({status: "error"});
		})
	}*/

	render() {
		return (
			<MuiThemeProvider>
			<div>
				<h2>What are you?</h2>
				<Link to="/organizationsignup">
					<RaisedButton label="Organization" primary={true} />
				</Link>
    		<Link to="/membersignup">
					<RaisedButton label="Member" secondary={true} />
				</Link>
			</div>
			</MuiThemeProvider>
		);
	}
}
