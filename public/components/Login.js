import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
    console.log("username " + this.state.username);
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
    console.log("password " + this.state.password);
  }

  handleSubmit() {
    this.setState({
      username: this.state.username,
      password: this.state.password,
    });

    let self = this;
    axios.post('/login', {
      username: this.state.username,
      password: this.state.password,
    }).then(function(response) {
      console.log(this.state.username);
    }).catch(function(error) {
      console.log("error: " + error);
    })


  }

  render() {
    return (
      <MuiThemeProvider>
      <div>
        <h1>Log In</h1>

        <TextField
          value={this.state.username}
          onChange={this.handleUsernameChange}
          floatingLabelText="Executive Member Username"
        /><br />
        <TextField
          value={this.state.password}
          onChange={this.handlePasswordChange}
          floatingLabelText="Password"
          type="password"
        /><br />
        <RaisedButton label="Submit" secondary={true} onTouchTap={this.handleSubmit}/>
      </div>
      </MuiThemeProvider>

    )
  }
}
