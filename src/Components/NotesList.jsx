import Note from './Note';

const NotesList = ({ notes, handleDeleteNote, handleEditNote }) => {
  return (
    <div className="notes">
      {notes.map((note) => (
        <Note 
          key={note.id} 
          id={note.id} 
          text={note.text} 
          date={note.date} 
          handleDeleteNote={handleDeleteNote} 
          handleEditNote={handleEditNote} 
        />
      ))}
    </div>
  );
};

export default NotesList;