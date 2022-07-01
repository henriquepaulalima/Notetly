import { Grid, Typography } from "@mui/material";
import { Component } from "react";
import NotesList from "./components/NotesList/NotesList";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import NotesArray from "./data/Notes";

class App extends Component {
  constructor() {
    super();
    this.notes = new NotesArray();
  }

  render() {
    return (
      <div>
        <header>
          <Typography
            textAlign={'center'} variant="h3" component="div" sx={{ m: 0, color: '#000', fontSize: 32, fontWeight: 700 }} gutterBottom>
            Notetly
          </Typography>
        </header>
        <main>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <RegistrationForm createNote={this.notes.addNote.bind(this.notes)} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <NotesList deleteNote={this.notes.deleteNote.bind(this.notes)} notes={this.notes} />
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}
 
export default App;