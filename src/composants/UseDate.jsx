import { useEffect, useState } from 'react';

export const useDate = (events, mois) => {
  const [MonthDisplay, setMonthDisplay] = useState('');
  const [YearDisplay, setYearDisplay] = useState('');
  const [days, setDays] = useState([]);
  const eventForDate = date => events.find(e => e.date === date);

  useEffect(() => {
    const weekdays = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday',];
    //const weekdaysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dt = new Date();
    //const dayofweek = weekdaysShort[new Date().getDay()];
    if (mois !== 0) {
      dt.setMonth(new Date().getMonth() + mois);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    //MonthYearDisplay(`${dayofweek} ${day} ${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`);
    setMonthDisplay(`${dt.toLocaleDateString('fr-fr', { month: 'long' })}`);
    setYearDisplay(`${year}`);
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
    const daysArr = [];

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;

      if (i > paddingDays) {
        daysArr.push({
          value: i - paddingDays  ,
          event: eventForDate(dayString),
          isCurrentDay: i - paddingDays === day && mois === 0,
          date: dayString,
        });
      } else {
        daysArr.push({
          value: 'padding',
          event: null,
          isCurrentDay: false,
          date: '',
        });
      }
    }

    setDays(daysArr);
  }, [events, mois]);
  return {
    days,
    MonthDisplay,
    YearDisplay,
  };
};