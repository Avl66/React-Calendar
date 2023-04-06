import { render, screen } from '@testing-library/react';
import CalendarWeekDays from './CalendarWeekDays';

test('check number of days of the week', () => {
  let dateValue = new Date('2020', '01', '01');
  render(<CalendarWeekDays currentMonth={dateValue} />);

  const days = screen
    .getByTestId('week-days')
    .querySelectorAll('.col.col-center');
  expect(days).toHaveLength(7);
});

test('check days of the week', () => {
  let dateValue = new Date('2020', '01', '01');
  render(<CalendarWeekDays currentMonth={dateValue} />);
  //screen.logTestingPlaygroundURL();

  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  for (let i = 0; i < weekdays.length; i++) {
    expect(screen.getByText(weekdays[i])).toBeInTheDocument();
  }
});
