import { Button, TextField } from '@mui/material';
import React, { Component } from 'react'
import './RegistrationForm.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.content = "";
  }

  _handleTitleChange(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleContentChange(event) {
    event.stopPropagation();
    this.content = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.content);
  }

  render() {
    return (
      <form id='registrationForm' onSubmit={this._createNote.bind(this)}>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          sx={{ my: 2 }}
          color="grey"
          fullWidth
          onChange={this._handleTitleChange.bind(this)}
        />
        <TextField
          id="outlined-basic"
          label="Content"
          variant="outlined"
          multiline
          rows={5}
          sx={{ my: 2 }} color="grey"
          fullWidth
          onChange={this._handleContentChange.bind(this)}
        />

        <Button 
          variant="contained" 
          sx={{ my: 1, px: 5, py: 1 }} 
          type="submit" 
          form="registrationForm" 
        >Save</Button>
      </form>
    );
  }
}

export default RegistrationForm;