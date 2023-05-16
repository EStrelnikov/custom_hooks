import { render, screen } from '@testing-library/react';
import RootApp from './RootApp';

test('renders learn react link', () => {
  render(<RootApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
