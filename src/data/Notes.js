export default class NotesArray {
  constructor() {
    this.notes = [];
    this._assigned = [];
  }

  addNote(title, content) {
    const newNote = new Note(title, content);
    this.notes.push(newNote);
    this.notify();
  }

  deleteNote(index) {
    this.notes.splice(index, 1);
    this.notify();
  }

  assign(func) {
    this._assigned.push(func);
  }

  unassign(func) {
    this._assigned = this._assigned.filter(f => f !== func);
  }

  notify() {
    this._assigned.forEach(func => {
      func(this.notes);
    });
  }
}

class Note {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}