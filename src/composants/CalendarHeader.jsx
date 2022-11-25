import React from 'react';
export const CalendarHeader = ({ onNextMonth,onNextYear,onBackMonth,onBackYear,MonthDisplay,YearDisplay }) => {
  return(
    <div id ="header">
    <div id="monthHeader">
        <ion-icon onClick={onBackMonth} name="play-skip-back" id="backwardMonth"></ion-icon>
        <span id="monthDisplay" >{MonthDisplay}</span>
        <ion-icon onClick={onNextMonth} name="play-skip-forward" id="forwardMonth"></ion-icon>
    </div>

    <div id ="yearHeader">
        <ion-icon onClick={onBackYear} name="play-skip-back" id="backwardYear"></ion-icon>
        <span id="yearDisplay" >{YearDisplay}</span>
        <ion-icon onClick={onNextYear} name="play-skip-forward" id="forwardYear"></ion-icon>
        </div>
    </div>

  );
};