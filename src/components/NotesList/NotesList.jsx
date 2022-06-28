import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { Component } from 'react';
import './NotesList.css';
import DeleteIcon from '@mui/icons-material/Delete';

class NotesList extends Component {
  state = {}
  render() {
    return (
      <section>
        <Card sx={{ p: 2, m: 2, width: 300, backgroundColor: '#212121' }}>
          <CardActions className='card-actions'>
            <Button className='card-actions_btn' variant="contained" sx={{ color: '#000', background: '#fff' }} >Card details</Button>
            <DeleteIcon className='card-actions_delete-btn' sx={{ color: '#fff' }} />
          </CardActions>
          <CardContent>
            <Typography variant="h6" component="div" sx={{ color: '#fff' }} gutterBottom>
              Title
            </Typography>
            <Typography variant="body1" sx={{ color: '#c0c0c0' }} gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius finibus pharetra. Morbi varius, purus nec faucibus tincidunt, dui neque volutpat metus, quis dapibus risus magna in urna.
            </Typography>
          </CardContent>
        </Card>
      </section>
    );
  }
}

export default NotesList;