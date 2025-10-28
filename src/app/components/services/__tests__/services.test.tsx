import { render, screen } from '@testing-library/react';
import Services from '../Services';

describe('Services', () => {
  it('renders the services section with title and cards', () => {
    render(<Services />);

    expect(screen.getByText('Product Engineering')).toBeInTheDocument();
    expect(screen.getAllByText('Talk to a Product Expert')).toHaveLength(4);
  });
});
