import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './Components/Header';
import AddNote from './Components/AddNote';
import NotesList from './Components/NotesList';

function App() {
  // Load notes from localStorage on initial render
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('fire-notes-data');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem('fire-notes-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const newNote = {
      id: uuidv4(),
      text: text,
      date: new Date().toLocaleDateString()
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (id, newText) => {
    const updatedNotes = notes.map((note) => 
      note.id === id ? { ...note, text: newText } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <div className='main'>
      <Header />
      <AddNote handleAddNote={addNote} />
      <NotesList 
        notes={notes} 
        handleDeleteNote={deleteNote} 
        handleEditNote={editNote} 
      />
    </div>
  );
}

export default App;