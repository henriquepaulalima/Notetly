import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { React, Component } from 'react';
import "./NoteCard.css";

class NoteCard extends Component {
  delete() {
    const index = this.props.index;
    this.props.deleteNote(index);
  }

  render() {
    return (
      <section>
        <Card sx={{ p: 2, m: 2, width: 300, backgroundColor: '#212121' }}>
          <CardActions className='card-actions'>
            <Button className='card-actions_btn' variant="contained" sx={{ color: '#000', background: '#fff' }} >Card details</Button>
            <DeleteIcon className='card-actions_delete-btn' sx={{ color: '#fff' }} onClick={this.delete.bind(this)} />
          </CardActions>
          <CardContent>
            <Typography variant="h6" component="div" sx={{ color: '#fff' }} gutterBottom>
              {this.props.title}
            </Typography>
            <Typography variant="body1" sx={{ color: '#c0c0c0' }} gutterBottom>
              {this.props.content}
            </Typography>
          </CardContent>
        </Card>
      </section>
    );
  }
}

export default NoteCard;