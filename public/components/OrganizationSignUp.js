import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

export default class OrganizationSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orgName: '',
      chapName: '',
      memName: '',
      username: '',
      phoneNumber: '',
      password: '',
      password2: '',
      organizations: []
    }
    this.handleOrgNameChange = this.handleOrgNameChange.bind(this);
    this.handleChapNameChange = this.handleChapNameChange.bind(this);
    this.handleMemNameChange = this.handleMemNameChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePassword2Change = this.handlePassword2Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOrgNameChange(event) {
    this.setState({orgName: event.target.value});
    console.log("org name " + this.state.orgName);
  }

  handleChapNameChange(event) {
    this.setState({chapName: event.target.value});
    console.log("chap name " + this.state.chapName);
  }
  handleMemNameChange(event) {
    this.setState({memName: event.target.value});
    console.log("mem name " + this.state.memName);
  }
  handleUsernameChange(event) {
    this.setState({username: event.target.value});
    console.log("username " + this.state.username);
  }
  handlePhoneNumberChange(event) {
    this.setState({phoneNumber: event.target.value});
    console.log("phone num " + this.state.phoneNumber);
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
    console.log("password " + this.state.password);
  }
  handlePassword2Change(event) {
    this.setState({password2: event.target.value});
    console.log("password2 " + this.state.password2);
  }

  handleSubmit() {
    this.setState({
      orgName: this.state.orgName,
      chapName: this.state.chapName,
      memName: this.state.memName,
      username: this.state.username,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      password2: this.state.password2,
    });

    let self = this;
    axios.post('/signuporg', {
      orgName: this.state.orgName,
      chapName: this.state.chapName,
      memName: this.state.memName,
      username: this.state.username,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      password2: this.state.password2,
    }).then(function(response) {
      console.log(this.state.orgName + this.state.chapName + this.state.memName);
    }).catch(function(error) {
      console.log("error: " + error);
    })


  }

  render() {
    return (
      <MuiThemeProvider>
      <div>
        <h1>Organization Sign Up</h1>
        <TextField
          value={this.state.orgName}
          onChange={this.handleOrgNameChange}
          floatingLabelText="Organization Name"
        /><br />
        <TextField
          value={this.state.chapName}
          onChange={this.handleChapNameChange}
          floatingLabelText="Chapter Name"
        /><br />
        <TextField
          value={this.state.memName}
          onChange={this.handleMemNameChange}
          floatingLabelText="Executive Member Name"
        /><br />
        <TextField
          value={this.state.username}
          onChange={this.handleUsernameChange}
          floatingLabelText="Executive Member Username"
        /><br />
        <TextField
          value={this.state.phoneNumber}
          onChange={this.handlePhoneNumberChange}
          floatingLabelText="Executive Member Phone Number"
        /><br />
        <TextField
          value={this.state.password}
          onChange={this.handlePasswordChange}
          floatingLabelText="Password"
          type="password"
        /><br />
        <TextField
          value={this.state.password2}
          onChange={this.handlePassword2Change}
          floatingLabelText="Confirm Password"
          type="password"
        /><br />
        <RaisedButton label="Submit" secondary={true} onTouchTap={this.handleSubmit}/>
      </div>
      </MuiThemeProvider>

    )
  }
}

//TODO organization name, chapter name, executive member name, phone number, confirmation code, password
