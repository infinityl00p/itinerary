import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Step1 extends React.Component {
  render() {
    return(
      <div className="col-md-6 col-md-offset-3">
         <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your Wedding Name"
             floatingLabelText="Sukh Weds Kiran"
             />
           <br/>
           <RaisedButton label="Submit" primary={true} />
          </div>
         </MuiThemeProvider>
      </div>
    )
  }
}