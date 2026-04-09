import { useState, useRef, useEffect } from 'react';

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const inputRef = useRef(null);

  // Focus the textarea on component mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
      inputRef.current.focus(); // Refocus after saving
    }
  };

  return (
    <div className="note-card add-note">
      <textarea
        ref={inputRef}
        rows="8"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      ></textarea>
      <div className="note-footer">
        <button className="save" onClick={handleSaveClick}>Save Note</button>
      </div>
    </div>
  );
};

export default AddNote;