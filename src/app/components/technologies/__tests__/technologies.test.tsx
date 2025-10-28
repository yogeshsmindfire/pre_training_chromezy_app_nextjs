import { render, screen } from '@testing-library/react';
import TechnologiesSection from '../Technologies';

describe('TechnologiesSection', () => {
  it('renders the technologies section with title and categories', () => {
    render(<TechnologiesSection />);

    expect(
      screen.getByText('INNOVATIVE TECHNOLOGIES KEEPING US AHEAD'),
    ).toBeInTheDocument();
    expect(screen.getByText('Web App Development')).toBeInTheDocument();
  });
});
