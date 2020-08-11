import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth='sm'>
            <AppBar position='static'>
              <Toolbar>
                <Typography variant='h6'>User Information</Typography>
              </Toolbar>
            </AppBar>{' '}
            <TextField
              placeholder='Enter Your First Name'
              label='First Name'
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin='normal'
              fullWidth
            />
            <br />
            <TextField
              placeholder='Enter Your Last Name'
              label='Last Name'
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin='normal'
              fullWidth
            />
            <br />
            <TextField
              placeholder='Enter Your Email'
              label='Email'
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin='normal'
              fullWidth
            />
            <br />
            <Button color='primary' variant='contained' onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
