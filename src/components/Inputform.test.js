import { render, screen } from '@testing-library/react';
import Inputform from './Inputform';
import user from '@testing-library/user-event';
const mock = jest.fn();

test('check input fields', () => {
  render(<Inputform />);
  const label = screen.getByText(/enter the date/i);
  const date = screen.getByRole('textbox', { name: /please enter the date:/i });

  const btn = screen.getByRole('button', { name: /submit/i });

  expect(label).toBeInTheDocument();
  expect(date).toBeInTheDocument();
  expect(btn).toBeInTheDocument();
});

test('Event triggered on submit action', async () => {
  render(<Inputform datePicker={mock} />);

  const date = screen.getByRole('textbox', {
    name: /please enter the date:/i,
  });
  const btn = screen.getByRole('button', { name: /submit/i });

  user.click(date);
  user.keyboard('12/02/1997');

  user.click(btn);
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith('12/02/1997');
});
