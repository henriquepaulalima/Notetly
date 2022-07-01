import React, { Component } from 'react';
import './NotesList.css';
import NoteCard from '../NoteCard';

class NotesList extends Component {
  constructor() {
    super();
    this.state = { notes: [] };
    this._newNotes = this._newNotes.bind(this);
  }

  componentDidMount() {
    this.props.notes.assign(this._newNotes);
  }

  componentWillUnmount() {
    this.props.notes.unassign(this._newNotes);
  }

  _newNotes(notes) {
    this.setState({ ...this.state, notes });
  }

  render() {
    return (
      <ul>
        {this.state.notes.map((note, index) => {
          return (
            <li key={index}>
              <NoteCard
                index={index}
                deleteNote={this.props.deleteNote}
                title={note.title}
                content={note.content}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NotesList;