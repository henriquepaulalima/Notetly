import NotesList from "./components/NotesList/NotesList";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

function App() {
  return (
    <div>
      <header>
        <h1>Notetly</h1>
      </header>
      <RegistrationForm />
      <NotesList />
    </div>
  );
}

export default App;
