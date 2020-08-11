import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth='sm'>
            <AppBar position='static'>
              <Toolbar>
                <Typography variant='h6'>Personal Details</Typography>
              </Toolbar>
            </AppBar>{' '}
            <TextField
              placeholder='Enter Your Occupation'
              label='Occupation'
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
              margin='normal'
              fullWidth
            />
            <br />
            <TextField
              placeholder='Enter Your City'
              label='City'
              onChange={handleChange('city')}
              defaultValue={values.city}
              margin='normal'
              fullWidth
            />
            <br />
            <TextField
              placeholder='Enter Your Bio'
              label='Bio'
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              margin='normal'
              fullWidth
            />
            <br />
            <Button color='secondary' variant='contained' onClick={this.back}>
              Back
            </Button>
            <Button color='primary' variant='contained' onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
