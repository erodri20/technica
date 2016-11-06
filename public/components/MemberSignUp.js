import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

export default class MemberSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orgName: '',
      chapName: '',
      memName: '',
      username: '',
      phoneNumber: '',
    }
    this.handleOrgNameChange = this.handleOrgNameChange.bind(this);
    this.handleChapNameChange = this.handleChapNameChange.bind(this);
    this.handleMemNameChange = this.handleMemNameChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
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

  handleSubmit() {
    this.setState({
      orgName: this.state.orgName,
      chapName: this.state.chapName,
      memName: this.state.memName,
      username: this.state.username,
      phoneNumber: this.state.phoneNumber,
    });

    let self = this;
    axios.post('/signupmember', {
      orgName: this.state.orgName,
      chapName: this.state.chapName,
      memName: this.state.memName,
      username: this.state.username,
      phoneNumber: this.state.phoneNumber,
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
        <h1>Member Sign Up</h1>
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
          floatingLabelText="Full Name"
        /><br />
        <TextField
          value={this.state.username}
          onChange={this.handleUsernameChange}
          floatingLabelText="Username"
        /><br />
        <TextField
          value={this.state.phoneNumber}
          onChange={this.handlePhoneNumberChange}
          floatingLabelText="Phone Number"
        /><br />
        <RaisedButton label="Submit" secondary={true} onTouchTap={this.handleSubmit}/>
      </div>
      </MuiThemeProvider>

    )
  }
}
