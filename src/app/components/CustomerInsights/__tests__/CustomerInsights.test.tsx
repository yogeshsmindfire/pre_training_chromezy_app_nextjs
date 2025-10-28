import { render, screen } from '@testing-library/react';
import CustomerInsights from '../CustomerInsights';

describe('CustomerInsights', () => {
  it('renders the section with header and insights', () => {
    render(<CustomerInsights />);

    expect(screen.getByText('FEATURED INSIGHTS')).toBeInTheDocument();
    expect(
      screen.getByText(/Were you looking to explore a specific topic/),
    ).toBeInTheDocument();
  });
});
