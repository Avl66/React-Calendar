import { format, startOfWeek, addDays } from 'date-fns';
const CalendarWeekDays = ({ currentMonth }) => {
  const dateFormat = 'EE';
  const days = [];
  let startDate = startOfWeek(currentMonth);
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col col-center" key={i}>
        {format(addDays(startDate, i), dateFormat).slice(0, 2)}
      </div>
    );
  }
  return (
    <div className="days row" data-testid="week-days">
      {days}
    </div>
  );
};
export default CalendarWeekDays;
