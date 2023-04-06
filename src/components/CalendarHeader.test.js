import { render, screen } from '@testing-library/react';
import CalendarHeader from './CalendarHeader';

test('check month and year of date field', () => {
  let dateValue = new Date('2020', '01', '01');
  render(<CalendarHeader currentMonth={dateValue} />);
  const Calheader = screen.getByText(/february 2020/i);
  expect(Calheader).toBeInTheDocument();
});
