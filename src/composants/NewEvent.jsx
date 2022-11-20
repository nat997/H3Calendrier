import React, { useState } from 'react';

export const NewEventModal = ({ onSave, onClose }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);
  const [Desc, setDesc] = useState('');
  return(
    <>
      <div id="newEvent">
        <h2>Your appointment :</h2>

        <input 
          className={error ? 'error' : ''}
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          id="eventTitleInput" 
          placeholder="Title" 
        />
        <input 
          className={error ? 'error' : ''}
          value={Desc} 
          onChange={e => setDesc(e.target.value)} 
          id="eventDescriptionInput" 
          placeholder="Description" 
        />
        <button 
          onClick={() => {
            if (title) {
              setError(false);
              onSave(title+ ":" +Desc);
            } else {
              setError(true);
            }
          }} 
          id="saveButton">Save</button>


        <button 
          onClick={onClose}
          id="cancelButton">Cancel</button>
      </div>

      <div id="BackDrop"></div>
    </>
  );
};