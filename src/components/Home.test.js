import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders home page', () => {
  render(<Home />);
  const heading = screen.getByText(/react/i);
  expect(heading).toBeInTheDocument();
});

test('Render error messagpe on screen for empty date field', () => {
  render(<Home />);
  const date = screen.getByRole('textbox', {
    name: /please enter the date:/i,
  });
  const error = screen.getByRole('heading', {
    name: /please enter the date in dd\/mm\/yyyy format/i,
  });

  expect(date.value).toEqual('');
  expect(error).toBeInTheDocument();
});
