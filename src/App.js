import { Grid, Typography } from "@mui/material";
import NotesList from "./components/NotesList/NotesList";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

function App() {
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
            <RegistrationForm />
          </Grid>
          <Grid item xs={12} sm={8}>
            <NotesList />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default App;
