import React from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarWeekDays from './CalendarWeekDays';
import CalendarCells from './CalendarCells';
import { useState, useEffect } from 'react';

function Calendar({ date }) {
  const getMonth = () => {
    let [day, month, year] = date.split('/');
    month = +month - 1;
    let dateProp = new Date(year, month, day);
    return dateProp;
  };
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth());
  }, [date]);

  return (
    <div className="calendar">
      <CalendarHeader currentMonth={currentMonth} />
      <CalendarWeekDays currentMonth={currentMonth} />
      <CalendarCells currentMonth={currentMonth} />
    </div>
  );
}

export default Calendar;
