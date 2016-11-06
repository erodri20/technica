import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SignUp from './SignUp';
import Login from './Login';
import { Link } from 'react-router';

export default class IndexPage extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Login />
					<Link to="/signup"><p>Or register here!</p></Link>
				</div>
			</MuiThemeProvider>
		);
	}
}
