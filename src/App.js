import React, { useState, useEffect } from 'react';
import { CalendarHeader } from './composants/CalendarHeader';
import { Day } from './composants/Day';
import { NewEvent } from './composants/NewEvent';
import { DeleteEvent } from './composants/DeleteEvent';
import { DateArray } from './composants/DateArray';
export const App = () => {
  const [mois, setMois] = useState(0);
  const [clicked, setClicked] = useState();
  const [events, setEvents] = useState(
    localStorage.getItem('events') ? 
      JSON.parse(localStorage.getItem('events')) : 
      []
  );
  const eventForDate = date => events.find(e => e.date === date);
  const { days, MonthDisplay , YearDisplay } = DateArray(events, mois);
  useEffect(() => {localStorage.setItem('events', JSON.stringify(events));}, [events]);
  function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
  }

console.log();
  return(
    <>
      <div id="container">
        <CalendarHeader 
          MonthDisplay={capitalizeFirstLetter(MonthDisplay)}
          onNextMonth={() => setMois(mois + 1)}
          onBackMonth={() => setMois(mois - 1)}
          YearDisplay={YearDisplay}
          onNextYear={() => setMois(mois + 12)}
          onBackYear={() => setMois(mois - 12)}
        />

        <div id="weekdays">
          <div>Lundi</div>
          <div>Mardi</div>
          <div>Mercredi</div>
          <div>Jeudi</div>
          <div>Vendredi</div>
          <div>Samedi</div>
          <div>Dimanche</div>
        </div>

        <div id="calendar">
          {days.map((d, index) => (
            <Day
              key={index}
              day={d}
              onClick={() => {
                if (d.value !== 'padding') {
                  setClicked(d.date);
                }
              }}
            />
          ))}
        </div>
      </div>

      {
        clicked && !eventForDate(clicked) &&
        <NewEvent
          onClose={() => setClicked(null)}
          onSave={title => {
            setEvents([ ...events, { title, date: clicked }]);
            setClicked(null);
          }}
        />
      }

      {
        clicked && eventForDate(clicked) &&
        <DeleteEvent 
          eventText={eventForDate(clicked).title}
          onClose={() => setClicked(null)}
          onDelete={() => {
            setEvents(events.filter(e => e.date !== clicked));
            setClicked(null);
          }}
        />
      }
    </>
  );
};