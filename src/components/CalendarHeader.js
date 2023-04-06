import { format } from 'date-fns';
const CalendarHeader = ({ currentMonth }) => {
  const dateFormat = 'MMMM yyyy';
  return (
    <div className="header row flex-middle">
      <div className="col col-center">
        <span>{format(currentMonth, dateFormat)}</span>
      </div>
    </div>
  );
};
export default CalendarHeader;
