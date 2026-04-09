import { useState } from 'react';

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleSave = () => {
    if (editText.trim().length > 0) {
      handleEditNote(id, editText);
      setIsEditing(false);
    }
  };

  return (
    <div className="note-card">
      {isEditing ? (
        <textarea
          className="edit-textarea"
          rows="5"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        ></textarea>
      ) : (
        <span className="note-text">{text}</span>
      )}

      <div className="note-footer">
        <small>{date}</small>
        <div className="note-actions">
          {isEditing ? (
            <button className="save-btn" onClick={handleSave}>Done</button>
          ) : (
            <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
          )}
          <button className="delete-btn" onClick={() => handleDeleteNote(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Note;