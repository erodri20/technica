import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import axios from 'axios';

export default class Console extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Elise",
      opportunities: [
        {name: "Sample Opportunity",
        description: "Sample Description",
        points: "15"}
      ],
      oppName: '',
      points: '',
      oppDescription: ''
    }

    this.handleOppNameChange = this.handleOppNameChange.bind(this);
    this.handlePointsChange = this.handlePointsChange.bind(this);
    this.handleOppDescriptionChange = this.handleOppDescriptionChange.bind(this);

  }

  handleOppNameChange(event) {
    this.setState({oppName: event.target.value});
    console.log("opp name " + this.state.oppName);
  }

  handlePointsChange(event) {
    this.setState({points: event.target.value});
    console.log("points " + this.state.points);
  }

  handleOppDescriptionChange(event) {
    this.setState({oppDescription: event.target.value});
    console.log("opp name " + this.state.oppDescription);
  }

  render() {
    return (
      <MuiThemeProvider>
      <div>
        <h1>Hello, {this.state.username}!</h1>
        <h2>Points Opportunities</h2>
        <p>Add Opportunity</p>
        <TextField
          value={this.state.oppName}
          onChange={this.handleOppNameChange}
          floatingLabelText="Opportunity Name"
        />
        <TextField
          value={this.state.points}
          onChange={this.handlePointsChange}
          floatingLabelText="Points"
        /><br />
        <TextField
          value={this.state.oppDescription}
          onChange={this.handleOppDescriptionChange}
          floatingLabelText="Opportunity Description"
        /><br />
        <List>
          <ListItem
            primaryText={this.state.opportunities[0].name}
            secondaryText={this.state.opportunities[0].description}>
            {this.state.opportunities[0].points}
          </ListItem>
        </List>
      </div>
      </MuiThemeProvider>
    );
  }
}
