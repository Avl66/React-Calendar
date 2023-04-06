import { render, screen } from '@testing-library/react';
import CalendarCells from './CalendarCells';

test('check days of the month', () => {
  let dateValue = new Date('2020', '01', '01'); //February -29 days for this month
  render(<CalendarCells currentMonth={dateValue} />);

  for (let i = 1; i <= 29; i++) {
    expect(screen.getByText(i)).toBeInTheDocument();
  }
  expect(screen.queryByText(30)).not.toBeInTheDocument();
});
