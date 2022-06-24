function App() {
  return (
    <div>
      <header className="nav">
        <h1>Notetly</h1>
        <p>A note taking app</p>
      </header>
      <main>
        <div className="note-area">
          <div className="note-area-add">
            <h2>Add a new note</h2>

            <div className="note-area-add_input">
              <label>Note title</label>
              <input type="text" />
            </div>

            <div className="note-area-add_input">
              <label>Note content</label>
              <textarea rows="10"/>
            </div>

            <button>Save note</button>
          </div>
        </div>
      </main>
      <footer className="footer">
        <a href="https://github.com/henriquepaulalima" target="_blank" rel="noopener noreferrer"><p>Henrique P. Lima &copy;</p></a>
      </footer>
    </div>
  );
}

export default App;
