import React from 'react';

export const DeleteEvent = ({ onDelete, eventText, onClose }) => {
  return(
    <>
      <div id="deleteEvent">
        <h2>Event</h2>

        <p id="eventText">{eventText}</p>

        <button onClick={onDelete} id="deleteButton">Suprimer</button>
        <button onClick={onClose} id="closeButton">Fermer</button>
      </div>

      <div id="modalBackDrop"></div>
    </>
  );
};