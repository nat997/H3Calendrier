import React from 'react';
export const CalendarHeader = ({ onNext, onBack, dateDisplay }) => {
  return(
    <div id="header">
        <ion-icon onClick={onBack} name="play-skip-back" id="backward"></ion-icon>
        <span id="monthDisplay" >{dateDisplay}</span>
        <ion-icon onClick={onNext} name="play-skip-forward" id="forward"></ion-icon>
    </div>
  );
};