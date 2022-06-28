import { Button, TextField } from '@mui/material';
import React, { Component } from 'react'
import './RegistrationForm.css';

class RegistrationForm extends Component {
  state = {}
  render() {
    return (
      <form>
        <TextField id="outlined-basic" label="Title" variant="outlined" sx={{ my: 2 }} color="grey" fullWidth />
        <TextField id="outlined-basic" label="Content" variant="outlined" multiline rows={5} sx={{ my: 2 }} color="grey" fullWidth />
        <Button variant="contained" sx={{ my: 1, px: 5, py: 1 }}>Save</Button>
      </form>
    );
  }
}

export default RegistrationForm;