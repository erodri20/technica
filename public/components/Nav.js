import React from 'react';
import ReactDOM from 'react-dom';

import * as Colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: Colors.deepOrange500,
  }
});


class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      conversations: [
        {id: 5, messageLog: []},
        {id: 1, messageLog: []},
        {id: 3, messageLog: []},
        {id: 6, messageLog: []},
        {id: 11, messageLog: []},
      ]
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.goToConversation = this.goToConversation.bind(this);
  }

  handleToggle() {
		this.setState({open: !this.state.open});
	}

  goToConversation(event) {
    console.log("Event: " + event.target.primaryText);
		this.handleToggle();
	}

  render(){
      return(
		<MuiThemeProvider>
    	<div>
  			<AppBar
          title="Ekho"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
		     {this.props.children}
        <Drawer open={this.state.open}>
          {this.state.conversations.map(function(listValue, i){
            return (
              <ListItem
                primaryText={listValue.id}
                key={i}>
              </ListItem>
            );
          })}
        </Drawer>

  
     </div>
		</MuiThemeProvider>
      );
  }
}
export default Nav;
